import { DialogDescription } from "@radix-ui/react-dialog";
import { DialogContent, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useQuery } from "@tanstack/react-query";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const storeProfileScheme = z.object({
  name: z.string().min(1),
  description: z.string(),
});

type StoreProfile = z.infer<typeof storeProfileScheme>;

export function StoreProfileDialog() {
  const { data: managedRestaurant } = useQuery({
    queryKey: ["managed-restaurant"],
    queryFn: getManagedRestaurant,
  });

  const { register, handleSubmit } = useForm<StoreProfile>({
    resolver: zodResolver(storeProfileScheme),
    values: {
      name: managedRestaurant?.name ?? "",
      description: managedRestaurant?.description ?? "",
    },
  });

  return (
    <DialogContent>
      <DialogHeader>Perfil da loja</DialogHeader>
      <DialogDescription>
        Actualize as informações da sua loja visível aos clientes
      </DialogDescription>

      <form className="p-2">
        <div className="space-y-4 py-4">
          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="name">
              Nome
            </Label>
            <Input className="col-span-3" id="name" {...register("name")} />
          </div>

          <div className="grid grid-cols-4 gap-4 items-center">
            <Label className="text-right" htmlFor="description">
              Descrição
            </Label>
            <Input
              className="col-span-3 h-16"
              id="description"
              {...register("description")}
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="button" variant="ghost">
            Cancelar
          </Button>
          <Button type="submit" variant="success">
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}
