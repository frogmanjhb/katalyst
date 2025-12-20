import { useEffect, useState } from 'react'
import BounceCards from './BounceCards'

function Projects() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const projects = [
    {
      icon: 'fa-chess',
      title: 'Chess System',
      description: 'Chess management platform for schools.',
      tags: ['Chess', 'Management System'],
      url: 'https://chesssystem.up.railway.app/',
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=400&h=400&fit=crop'
    },
    {
      icon: 'fa-wallet',
      title: 'Bank of Life',
      description: 'Banking simulation platform for students in school.',
      tags: ['Finance', 'Banking'],
      url: 'https://bankoflife.up.railway.app/login',
      image: 'https://dashboard.thefinanser.com/wp-content/uploads/2021/09/bank.jpeg'
    },
    {
      icon: 'fa-heart',
      title: 'REACT',
      description: 'Mood check-in and well-being system for teachers and students.',
      tags: ['Well-being', 'Education', 'Analytics'],
      url: 'https://checkinapp-production.up.railway.app/',
      image: 'https://www.ie.edu/insights/wp-content/uploads/2021/06/MacGregor-Feature.png'
    },
    {
      icon: 'fa-history',
      title: 'Voices of the Past',
      description: 'Step into South Africa\'s living archive. Follow the echoes, uncover the stories, and shape history.',
      tags: ['Archive', 'History', 'WebGL'],
      url: 'https://voicesofthepast.netlify.app/',
      image: '/images/oldsa.jpg'
    },
    {
      icon: 'fa-mountain',
      title: 'Top Lodge',
      description: 'Lodge management and booking platform for mountain retreats.',
      tags: ['Lodge', 'Booking', 'Management'],
      url: 'https://toplodge.up.railway.app/',
      image: '/images/Toplodge.jpg'
    },
    {
      icon: 'fa-golf-ball',
      title: 'SA Golfing',
      description: 'Golf course management and booking platform for South African golf clubs.',
      tags: ['Golf', 'Booking', 'Sports'],
      url: 'https://sagolfing.up.railway.app/',
      image: '/images/Golfer2222.jpg'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Web Development Projects & Portfolio</h2>
          <p>Showcasing our expert web development work - custom websites, web applications, and successful client collaborations</p>
        </div>
        
        {/* BounceCards - Main project display */}
        <div className="bounce-cards-wrapper">
          <BounceCards
            projects={projects}
            containerWidth={isMobile ? 800 : 1200}
            containerHeight={isMobile ? 350 : 450}
            animationDelay={0.3}
            animationStagger={0.08}
            transformStyles={
              isMobile 
                ? [
                    'rotate(12deg) translate(-225px)',
                    'rotate(6deg) translate(-112px)',
                    'rotate(0deg) translate(0px)',
                    'rotate(-3deg) translate(112px)',
                    'rotate(-6deg) translate(225px)',
                    'rotate(-12deg) translate(337px)'
                  ]
                : [
                    'rotate(16deg) translate(-350px)',
                    'rotate(8deg) translate(-175px)',
                    'rotate(0deg) translate(0px)',
                    'rotate(-4deg) translate(175px)',
                    'rotate(-8deg) translate(350px)',
                    'rotate(-14deg) translate(525px)'
                  ]
            }
            enableHover={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects

