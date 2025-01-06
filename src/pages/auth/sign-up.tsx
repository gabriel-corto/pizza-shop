import { registerRestaurant } from "@/api/register-restaurant"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { LogIn, LogInIcon } from "lucide-react"
import { Helmet } from "react-helmet-async"

import { useForm  } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const SignUpFormScheme = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormData = z.infer<typeof SignUpFormScheme>

export function SignUp() {

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpFormData>({
    resolver: zodResolver(SignUpFormScheme)
  })

  const { mutateAsync: registerNewRestaurant } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSignUp(data: SignUpFormData) {
    console.log(data)
    try {
      await registerNewRestaurant({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        phone: data.phone,
        email: data.email
      })

      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Fazer Login",
          onClick: () => navigate(`/sign-in?email=${data.email}`)
        }
      })
      
    } catch {
      toast.error("Erro ao cadastrar restaurante.")
    }

  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">

        <Button variant="ghost" className="absolute top-8 right-8" asChild>
          <Link to="/sign-in">
            <LogIn />
            Fazer Login 
          </Link>
        </Button>

        <div className="flex w-[350] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold">
              Acessar painel
            </h1>
            <p>Acompanhe suas vendas pelo painel do parceiro</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do restaurante</Label>
              <Input 
                type="text"
                id="restaurantName" 
                {...register("restaurantName")} 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input type="text" id="managerName" {...register("managerName")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu Telefone</Label>
              <Input type="tel" id="phone" {...register("phone")} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full font-semibold">
              <LogInIcon />
              Finalizar Cadastro
            </Button>
          </form>

        </div>
      </div>
    </>
  )
}