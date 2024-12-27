import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Header />

      <div className="flex flex-col gap-4 p-8 pt-6 px-6">
        <Outlet />
      </div>
    </div>
  )
}