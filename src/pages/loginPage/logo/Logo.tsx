import styles from './Logo.module.scss';
import logoSvg from '../../../assets/icons/logo/logoAuthPage.svg';
import { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties;
}

const Logo = ({ style }: Props) => {
  return (
    <div>
      <img src={logoSvg} className={styles.logo} style={style} alt="logo" />
    </div>
  );
};

export { Logo }