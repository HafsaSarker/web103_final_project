import { Outlet } from "react-router-dom";

export default function Layout({ setSearchInput, token }) {
  return (
    <div className="min-h-full min-w-full flex flex-col justify-start">
      {/* NAV HERE */}
      <div className="min-h-full min-w-full flex flex-col justify-start items-center">
        <Outlet />
      </div>
    </div>
  );
}
