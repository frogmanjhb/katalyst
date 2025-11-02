import BounceCards from './BounceCards'

function Projects() {
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
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>Our Projects</h2>
          <p>Showcasing our recent work and successful collaborations</p>
        </div>
        
        {/* BounceCards - Main project display */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginTop: '3rem',
          padding: '0 1rem'
        }}>
          <BounceCards
            projects={projects}
            containerWidth={800}
            containerHeight={450}
            animationDelay={0.3}
            animationStagger={0.08}
            transformStyles={[
              'rotate(12deg) translate(-240px)',
              'rotate(6deg) translate(-120px)',
              'rotate(-4deg) translate(120px)',
              'rotate(-10deg) translate(240px)'
            ]}
            enableHover={true}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects

