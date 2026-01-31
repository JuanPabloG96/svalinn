import { Header } from '@components/layouts/Header'
import { Footer } from '@components/layouts/Footer'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center grow">
        {children}
      </main>
      <Footer />
    </>
  )
}
