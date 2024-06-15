import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { login } from '../../../store/slices/authSlice';

import styles from './LoginForm.module.scss';

import { Button } from '../button/Button';
import { CSSProperties } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Props = {
  style?: CSSProperties;
}

const LoginForm = ({ style }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = {
      username: form.username.value,
      password: form.password.value,
    };
    console.log(user);
    dispatch(login(user));

    if (user) {
      navigate(fromPage, {replace: true});
    }
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.loginForm} 
      style={style}
    >
      <input
        type="email"
        name="username"
        placeholder="E-mail"
        required={true}
        className={styles.loginFormEmailInput}
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        required={true}
        className={styles.loginFormPasswordInput}
      />
      <label className={styles.loginFormCheckboxLabel}>
        <input
          type="checkbox"
          name="rememberMe"
          className={styles.loginFormCheckbox}
        />
        Запомнить меня
      </label>
      <Button>Войти</Button>
    </form>
  );
};

export { LoginForm };