import '@/styles/globals.css'

export const metadata = {
  title: 'comZ',
  description: 'A community based social media platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}