import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { MainLayout } from '~/features/layout/main'
import { Path } from '~/shared/config/constants'
import { LayoutMinimal } from '~/features/layout/minimal'
import { NotFoundPage } from '~/shared/ui/NotFoundPage'

import { GuardAuth } from './guards/auth'

const HomePage = lazy(() => import('../pages/home'))
const ChatPage = lazy(() => import('../pages/chat'))
const LoginPage = lazy(() => import('../pages/login'))
const SignUpPage = lazy(() => import('../pages/sign-up'))

export const router = createBrowserRouter([
  {
    element: <GuardAuth />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: Path.Home,
            element: <HomePage />,
          },
          {
            path: `/:slug`,
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
  {
    element: <LayoutMinimal />,
    children: [
      {
        path: Path.Login,
        element: <LoginPage />,
      },
      {
        path: Path.SignUp,
        element: <SignUpPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
