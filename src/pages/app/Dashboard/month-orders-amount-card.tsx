import { getMonthOrdersAmount } from "@/api/get-month-orders-amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Utensils } from "lucide-react";

export function MonthOrdersAmountCard() {
  const { data: monthOrderAmount } = useQuery({
    queryKey: ["metrics", "month-orders-amount"],
    queryFn: getMonthOrdersAmount,
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="text-base font-semibold">
          Pedidos total (mês)
        </CardTitle>
        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-2">
        {monthOrderAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthOrderAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthOrderAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthOrderAmount.diffFromLastMonth}%{" "}
                  </span>
                  de pedidos em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthOrderAmount.diffFromLastMonth}%{" "}
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
