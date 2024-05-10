import { Outlet } from "react-router-dom";
import { UseLogout } from "../services/auth";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
  const { mutateAsync } = UseLogout();
  return (
    <div className="h-[100vh] bg-gray-100 py-14 ">
      <button onClick={() => mutateAsync()}>Logout</button>
      <Outlet />
      <Toaster position="top-center" />
    </div>
  );
};
