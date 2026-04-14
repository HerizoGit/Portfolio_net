export const profile = {
  name: 'Herizo Andrianarijaona',
  role: 'Ingénieur Fullstack .NET et mobile',
  location: 'Lyon, France',
  yearsOfExperience: '6 ans d’expérience',
  summary:
    'Je conçois des applications web robustes, performantes et sécurisées, avec un fort focus sur la qualité de code, les architectures modernes et l’impact produit intégrant Apache Kafka pour gérer les flux d’événements en temps réel.',
  tagline:
    'C# · .NET · Angular · Vue.js · Microservices · Azure DevOps',
  availability: 'Disponible pour de nouvelles opportunités .NET / Fullstack.',
  cvLabel: 'CV sur demande',
  socialLinks: [
    {
      label: 'Autohub',
      href: 'https://www.autohub.mg',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/herizo-andrianarijaona-045872195/',
    },
    {
      label: 'Email',
      href: 'mailto:herizonarijaona@gmail.com',
    },
  ],
}

export const stats = [
  { value: '6+', label: 'années d’expérience' },
  { value: '3', label: 'environnements majeurs récents' },
  { value: '10+', label: 'technologies maîtrisées' },
  { value: '100%', label: 'focus qualité & fiabilité' },
]

export const strengths = [
  'Conception d’APIs REST et services backend en C# / .NET',
  'Développement frontend moderne avec Angular et Vue.js',
  'Architecture microservices et découpage métier',
  'Optimisation SQL Server et Entity Framework',
  'Qualité logicielle avec NUnit, SonarQube et revues de code',
  'CI/CD avec GitLab et Azure DevOps',
]

export const stack = {
  backend: ['C#', '.NET', 'ASP.NET Core', 'Entity Framework', 'WCF', 'REST APIs'],
  frontend: ['Angular', 'Vue.js', 'React.js', 'React Native'],
  data: ['SQL Server', 'MongoDB'],
  devops: ['Azure DevOps', 'GitLab CI/CD', 'Docker', 'SonarQube', 'NUnit'],
}

export const projects = [
  {
    title: 'Autohub et vadi',
    subtitle: 'Plateforme web et mobile de vente et location de véhicules et application de rencotre',
    period: '',
    description:
      'Projet personnel conçu pour centraliser la vente et la location de voitures et motos dans une expérience moderneet aussi d’une rencontre entre deux personnes, performante et scalable intégrant Apache Kafka pour gérer les flux d’événements en temps réel.',
    highlights: [
      'Backend Node.js avec architecture orientée services et APIs REST',
      'Frontend React.js pour l’application web et React Native pour le mobile',
      'Intégration de Apache Kafka pour gérer les événements métiers en temps réel',
      'Base MongoDB adaptée aux usages catalogue, annonces et transactions',
      'Déploiement et livraison continue avec Docker et GitLab CI/CD',
    ],
    metrics: [
      '+60% performance API',
      'Architecture scalable microservices',
      'Réduction latence sur requêtes critiques',
      'Gestion des événements métiers en temps réel et communication asynchrone entre microservices',
    ],
    links: [
      { label: 'Voir le site', href: 'https://www.autohub.mg' },
      { label: '📱 Télécharger l’app autohub', href: '/Autohub-1.0.0-universal.apk' },
      { label: '📱 Télécharger l’app de rencontre vadi', href: '/Vadi-1.0.0-universal.apk' }
    ],
  },
  {
    title: 'HCL & CEA',
    subtitle: 'Maintenance évolutive sur des applications critiques',
    period: 'Octobre 2023 — Décembre 2025',
    description:
      'Interventions sur des applications métier sensibles dans les domaines de la santé, de l’archivage, de l’industrie et de la cybersécurité web.',
    highlights: [
      'Développements backend en C# / .NET, Entity Framework et SQL Server',
      'Évolutions frontend en Angular et Vue.js avec amélioration performance',
      'Mise en place d’APIs REST, services WCF et composants microservices',
      'Renforcement de la qualité et de la sécurité et de la couverture de code via NUnit, SonarQube, GitLab et Azure DevOps',
    ],
    metrics: [
      'Architecture scalable microservices',
    ],
    links: [],
  },
  {
    title: 'Tomate Madagascar',
    subtitle: 'ERP web métier',
    period: 'Juillet 2019 — Avril 2023',
    description:
      'Participation au développement et à la maintenance d’un ERP métier en production, avec un fort focus sur la performance, la stabilité et la qualité du code.',
    highlights: [
      'Conception et développement en C# / .NET',
      'Optimisation des requêtes SQL Server (performance)',
      'Mise en place et utilisation d’Entity Framework',
      'Correction de bugs critiques en environnement de production',
      'Analyse fonctionnelle et technique via JIRA',
      'Travail en environnement Agile/Scrum',
    ],
    metrics: [
      '+40% performance API',
      'Réduction latence sur requêtes critiques',
    ],
    links: [],
  },
]

export const experiences = [
  {
    company: 'HCL / CEA',
    role: 'Ingénieur développement fullstack .NET',
    period: '2023 — 2025',
    details: [
      'Maintenance applicative évolutive sur des domaines critiques.',
      'Développement backend en C# / .NET, Entity Framework, SQL Server.',
      'Travaux frontend en Angular et Vue.js.',
      'Mise en œuvre de tests unitaires, analyse qualité et intégration continue.',
    ],
  },
  {
    company: 'Technology & Strategy',
    role: 'Développeur .NET',
    period: '2023',
    details: [
      'Conception et évolution d’une application de gestion de compétences.',
      'Participation à l’analyse du besoin, à la conception et au chiffrage.',
      'Développement de composants techniques et APIs.',
    ],
  },
  {
    company: 'Tomate Madagascar',
    role: 'Développeur fullstack .NET',
    period: '2019 — 2023',
    details: [
      'Développement d’un ERP web et maintenance de modules métier.',
      'Analyse des besoins, modélisation SQL Server et optimisation des requêtes.',
      'Implémentation C# / .NET, Entity Framework et interfaces web.',
    ],
  },
]

export const education = [
  {
    title: 'Master en Génie Logiciel et Base de données',
    school: 'ENI Madagascar',
    period: '2019',
  },
]

export const architectures = [
  {
    title: 'Autohub',
    subtitle: 'Architecture Microservices',
    description:
      'Architecture orientée services pour une plateforme scalable de vente et location de véhicules.',
    highlights: [
      'API Gateway centralisée',
      'Services indépendants (User, Vehicle, Booking)',
      'Backend Node.js avec APIs REST',
      'MongoDB (NoSQL)',
      'Evènement en temps réel et communication asynchrone entre service',
      'CI/CD GitLab',
      'Docker pour le déploiement',
    ],
  },
  {
    title: 'Applications .NET',
    subtitle: 'Architecture microservices',
    description:
      'Architecture robuste pour des applications critiques dans la santé et l’industrie.',
    highlights: [
      'Architecture N-tier et microservices',
      'APIs REST en ASP.NET Core',
      'Entity Framework + SQL Server',
      'Frontend Angular / Vue.js',
      'Tests unitaires avec NUnit',
      'Qualité code avec SonarQube',
    ],
  },
]
