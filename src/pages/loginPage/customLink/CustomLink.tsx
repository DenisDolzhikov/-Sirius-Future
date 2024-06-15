import { Link } from 'react-router-dom';

import styles from './CustomLink.module.scss';
import { CSSProperties } from 'react';

type Props = {
  children: string;
  to: string;
  style?: CSSProperties;
}

const CustomLink = ({ children, to, style }: Props) => {
  return (
    <Link 
      to={to}
      className={styles.customLink}
      state={style}
    >
      {children}
    </Link>
  )
}

export { CustomLink };