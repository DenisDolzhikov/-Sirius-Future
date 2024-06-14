import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  to: string;
  children: ReactNode;
  className?: string;
}

const Button = ({ to, children, className }: Props) => {
  return (
    <Link 
      to={to}
      className={className}
    >
      {children}
    </Link>
  )
}

export default Button