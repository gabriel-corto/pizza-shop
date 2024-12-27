import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen antialiased">
      <div className="border-r border-foreground/5 bg-muted p-10 flex flex-col justify-between">
        <div className="flex items-center text-lg text-foreground gap-3">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex items-center justify-center relative">
        <Outlet />
      </div>
    </div>
  )
}