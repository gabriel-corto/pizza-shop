import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col bg-muted text-muted-foreground border-r p-10 justify-between">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Pizza className="h-5 w-5" />
          <span className="font-semibold">pizza.shop</span>
        </div>

        <footer className="text-sm">
          Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}