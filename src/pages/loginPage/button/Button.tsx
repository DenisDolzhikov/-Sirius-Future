import { CSSProperties } from 'react';
import styles from './Button.module.scss';

type Props = {
  children: string;
  style?: CSSProperties
};

const Button = ({ children, style }: Props) => {
  return (
    <button type="submit" className={styles.button} style={style}>
      {children}
    </button>
  );
};

export { Button };