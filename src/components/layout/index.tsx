import { Outlet } from "react-router";
import Links from "./links";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-200 p-4">
        <div className="flex justify-between items-center">
          <h1>Host layout</h1>

          <button onClick={() => {}}>Logout</button>
        </div>
      </div>

      <Links />
      <div className="h-full mt-2 max-w-3xl p-4 ml-auto mr-auto w-full">
        <div className="w-full bg-white rounded-lg shadow-lg p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
