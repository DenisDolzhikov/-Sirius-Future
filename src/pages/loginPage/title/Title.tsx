import { CSSProperties } from 'react';
import styles from './Title.module.scss';

type Props = {
  children: string;
  style?: CSSProperties;
}

const Title = ({ children, style }: Props) => {
  return (
    <div
      className={styles.title}
      style={style}
    >
      {children}
    </div>
  )
};

export { Title };