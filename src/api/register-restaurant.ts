import { api } from "@/lib/axios";

interface ResgisterRestaurantBody {
  restaurantName: string 
  managerName: string 
  phone: string 
  email: string
}
export async function registerRestaurant({
  restaurantName,
  managerName,
  phone,
  email
}: ResgisterRestaurantBody) 
{
  await api.post("/restaurants", {
    restaurantName,
    managerName,
    phone,
    email
  })
}