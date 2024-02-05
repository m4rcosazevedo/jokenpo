import { Layout } from '@/components'
import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('@/pages/home'))
const LetsGo = lazy(() => import('@/pages/lets-go'))
const NotFound = lazy(() => import('@/pages/not-found'))

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/lets-go" element={<LetsGo />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
