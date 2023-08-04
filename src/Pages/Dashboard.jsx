import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Sidebar from "../Components/COre/Dashboard/Sidebar";

function Dashboard() {
  const { loading: profileLoading } = useSelector((state) => state.profile);
  const { loading: authLoading } = useSelector((state) => state.auth);

  if (profileLoading || authLoading) {
    return (
      <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="relative flex min-h-[calc(100vh-4rem)]">
        <Sidebar />
        <div className=" flex-1 overflow-auto h-[calc(100vh-4rem)}">
          <div className=" mx-auto py-10 w-11/12 max-w-[1000px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
