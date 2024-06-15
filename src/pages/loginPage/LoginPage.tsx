import styles from './LoginPage.module.scss';

import { Logo } from './logo/Logo';
import { Title } from './title/Title';
import { LoginForm } from './loginForm/LoginForm';
import { OtherLinks } from './OtherLinks/OtherLinks';
import { LanguageSwitcher } from './languageSwitcher/LanguageSwitcher';

const LoginPage = () => {
  return (
    <>
      <section className={styles.loginPage}>
        <div className={styles.loginPageWrapper}>
          <Logo />
          <Title>Вход в Sirius Future</Title>
          <LoginForm />
          <OtherLinks />
          <LanguageSwitcher />
        </div>
      </section>
    </>
  )
}

export { LoginPage }