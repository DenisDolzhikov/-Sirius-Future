import styles from './MenuIcon.module.scss';

type Props = {
  src: string;
}

const MenuIcon = ({ src }: Props) => {
  return (
    <img src={src} alt="" className={styles.menuIcon} />
  )
}

export { MenuIcon };