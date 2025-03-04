import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { Button } from "./ui/button";

interface PaginationProps {
  currentPage: number;
  totalData: number;
  itemsPerPage: number;
  onPageChange: (pageIndex: number) => Promise<void> | void;
}

export function Pagination({
  currentPage,
  totalData,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const pages = Math.ceil(totalData / itemsPerPage) || 1;

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalData} pedidos
      </span>

      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {currentPage + 1} de {pages}
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => onPageChange(0)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsLeft className="h-4 w-4 mr-1" />
            <span className="sr-only">Primeira Página</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="sr-only">Página anterior</span>
          </Button>
          <Button
            onClick={() => onPageChange(currentPage + 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronRight className="h-4 w-4 mr-1" />
            <span className="sr-only">Próxima Página</span>
          </Button>
          <Button
            onClick={() => onPageChange(pages - 1)}
            variant="outline"
            className="h-8 w-8 p-0"
          >
            <ChevronsRight className="h-4 w-4 mr-1" />
            <span className="sr-only">Última Página</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
