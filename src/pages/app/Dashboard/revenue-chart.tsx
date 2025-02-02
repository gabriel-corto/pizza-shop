import { getDailyRevenueInPeriod } from "@/api/get-daily-revenue-in-period";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  YAxis,
  Line,
  CartesianGrid,
} from "recharts";
import colors from "tailwindcss/colors";

export function RevenueChart() {
  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ["metrics", "daily-revenue-in-period"],
    queryFn: getDailyRevenueInPeriod,
  });

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receite diária no período</CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        {dailyRevenueInPeriod && (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dailyRevenueInPeriod} style={{ fontSize: 13 }}>
              <YAxis
                tickLine={false}
                axisLine={false}
                width={90}
                tickFormatter={(value: number) =>
                  value.toLocaleString("pt", {
                    style: "currency",
                    currency: "AKZ",
                  })
                }
              />

              <XAxis dataKey="date" tickLine={false} axisLine={false} dy={5} />
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                type="linear"
                dataKey="receipt"
                strokeWidth={2}
                stroke={colors.rose["500"]}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
