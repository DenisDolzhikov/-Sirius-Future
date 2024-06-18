import { NavLink } from "react-router-dom";
import styles from './CustomLink.module.scss';

interface props {
  children: string,
  to: string,
}

const CustomLink = ({ children, to, ...props}: props) => {
  // const match = useMatch({
  //   path: to,
  //   end: to.length === 1,
  // });

  return (
    // <NavLink
    //   to={to}
    //   className={({ isActive, isPending }) =>
    //     isPending ? styles.pending : isActive ? styles.active : ""
    //   }
    //   {...props}
    // >
    //   {children}
    // </NavLink>
    <NavLink
      to={to}
      className={({ isActive, isPending, isTransitioning }) =>
        isPending ? styles.pending : isTransitioning ? styles.transitioning : isActive ? styles.active : ""
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}

export default CustomLink