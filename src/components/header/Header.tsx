import styles from './Header.module.scss';
import { Greetings } from './greetings/Greetings';
import { UserMenu } from './userMenu/UserMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <Greetings />
      <UserMenu />
    </header>
  )
}

export { Header }