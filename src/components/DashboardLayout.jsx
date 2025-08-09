import Header from './Header'
import Footer from './Footer'
import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16 pb-16 flex">
        <div className="px-4">
          <Navigation />
        </div>
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}