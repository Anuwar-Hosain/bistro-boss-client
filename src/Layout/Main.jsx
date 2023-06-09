import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();
  const isLogin =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <>
      {isLogin || <NavBar></NavBar>}
      <Outlet></Outlet>
      {isLogin || <Footer></Footer>}
    </>
  );
};

export default Main;
