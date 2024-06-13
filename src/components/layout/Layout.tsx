import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "../footer/Footer";

const Layout = () => {
  return (
    <>
    <main>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </main>
    </>
  )
}

export { Layout }