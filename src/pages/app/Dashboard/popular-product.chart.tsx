import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart } from "lucide-react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import colors from "tailwindcss/colors"

const data = [
  { product: "Muzarela", amount: 30},
  { product: "Maguerita", amount: 14},
  { product: "Com Frango", amount: 16},
  { product: "8 Fatias", amount: 18},
  { product: "Peperonni", amount: 21},
]

const COLORS = [
  colors.sky[500],
  colors.emerald[500],
  colors.rose[500],
  colors.violet[500],
  colors.amber[500],
]

export function PopularProductChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos Populares
          </CardTitle>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>

      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart style={{ fontSize: 12 }}> 
            <Pie 
              data={data} 
              dataKey="amount" 
              nameKey="product"
              outerRadius={84}
              innerRadius={64}
              strokeWidth={8}
              >
              {data.map((_, index) => {
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[index]} 
                    className="stroke-background"
                    />
                )
              })}
            </Pie>
          </PieChart>            
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}