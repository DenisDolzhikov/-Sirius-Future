import styles from './OtherLinks.module.scss';

import { CustomLink } from '../customLink/CustomLink';

const OtherLinks = () => {
  return (
    <ul className={styles.otherLinksList}>
      <li>
        <CustomLink to="/restore-pass">Я забыл пароль</CustomLink>
      </li>
      <li>
        <CustomLink to="/login-coach">Войти как тренер</CustomLink>
      </li>
      <li>
        <span>Нет аккаунта?</span>
        <CustomLink to="/signup">Зарегистрироваться</CustomLink>
      </li>
    </ul>
  );
};

export { OtherLinks };