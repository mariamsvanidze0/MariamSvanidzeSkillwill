import { Outlet } from "react-router-dom";

const Layout = ({ layoutType }) => {
  return (
    <div className={`layout layout--${layoutType}`}>
      <header>
        <h1>{layoutType === "protected" ? "Dashboard" : "Welcome"}</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
