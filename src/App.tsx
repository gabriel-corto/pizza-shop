import { RouterProvider } from "react-router-dom";
import "./index.css"
import { routes } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <RouterProvider router={routes} />
    </HelmetProvider>
  )
}