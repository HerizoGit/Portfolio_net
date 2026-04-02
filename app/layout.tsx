import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Herizo Andrianarijaona | Ingénieur Fullstack .NET',
  description:
    'Portfolio de Herizo Andrianarijaona, ingénieur fullstack .NET basé à Lyon, spécialisé en C#, .NET, Angular, Vue.js, microservices et qualité logicielle.',
  openGraph: {
    title: 'Herizo Andrianarijaona | Ingénieur Fullstack .NET',
    description:
      '6 ans d’expérience en développement fullstack .NET, architectures modernes, APIs REST, microservices et qualité logicielle.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
