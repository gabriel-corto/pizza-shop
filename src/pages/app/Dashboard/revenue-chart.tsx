import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid} from "recharts";
import colors from "tailwindcss/colors"

const data = [
  { date: "11/12", revenue: 1700},
  { date: "12/12", revenue: 900},
  { date: "13/12", revenue: 400},
  { date: "14/12", revenue: 2100},
  { date: "15/12", revenue: 100},
  { date: "16/12", revenue: 640},
  { date: "17/12", revenue: 800},
]

export function RevenueChart() {
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
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} style={{ fontSize: 13 }} >
            <YAxis 
              tickLine={false} 
              axisLine={false} 
              width={90} 
              tickFormatter={(value: number) => 
                value.toLocaleString("pt", {
                  style: "currency",
                  currency: "AKZ"
                })
              } 
            />

            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={5} />
            <CartesianGrid vertical={false} className="stroke-muted" />
            <Line 
              type="linear" 
              dataKey="revenue" 
              strokeWidth={2} 
              stroke={colors.rose["500"]}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}