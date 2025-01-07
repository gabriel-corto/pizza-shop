import { api } from "@/lib/axios";

interface GetManagedRestaurantResponse {
  id: string;
  name: string;
  email: string;
  phone: number | null;
  role: "manager" | "costumer";
  createdAt: Date | null;
  updatedAt: Date | null;
}

export async function getManagedRestaurant() {
  const response = await api.get<GetManagedRestaurantResponse>(
    "/managed-restaurant"
  );
  return response.data;
}
