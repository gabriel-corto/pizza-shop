import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableRow, TableCell } from "@/components/ui/table";
import { Search, ArrowRight, X, Loader } from "lucide-react";
import { OrderDetails } from "./order-details";
import { OrderStatus } from "./order-status";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { cancelOrder } from "@/api/cancel-order";
import { GetOrdersResponse } from "@/api/get-orders";

interface OrderProps {
  order: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  };
}
export function OrderTableRow({ order }: OrderProps) {
  const queryClient = useQueryClient();

  const { mutateAsync: cancelOrderFn, isPending: isCanceling } = useMutation({
    mutationFn: cancelOrder,
    async onSuccess(_, { orderId }) {
      const cached = queryClient.getQueriesData<GetOrdersResponse>({
        queryKey: ["orders"],
      });

      cached.forEach(([cacheKey, cacheData]) => {
        if (!cacheData) {
          return;
        }

        queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
          ...cacheData,
          orders: cacheData.orders.map((order) => {
            if (order.orderId === orderId) {
              return { ...order, status: "canceled" };
            }

            return order;
          }),
        });
      });
    },
  });

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

          <OrderDetails orderId={order.orderId} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>{" "}
      <TableCell className="font-medium">
        {order.total.toLocaleString("pt-BR", {
          style: "currency",
          currency: "Akz",
        })}
      </TableCell>
      <TableCell>
        <Button size="xs" variant="outline">
          <ArrowRight className="mr h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="xs"
          variant="outline"
          disabled={!["processing", "pending"].includes(order.status)}
          onClick={() => {
            cancelOrderFn({ orderId: order.orderId });
          }}
        >
          {isCanceling ? (
            <>
              <Loader className="mr h-3 w-3 animate-spin" />
              Aguarde.
            </>
          ) : (
            <>
              <X className="mr h-3 w-3" />
              Cancelar
            </>
          )}
        </Button>
      </TableCell>
    </TableRow>
  );
}
