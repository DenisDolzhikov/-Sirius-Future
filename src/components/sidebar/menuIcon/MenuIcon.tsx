import { FC } from "react";
import styles from './MenuIcon.module.scss';

type Props = {
  src: string;
}

const MenuIcon:FC<Props> = ({ src }) => {
  return (
    <img src={src} alt="" className={styles.menuIcon} />
  )
}

export { MenuIcon }