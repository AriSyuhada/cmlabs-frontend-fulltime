import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'MealApp',
  description: 'A Webiste for All of Your Recipes',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
