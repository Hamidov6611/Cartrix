import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Layout: FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 font-roboto text-white">
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
