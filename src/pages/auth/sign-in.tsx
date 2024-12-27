import { Helmet } from "react-helmet-async"

export function SignIn() {
  return (
    <>
      <Helmet title="Login" />
      <div className="border-solid">
        <h1>Sign-in</h1>
      </div>
    </>
  )
}