import styles from './Logo.module.scss';
import mainLogo from '../../../assets/icons/logo/logo.svg';


const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={mainLogo} alt="logo" className={styles.logoImg} />
    </div>
  )
}

export { Logo }