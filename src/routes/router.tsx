import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<h1>Deu Ruim</h1>}>
        <Suspense fallback={<p>Carregando....</p>}>
          <Routes>
            <Route index element={<h1>Olá Mundo</h1>} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
