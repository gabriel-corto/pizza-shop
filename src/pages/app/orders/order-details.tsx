import { getOrdersDetails } from '@/api/get-orders-details';
import {
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';
import { OrderStatus } from './order-status';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface GetOrdersDetailsParams {
  orderId: string;
}

export function OrderDetails({ orderId }: GetOrdersDetailsParams) {
  const { data: orders } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrdersDetails({ orderId }),
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: {orderId}</DialogTitle>
      </DialogHeader>
      <DialogDescription>Detalhes do pedido</DialogDescription>

      {orders && (
        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <OrderStatus status={orders.status} />
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  {orders.customer.name}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Telefone
                </TableCell>
                <TableCell className="flex justify-end">
                  {orders.customer.phone}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  {orders.customer.email}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">
                  Realizado Há
                </TableCell>
                <TableCell className="flex justify-end">
                  {formatDistanceToNow(orders.createdAt, {
                    locale: ptBR,
                    addSuffix: true,
                  })}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.orderItems.map((item) => {
                return (
                  <TableRow>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {item.priceInCents.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'AOA',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(item.priceInCents * item.quantity).toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'AOA',
                        },
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right">
                  {orders.totalInCents.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'AOA',
                  })}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      )}
    </DialogContent>
  );
}
