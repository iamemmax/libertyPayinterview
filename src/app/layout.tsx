import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
const myFont = localFont({ src:[
  {
   path: '../../public/assets/fonts/ClashDisplay-Bold.otf',
   weight:"700" ,
   style:"normal"
  },
  {
   path: '../../public/assets/fonts/ClashDisplay-Bold.otf',
   weight:"400" ,
   style:"normal"
  },
  {
   path: '../../public/assets/fonts/ClashDisplay-Medium.otf',
   weight:"700" ,
   style:"normal"
  },
  {
   path: '../../public/assets/fonts/ClashDisplay-Medium.otf',
   weight:"400" ,
   style:"normal"
  },
] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
