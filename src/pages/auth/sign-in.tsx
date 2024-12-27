import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { zodResolver } from "@hookform/resolvers/zod"
import { LogIn } from "lucide-react"
import { Helmet } from "react-helmet-async"

import { useForm  } from "react-hook-form"
import { z } from "zod"

const SignInFormScheme = z.object({
  email: z.string().email()
})

type SignInFormData = z.infer<typeof SignInFormScheme>

export function SignIn() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormScheme)
  })

  async function handleSignIn(data: SignInFormData) {
    console.log(data)

    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="flex w-[350] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold">
              Acessar painel
            </h1>
            <p>Acompanhe suas vendas pelo painel do parceiro</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full font-semibold">
              <LogIn />
              Acessar Painel
            </Button>
          </form>

        </div>
      </div>
    </>
  )
}