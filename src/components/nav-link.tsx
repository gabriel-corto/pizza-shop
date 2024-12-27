import { Link, LinkProps, useLocation } from "react-router-dom";

export function NavLink(props: LinkProps) {

  const { pathname } = useLocation()

  return (
    <Link 
      data-current={props.to === pathname}
      className="data-[current=true]:text-foreground  flex items-center gap-2 font-medium text-sm text-muted-foreground hover:text-foreground"
      {...props}
    />
  )
}