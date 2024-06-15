import { CSSProperties, useState } from 'react';
import styles from './LanguageSwitcher.module.scss';

type Props = {
  style?: CSSProperties;
}

const LanguageSwitcher = ({ style }: Props) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div 
      className={styles.languageSwitcher}
      style={style}
    >
      <span className={styles.languageItem}>RU</span>
      <span className={styles.languageItem}>EN</span>
    </div>
  );
};

export { LanguageSwitcher };