import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from './pages/_layouts/app';
import { AuthLayout } from './pages/_layouts/auth';

import { Dashboard } from './pages/app/Dashboard/dashboard';

import { SignIn } from './pages/auth/sign-in';
import { SignUp } from './pages/auth/sign-up';
import { Orders } from './pages/app/orders/orders';
import { NotFound } from './pages/404';

export const routes = createBrowserRouter([
  {
    path: '/',
    errorElement: <NotFound />,
    element: <AppLayout />,
    children: [
      { path: '', element: <Dashboard /> },
      { path: 'orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'sign-in', element: <SignIn /> },
      { path: 'sign-up', element: <SignUp /> },
    ],
  },
]);
