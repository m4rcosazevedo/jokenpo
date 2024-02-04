import { Outlet } from 'react-router-dom'
import { Header } from '..'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-700 to-blue-900 pt-8">
      <section className="container">
        <Header />

        <main className="max-w-xl m-auto">
          <Outlet />
        </main>
      </section>
    </div>
  )
}
