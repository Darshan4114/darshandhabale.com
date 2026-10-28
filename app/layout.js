export const metadata = {
  title: 'Darshan Dhabale | Full-stack engineer | AI platforms, fintech, SaaS',
  description: 'Full-stack engineer with 5 years shipping production software: the backend of VentureMind.ai, fintech at Tredzy, Salesforce lending workflows, and MazaClass, my own SaaS. Node.js, React, Go, AWS. Email: dev@darshandhabale.com',
}

import "../styles/globals.css";

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
