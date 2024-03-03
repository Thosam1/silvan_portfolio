import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PrelineScript from './PrelineScript'
import {FULL_NAME} from "@/constants";

const inter = Inter({subsets: ['latin']})

/* Default SEO */
const title = "Home | Silvan Schürmann"
const description = "Hello there 👋, this is my personal website where I showcase my work 😄"
export const metadata: Metadata = {
    title,
    description,
    verification: {google: process.env.GOOGLE_SEO_CODE},
    alternates: {
        canonical: process.env.WEBSITE_URL,
    },
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: process.env.WEBSITE_URL,
        siteName: FULL_NAME,
        title,
        description,
        images: [
            {
                url: process.env.WEBSITE_URL + '/website_thumbnail.jpg',
                alt: title
            }
        ]
    },
    twitter: {
        // handle: '@handle',
        // site: '@',
        card: "summary_large_image", // summary_large_image
    },
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
