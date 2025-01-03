import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { AuthLayout } from "./pages/_layouts/auth";

import { Dashboard } from "./pages/app/Dashboard/dashboard";

import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { Orders } from "./pages/app/Orders/orders";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {path: "", element: <Dashboard />},
      {path: "orders", element: <Orders />},
    ]
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {path: "sign-in", element: <SignIn />},
      {path: "sign-up", element: <SignUp />},
    ]
  },
])