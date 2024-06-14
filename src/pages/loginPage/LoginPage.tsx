import { Link } from "react-router-dom";

import styles from './LoginPage.module.scss';

const LoginPage = () => {
  return (
    <>
      <section className={styles.loginPage}>
        <div className={styles.loginPageWrapper}>
          <div>LOGO</div>
          <h1>Вход в Sirius Future</h1>
          <form action="" className={styles.loginForm}>
            <input type="email" name="" id="" placeholder="E-mail" />
            <input type="password" name="" id="" placeholder="Пароль" />
            <label>
              <input type="checkbox" name="" id="" />
              Запомнить меня
            </label>
            <button type="submit">Войти</button>
          </form>
          <ul>
            <li>
              <Link to='/restore-pass'>Я забыл пароль</Link>
            </li>
            <li>
              <Link to='/login-coach'>Войти как тренер</Link>
            </li>
            <li>
              <span>Нет аккаунта?</span>
              <Link to='/signup'>Зарегестрироваться</Link>
            </li>
          </ul>
          <div>
            <span>RU</span>
            <span>EN</span>
          </div>
        </div>
      </section>
    </>
  )
}

export { LoginPage }