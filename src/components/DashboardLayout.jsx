import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="pt-16 pb-16 flex">
        <div
          className={`
          fixed lg:static inset-y-0 left-0 z-40 w-64 
          transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 transition-transform duration-300 ease-in-out
          pt-16 lg:pt-0
        `}
        >
          <Navigation onItemClick={() => setSidebarOpen(false)} />
        </div>

        <main className="flex-1 p-4 sm:p-6 lg:ml-0 min-w-0">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
