"use client";

import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { FaHome, FaSearch, FaEnvelope, FaUser } from "react-icons/fa";

export default function SidebarWithTheme() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-fit relative rounded-lg">
        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 p-6 transition-all duration-300 ease-in-out transform ${
            isSidebarOpen ? "w-64" : "w-16"
          } bg-transparent text-white shadow-lg hover:shadow-2xl backdrop-blur-sm`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 my-4 mt-9">
            {isSidebarOpen && (
              <h2 className="text-xl font-bold text-neon-blue">mysoc</h2>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-8">
            <a
              href="/feed"
              className="group flex items-center justify-center rounded-lg transition relative hover:shadow-md"
            >
              <FaHome className="text-2xl" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-opacity shadow-md">
                Feed
              </span>
            </a>
            <a
              href="/discover"
              className="group flex items-center justify-center rounded-lg transition relative hover:shadow-md"
            >
              <FaSearch className="text-2xl" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-opacity shadow-md">
                Discover
              </span>
            </a>
            <a
              href="/messages"
              className="group flex items-center justify-center rounded-lg transition relative hover:shadow-md"
            >
              <FaEnvelope className="text-2xl" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-opacity shadow-md">
                Messages
              </span>
            </a>
            <a
              href="/profile"
              className="group flex items-center justify-center rounded-lg transition relative hover:shadow-md"
            >
              <FaUser className="text-2xl" />
              <span className="absolute left-16 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm rounded-md px-2 py-1 transition-opacity shadow-md">
                Profile
              </span>
            </a>
          </nav>
        </aside>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </ThemeProvider>
  );
}
