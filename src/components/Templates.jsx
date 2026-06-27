import TemplateShowcase from './TemplateShowcase'

const templates = [
  {
    slug: 'solar-business',
    title: 'Maison Interior',
    description: 'Minimalist interior eCommerce — editorial split hero, product grid, and warm neutral palette inspired by luxury furniture brands.',
    previewUrl: '/templates/solar-business/index.html',
    tags: ['Interior', 'E-commerce']
  },
  {
    slug: 'wild-tracks',
    title: 'Horizon Travel',
    description: 'Immersive travel landing page — full-bleed hero, floating search bar, destination cards, and adventure booking flow.',
    previewUrl: '/templates/wild-tracks/index.html',
    tags: ['Travel', 'Booking']
  },
  {
    slug: 'wave-riders',
    title: 'NeuralAI',
    description: 'Premium dark-mode AI SaaS — gradient accents, glass feature cards, dashboard mockup, and tiered pricing.',
    previewUrl: '/templates/wave-riders/index.html',
    tags: ['SaaS', 'AI', 'Startup']
  },
  {
    slug: 'local-boutique',
    title: 'StyleCart',
    description: 'Modern shopping website — promo bar, category nav, flash sale banner, product cards with ratings and cart actions.',
    previewUrl: '/templates/local-boutique/index.html',
    tags: ['Shopping', 'Retail']
  },
  {
    slug: 'sa-golfing',
    title: 'SA Golfing',
    description: 'Golf course discovery and booking platform — course listings, search, and a polished sports tourism layout.',
    previewUrl: 'https://sagolfing.up.railway.app/',
    tags: ['Golf', 'Sports', 'Booking'],
    external: true
  }
]

function Templates() {
  return (
    <section id="templates" className="templates">
      <div className="container">
        <div className="section-header">
          <h2>Website Templates</h2>
          <p>
            From modern simple designs to feature-rich layouts — browse our starter templates
            and swipe through live, interactive previews.
          </p>
        </div>
        <TemplateShowcase templates={templates} />
      </div>
    </section>
  )
}

export default Templates
