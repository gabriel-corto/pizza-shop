import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./order-details";


export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-4 w-4" />
              <span className="sr-only">mostrar detalhes</span>
            </Button>
          </DialogTrigger>

          <OrderDetails />
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        jgdowdwdgwdsdgddfs
      </TableCell>
      <TableCell className="text-muted-foreground">
        há 15 minutos
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span className="font-medium text-muted-foreground">Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Gabriel Francisco</TableCell>
      <TableCell className="font-medium">R$ 149,90</TableCell>
      <TableCell>
        <Button size="xs" variant="outline">
          <ArrowRight className="mr h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button size="xs" variant="outline">
          <X className="mr h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}