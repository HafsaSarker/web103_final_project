import { Outlet } from "react-router-dom";

export default function Layout({ setSearchInput, token }) {
  return (
    <div className="h-full w-full flex flex-col justify-start">
      {/* NAV HERE */}
      <div className="h-full w-full flex flex-col justify-start items-center ">
        <Outlet />
      </div>
    </div>
  );
}
