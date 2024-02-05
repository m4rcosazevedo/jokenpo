import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { Header, Title } from '..'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-cyan-700 to-blue-900 pt-8">
      <section className="container">
        <Header />

        <main className="max-w-xl m-auto">
          <ErrorBoundary fallback={<Title>Ops... Ocorreu um erro e em breve vamos resolver</Title>}>
            <Suspense fallback={<Title>Carregando...</Title>}>
              <Outlet />
            </Suspense>
          </ErrorBoundary>
        </main>
      </section>
    </div>
  )
}
