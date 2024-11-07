import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { About } from './routes/About'
import { Home } from './routes/Home'
import { PortfolioItems } from './routes/PortfolioItems'
import { PortfolioItem } from './routes/PortfolioItem'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <PortfolioItems />
      },
      {
        path: '/portfolio/:id',
        element: <PortfolioItem />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
