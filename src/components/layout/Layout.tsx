import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";

import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
    <div className={styles.fullScreenBox}>
      <div className={styles.sidebarBox}>
        <Sidebar />
      </div>
      <div className={styles.mainBox}>
        <Header />
        <main className={styles.outletBox}>
          <Outlet />
        </main>
      </div>
      <div className={styles.footerBox}>
        <Footer />
      </div>
    </div>
    </>
  )
}

export { Layout }