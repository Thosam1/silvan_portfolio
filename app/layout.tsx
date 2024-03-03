import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PrelineScript from './PrelineScript'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
    verification: {google: "-NttIeCsNFX7bi_Rj6onoCpyFICL51IJWnNl0mwkE2U"},
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Navbar/>
        <main>
            {children}
        </main>
        <Footer/>
        <PrelineScript/>
        </body>
        </html>
    )
}
