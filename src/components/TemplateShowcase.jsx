import { useCallback, useEffect, useRef, useState } from 'react'

const SWIPE_THRESHOLD = 50
const PREVIEW_WIDTH = 1280

function TemplateShowcase({ templates }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [loadedIframes, setLoadedIframes] = useState(() => new Set([0]))
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const dragRef = useRef({ startX: 0, dragging: false })
  const dragOffsetRef = useRef(0)
  const navRef = useRef(null)
  const sectionRef = useRef(null)
  const hasMountedRef = useRef(false)

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(templates.length - 1, index))
    setActiveIndex(clamped)
    setLoadedIframes((prev) => new Set(prev).add(clamped))
    setDragOffset(0)
  }, [templates.length])

  const handleDragStart = (clientX) => {
    dragRef.current = { startX: clientX, dragging: true }
    setIsDragging(true)
  }

  const handleDragMove = (clientX) => {
    if (!dragRef.current.dragging) return
    const offset = clientX - dragRef.current.startX
    dragOffsetRef.current = offset
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    if (!dragRef.current.dragging) return
    const delta = dragOffsetRef.current

    dragRef.current = { startX: 0, dragging: false }
    dragOffsetRef.current = 0
    setIsDragging(false)

    if (delta < -SWIPE_THRESHOLD) {
      goTo(activeIndex + 1)
    } else if (delta > SWIPE_THRESHOLD) {
      goTo(activeIndex - 1)
    } else {
      setDragOffset(0)
    }
  }

  const onTouchStart = (e) => handleDragStart(e.touches[0].clientX)
  const onTouchMove = (e) => handleDragMove(e.touches[0].clientX)
  const onTouchEnd = () => handleDragEnd()

  const onPointerDown = (e) => {
    if (e.pointerType === 'touch') return
    e.currentTarget.setPointerCapture(e.pointerId)
    handleDragStart(e.clientX)
  }
  const onPointerMove = (e) => {
    if (e.pointerType === 'touch' || !dragRef.current.dragging) return
    handleDragMove(e.clientX)
  }
  const onPointerUp = (e) => {
    if (e.pointerType === 'touch') return
    handleDragEnd()
  }

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    const nav = navRef.current
    const activePill = nav?.children[activeIndex]
    if (!nav || !activePill) return

    const pillLeft = activePill.offsetLeft
    const pillWidth = activePill.offsetWidth
    const navWidth = nav.offsetWidth
    nav.scrollTo({
      left: pillLeft - navWidth / 2 + pillWidth / 2,
      behavior: 'smooth'
    })
  }, [activeIndex])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!sectionRef.current?.contains(document.activeElement) &&
          !sectionRef.current?.matches(':hover')) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goTo(activeIndex - 1)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goTo(activeIndex + 1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, goTo])

  const fitIframe = useCallback((iframe) => {
    const viewport = iframe.closest('.template-viewport')
    const slide = iframe.closest('.template-slide')
    const wrap = iframe.parentElement
    if (!viewport || !slide || !wrap) return

    const applyScale = (contentHeight) => {
      const scale = viewport.clientWidth / PREVIEW_WIDTH
      const scaledHeight = contentHeight * scale

      iframe.style.width = `${PREVIEW_WIDTH}px`
      iframe.style.height = `${contentHeight}px`

      // zoom adjusts layout size in Chromium; transform fallback for Firefox
      if ('zoom' in iframe.style) {
        iframe.style.zoom = String(scale)
        iframe.style.transform = 'none'
      } else {
        iframe.style.zoom = ''
        iframe.style.transform = `scale(${scale})`
        iframe.style.transformOrigin = 'top left'
      }

      wrap.style.width = '100%'
      wrap.style.height = `${scaledHeight}px`
      slide.style.height = `${scaledHeight}px`
    }

    try {
      const doc = iframe.contentDocument
      if (!doc) return

      let lockStyle = doc.getElementById('katalyst-preview-lock')
      if (!lockStyle) {
        lockStyle = doc.createElement('style')
        lockStyle.id = 'katalyst-preview-lock'
        doc.head.appendChild(lockStyle)
      }

      lockStyle.textContent = `
        html, body {
          overflow: hidden !important;
          margin: 0 !important;
          padding: 0 !important;
          width: ${PREVIEW_WIDTH}px !important;
          max-width: ${PREVIEW_WIDTH}px !important;
        }
      `

      const measure = () => {
        const contentHeight = Math.max(
          doc.documentElement.scrollHeight,
          doc.body?.scrollHeight ?? 0
        )
        applyScale(contentHeight)
      }

      measure()
      doc.fonts?.ready?.then(measure).catch(measure)
    } catch {
      iframe.style.width = '100%'
      iframe.style.height = '2400px'
      iframe.style.zoom = ''
      iframe.style.transform = 'none'
      wrap.style.height = '2400px'
      slide.style.height = '2400px'
    }
  }, [])

  const handleIframeLoad = useCallback((e) => {
    fitIframe(e.target)
  }, [fitIframe])

  useEffect(() => {
    const section = sectionRef.current
    const viewport = section?.querySelector('.template-viewport')
    if (viewport) viewport.scrollTop = 0

    const iframe = section?.querySelectorAll('.template-iframe')[activeIndex]
    if (iframe) fitIframe(iframe)
  }, [activeIndex, fitIframe])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const viewport = section.querySelector('.template-viewport')
    if (!viewport) return

    const resizeAll = () => {
      section.querySelectorAll('.template-iframe').forEach((iframe) => fitIframe(iframe))
    }

    const observer = new ResizeObserver(resizeAll)
    observer.observe(viewport)
    window.addEventListener('resize', resizeAll)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', resizeAll)
    }
  }, [fitIframe])

  const activeTemplate = templates[activeIndex]

  return (
    <div className="template-showcase" ref={sectionRef} tabIndex={0}>
      <nav className="template-nav" ref={navRef} aria-label="Template selection">
        {templates.map((template, index) => (
          <button
            key={template.slug}
            type="button"
            className={`template-nav-pill ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
            aria-current={index === activeIndex ? 'true' : undefined}
          >
            <span className="template-nav-number">{index + 1}.</span>
            {template.title}
          </button>
        ))}
      </nav>

      <div className="browser-frame">
        <div className="browser-chrome">
          <div className="browser-dots">
            <span /><span /><span />
          </div>
          <div className="browser-url" aria-hidden="true">
            {activeTemplate.previewUrl.replace(/^https?:\/\//, '')}
          </div>
          <a
            href={activeTemplate.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="browser-open-link"
          >
            Open full site →
          </a>
        </div>

        <div
          className="template-viewport"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div
            className={`template-track ${isDragging ? 'dragging' : ''}`}
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`
            }}
          >
            {templates.map((template, index) => {
              const isLoaded = loadedIframes.has(index)

              return (
                <div key={template.slug} className="template-slide">
                  {isLoaded ? (
                    <div className="template-iframe-wrap">
                      <iframe
                        src={template.previewUrl}
                        title={`${template.title} preview`}
                        className="template-iframe"
                        scrolling="no"
                        onLoad={handleIframeLoad}
                        {...(!template.external && {
                          sandbox: 'allow-scripts allow-same-origin allow-forms'
                        })}
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="template-placeholder">
                      <span>Loading preview…</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="template-controls">
        <button
          type="button"
          className="template-arrow"
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous template"
        >
          <i className="fas fa-chevron-left" />
        </button>

        <div className="template-dots" role="tablist" aria-label="Template slides">
          {templates.map((template, index) => (
            <button
              key={template.slug}
              type="button"
              role="tab"
              className={`template-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goTo(index)}
              aria-selected={index === activeIndex}
              aria-label={`Show ${template.title}`}
            />
          ))}
        </div>

        <button
          type="button"
          className="template-arrow"
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === templates.length - 1}
          aria-label="Next template"
        >
          <i className="fas fa-chevron-right" />
        </button>
      </div>

      <p className="template-description">{activeTemplate.description}</p>
    </div>
  )
}

export default TemplateShowcase
