import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/themeSwitch'
import ThemeContextProvider from '@/context/theme-context'
import MotionProvider from '@/components/motion-provider'

const inter = Inter({ subsets: ['latin'] })

// Runs before first paint. ThemeContextProvider only applies the saved theme
// in an effect, i.e. after the JS bundle has hydrated, so dark-mode visitors
// used to see the whole page flash light on every load.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}`

export const metadata = {
    title: 'Dogukan Kaan Bozkurt | Personal Portfolio',
    description: 'Senior Software Engineer, Ads & Growth: playable ads, HTML5 games, and AI-powered marketing tools, with 5 years of experience.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en"
            className="!scroll-smooth"
            // The theme script adds `dark` to this element before React hydrates.
            suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeScript }} />
            </head>
            <body className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
            >
                <div className="bg-[#adbaff] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#946263]"></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <MotionProvider>
                            <Header />
                            {children}
                            <Footer />
                            <Toaster position="top-right" />
                            <ThemeSwitch />
                        </MotionProvider>
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>

            </body>
        </html>
    )
}
