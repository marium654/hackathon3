import type { Metadata } from 'next'
import { Poppins } from "next/font/google"
import './globals.css'
import NavBar from '@/components/common/NavBar'
import FooterSection from '@/components/sections/FooterSection'
import { Toaster } from '@/components/ui/toaster'
import LoadingIndicator from '@/components/common/LoadingIndicator'
import { SearchProvider } from '@/context/searchContext'
import { AuthWrapper } from '@/components/ui/Authwrapper'
import { FilterProvider } from '@/context/filterContext'

export const metadata: Metadata = {
  title: 'Furniro Ecommerce',
  description: 'Get any furniture items on the fly',
}

const poppin = Poppins({ subsets: ["latin"], weight: ["100", "200", "300", "400", "500", "700"] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppin.className} >
        <main className="bg-white">
          <AuthWrapper>
            <SearchProvider>
              <FilterProvider>
              <LoadingIndicator />
              <NavBar />
              {children}
              <Toaster />
              <div className="mt-[56px]">
                <FooterSection />
              </div>
              </FilterProvider>
            </SearchProvider>
          </AuthWrapper>
        </main>
      </body>
    </html>
  )
}