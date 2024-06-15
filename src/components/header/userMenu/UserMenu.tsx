import styles from './UserMenu.module.scss';

import { useAppSelector } from '../../../hooks/useAppSelector';

import avatar1 from '../../../assets/icons/headerMenu/avatar1.png';
import avatar2 from '../../../assets/icons/headerMenu/avatar2.png';

const UserMenu = () => {
  const userName = useAppSelector(state => state.auth.user?.username);

  return (
    <nav className={styles.userMenu}>
      <button className={styles.openMenuButton}>
        <img 
          className={styles.openMenuButtonAvatar}
          src={avatar1} 
          alt="avatar" 
        />
      </button>

      <div className={styles.dropDownContainer}>
        <button className={styles.closeMenuButton}></button>
        <h3 className={styles.drowDownTitle}>Смена пользователя</h3>
        <ul className={styles.menuUsersList}>
          <li className={styles.menuUserListItem}>
            <div className={styles.menuUserListItemAvatarContainer}>
              <img src={avatar1} className={styles.menuUserListItemAvatar} alt="avatar" />
            </div>
            <span className={styles.menuUsersList}>{userName}</span>
            <span className={styles.menuIsCurrentUser}></span>
          </li>
          <li className={styles.menuUserListItem}>
            <div className={styles.menuUserListItemAvatarContainer}>
              <img src={avatar2} className={styles.menuUserListItemAvatar} alt="avatar" />
            </div>
            <span className={styles.menuUsersList}>Анна</span>
            <span className={styles.menuIsCurrentUser}></span>
          </li>
        </ul>
        <button className={styles.logoutButton}>
          Выход
        </button>
      </div>
        
    </nav>
  )
}

export { UserMenu };