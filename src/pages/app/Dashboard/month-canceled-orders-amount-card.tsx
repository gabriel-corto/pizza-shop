import { getMonthCanceledAmount } from "@/api/get-month-canceled-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

export function MonthCanceledOrdersAmount() {
  const { data: monthCanceledOrderAmount } = useQuery({
    queryKey: ["metrics", "month-canceled-orders-amount"],
    queryFn: getMonthCanceledAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-2">
        {monthCanceledOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrderAmount?.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrderAmount?.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrderAmount?.diffFromLastMonth}%
                  </span>{" "}
                  de cancelamentos em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrderAmount?.diffFromLastMonth}%{" "}
                  </span>
                  de pedidos em relação ao mês passado
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
