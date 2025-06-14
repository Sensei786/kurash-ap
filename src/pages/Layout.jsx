import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  LayoutDashboard, UserPlus, Upload, Search, Settings, ListRestart
} from "lucide-react";

const navItems = [
  { path: "/", label: "Dashboard", icon: <LayoutDashboard /> },
  { path: "/player-registration", label: "Player Registration", icon: <UserPlus /> },
  { path: "/bulk-upload", label: "Bulk Upload", icon: <Upload /> },
  { path: "/search-filter", label: "Search & Filter", icon: <Search /> },
  { path: "/settings", label: "Settings", icon: <Settings /> },
  { path: "/bracket-generator", label: "Bracket Generator", icon: <ListRestart /> },
];

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <aside className="w-72 bg-white shadow-2xl rounded-r-3xl p-6 flex flex-col justify-between border-r border-gray-200">
        <div>
          <h1 className="text-3xl font-extrabold text-primary mb-10 flex items-center gap-2">
            <span role="img">🏆</span> Kurash Manager
          </h1>
          <nav className="space-y-3">
            {navItems.map(({ path, label, icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-semibold transition-all duration-300 shadow ${
                  pathname === path
                    ? "bg-primary text-white shadow-lg"
                    : "text-gray-700 hover:bg-primary hover:text-white"
                }`}
              >
                {icon}
                <span>{label}</span>
              </Link>
            ))}
          </nav>
        </div>
        <footer className="text-sm text-gray-400 pt-6">
          v1.0 • Made with ❤️
        </footer>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto bg-white rounded-l-3xl shadow-inner">
        <Outlet />
      </main>
    </div>
  );
}
