import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export { Layout }