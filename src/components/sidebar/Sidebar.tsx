// import { NavLink, useMatch } from "react-router-dom";
import { useEffect } from 'react';

import styles from './Sidebar.module.scss';

import CustomLink from './customLink/CustomLink';
import { Logo } from './logo/Logo';
import { MenuIcon } from './menuIcon/MenuIcon';
import { Referal } from '../referal/Referal';

import homeIcon from '../../assets/icons/sidebar/homeIcon.svg';
import sheduleIcon from '../../assets/icons/sidebar/shedulePageIcon.svg';
import paymentIcon from '../../assets/icons/sidebar/paymentIcon.svg';
import adventagesIcon from '../../assets/icons/sidebar/adventageIcon.svg';
import simulatorsIcon from '../../assets/icons/sidebar/simulatorsIcon.svg';
import libraryIcon from '../../assets/icons/sidebar/libraryIcon.svg';
import feedbackIcon from '../../assets/icons/sidebar/feedbackIcon.svg';
import optionsIcon from '../../assets/icons/sidebar/optionsIcon.svg';
import questionsIcon from '../../assets/icons/sidebar/questionsIcon.svg';

const Sidebar = () => {

  return (
    <aside className={styles.sidebar}>
      <Logo />
      <nav className={styles.sidebarListContainer}>
        <ul className={styles.sidebarList}>
          <li>
            <CustomLink to="/">
              <MenuIcon src={homeIcon} />
              Главная
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/schedule">
              <MenuIcon src={sheduleIcon} />
              Расписание
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/payment">
              <MenuIcon src={paymentIcon} />
              Оплата
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/adventage">
              <MenuIcon src={adventagesIcon} />
              Достижения
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/simulators">
              <MenuIcon src={simulatorsIcon} />
              Тренажеры
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/library">
              <MenuIcon src={libraryIcon} />
              Библиотека
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/feedback">
              <MenuIcon src={feedbackIcon} />
              Проверка связи
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/settings">
              <MenuIcon src={optionsIcon} />
              Настройки
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/questions">
              <MenuIcon src={questionsIcon} />
              Вопросы
            </CustomLink>
          </li>
        </ul>
      </nav>
      <Referal />
    </aside>
  );
}

export { Sidebar }