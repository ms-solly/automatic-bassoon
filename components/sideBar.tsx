"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { FaHome, FaSearch, FaEnvelope, FaUser } from "react-icons/fa";

export default function SidebarWithTheme() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // To prevent theme mismatch during hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!mounted) return null; // Ensure component renders only after theme is loaded

  const iconColor = theme === "light" ? "text-gray-800" : "text-white";
  const hoverBg = theme === "light" ? "hover:bg-gray-300" : "hover:bg-gray-800";
  const tooltipBg = theme === "light" ? "bg-white text-gray-800" : "bg-gray-800 text-white";

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
          } bg-transparent shadow-lg hover:shadow-2xl backdrop-blur-sm`}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6 my-4 mt-9">
            {isSidebarOpen && (
              <h2 className={`text-xl font-bold ${iconColor}`}>mysoc</h2>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-8">
            <a
              href="/feed"
              className={`group flex items-center justify-center rounded-lg transition relative ${hoverBg}  `}
            >
              <FaHome className={`text-2xl ${iconColor}`} />
              <span
                className={`absolute left-16 opacity-0 group-hover:opacity-100 ${tooltipBg} text-sm rounded-md px-2 py-1 transition-opacity shadow-md`}
              >
                Feed
              </span>
            </a>
            <a
              href="/discover"
              className={`group flex items-center justify-center rounded-lg transition relative ${hoverBg}  `}
            >
              <FaSearch className={`text-2xl ${iconColor}`} />
              <span
                className={`absolute left-16 opacity-0 group-hover:opacity-100 ${tooltipBg} text-sm rounded-md px-2 py-1 transition-opacity shadow-md`}
              >
                Discover
              </span>
            </a>
            <a
              href="/messages"
              className={`group flex items-center justify-center rounded-lg transition relative ${hoverBg}  `}
            >
              <FaEnvelope className={`text-2xl ${iconColor}`} />
              <span
                className={`absolute left-16 opacity-0 group-hover:opacity-100 ${tooltipBg} text-sm rounded-md px-2 py-1 transition-opacity shadow-md`}
              >
                Messages
              </span>
            </a>
            <a
              href="/profile"
              className={`group flex items-center justify-center rounded-lg transition relative ${hoverBg}  `}
            >
              <FaUser className={`text-2xl ${iconColor}`} />
              <span
                className={`absolute left-16 opacity-0 group-hover:opacity-100 ${tooltipBg} text-sm rounded-md px-2 py-1 transition-opacity shadow-md`}
              >
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
