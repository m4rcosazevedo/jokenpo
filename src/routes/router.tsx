import { Layout } from '@/components'
import { Suspense, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))

export default function Router() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Deu Ruim</h1>}>
        <Suspense fallback={<p>Carregando....</p>}>
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
