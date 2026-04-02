import { education, experiences, profile, projects, stack, stats, strengths } from '@/components/data'
import { motion } from 'framer-motion'

const stackEntries = Object.entries(stack)

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.role,
  address: {
    '@type': '69500',
    addressLocality: 'Bron',
    addressCountry: 'FR',
  },
  url: 'https://www.autohub.mg',
  knowsAbout: [
    'C#',
    '.NET',
    'Angular',
    'Vue.js',
    'Microservices',
    'SQL Server',
    'Azure DevOps',
  ],
}

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero section">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Portfolio · {profile.location}</span>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tagline">{profile.tagline}</p>
            <p className="lead">{profile.summary}</p>
            <div className="cta-row">
              <a className="button primary" href="#projects">
                Voir mes projets
              </a>
              <a className="button secondary" href="#contact">
                Me contacter
              </a>
            </div>
            <p className="availability">{profile.availability}</p>
          </div>

          <div className="hero-card card">
            <div className="status-pill">{profile.yearsOfExperience}</div>
            <h2>Expertise orientée produit et qualité logicielle</h2>
            <p>
              Développement fullstack, architecture de services, performance backend,
              intégration continue et expérience utilisateur sur des applications métier.
            </p>
            <ul className="mini-list">
              <li>✔ APIs REST & services métier</li>
              <li>✔ Angular / Vue.js / React</li>
              <li>✔ SQL Server / MongoDB</li>
              <li>✔ GitLab CI/CD / Azure DevOps / Docker</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="card stat-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="container split-grid">
          <div>
            <span className="eyebrow">À propos</span>
            <h2>Un profil fullstack .NET construit sur des projets concrets</h2>
            <p>
              Basé à Lyon, j’évolue depuis plusieurs années sur des environnements techniques exigeants,
              avec une approche orientée robustesse, lisibilité du code et valeur métier.
            </p>
            <p>
              J’aime intervenir autant sur le backend que sur le frontend, structurer des architectures propres,
              faire évoluer des applications existantes et construire des produits utiles à fort potentiel.
            </p>
          </div>

          <div className="card">
            <h3>Forces clés</h3>
            <ul className="feature-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="stack">
        <div className="container">
          <span className="eyebrow">Stack technique</span>
          <h2>Des technologies alignées avec les projets modernes</h2>
          <div className="stack-grid">
            {stackEntries.map(([category, items]) => (
              <article key={category} className="card">
                <h3>{formatCategory(category)}</h3>
                <div className="chip-wrap">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <span className="eyebrow">Projets sélectionnés</span>
          <h2>Des réalisations qui mettent en avant expertise et impact</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article key={project.title} className="card project-card">
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.subtitle}</p>
                  </div>
                  <span className="project-period">{project.period}</span>
                </div>
                <p>{project.description}</p>
                <ul className="feature-list compact">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {project.links.length > 0 && (
                  <div className="link-row">
                    {project.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <div className="container">
          <span className="eyebrow">Expérience</span>
          <h2>Un parcours progressif entre produit, services et enjeux métier</h2>
          <div className="timeline">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.period}`} className="card timeline-card">
                <div className="timeline-head">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="muted">{experience.company}</p>
                  </div>
                  <span className="project-period">{experience.period}</span>
                </div>
                <ul className="feature-list compact">
                  {experience.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="education">
        <div className="container split-grid">
          <div className="card">
            <span className="eyebrow">Formation</span>
            <h2>Base académique</h2>
            {education.map((item) => (
              <div key={item.title} className="education-item">
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                <span className="muted">{item.period}</span>
              </div>
            ))}
          </div>

          <div className="card" id="contact">
            <span className="eyebrow">Contact</span>
            <h2>Parlons de votre prochain projet</h2>
            <p>
              Vous recherchez un profil .NET capable d’intervenir sur l’architecture, le backend,
              le frontend et la qualité logicielle ? Échangeons.
            </p>
            <div className="link-list">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="contact-note">
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

function formatCategory(value: string) {
  switch (value) {
    case 'backend':
      return 'Backend'
    case 'frontend':
      return 'Frontend'
    case 'data':
      return 'Data'
    case 'devops':
      return 'DevOps & Qualité'
    default:
      return value
  }
}
