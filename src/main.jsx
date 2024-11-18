import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home.jsx'
import { Projects } from './pages/Projects.jsx'
import { About } from './pages/About.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },{
        path: '/about',
        element: <About />,
      }
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
)
