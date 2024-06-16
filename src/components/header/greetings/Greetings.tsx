import styles from './Greetings.module.scss';

import { useAppSelector } from '../../../hooks/useAppSelector';

const Greetings = () => {
  const userData = useAppSelector(state => state.auth.user);

  return (
    <p className={styles.greetings}>Добро пожаловать, {userData?.username}</p>
  )
};

export { Greetings };