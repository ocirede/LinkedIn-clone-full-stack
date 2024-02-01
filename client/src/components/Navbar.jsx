import React from "react";
import {LogOut} from "lucide-react"
import {
  Bell,
  Briefcase,
  Home,
  
  MessageCircleMore,
  Network,
  Search,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              src="/public/In-Blue-48@2x.png"
              className="h-10 w-10 object-contain"
            ></img>
          </div>
          <div className="flex-grow flex-shrink-0 md:flex md:items-center md:w-auto ml-2 md:ml-50">
            <div className="relative mx-auto text-gray-600">
              <input
                className="border-2 border-gray-300 bg-#EDF3F8 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Search..."
              />
              <button
                type="submit"
                className="absolute right-0 top-0 mt-3 mr-4"
              >
                <Search className="h-5 w-5 text-gray-500" />
              </button>
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-9">
            <div className="flex flex-col items-center">
              <Home className="h-6 w-6 text-gray-600" />
              <a href="#" className="text-gray-900 hover:text-gray-500">
                Home
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Network className="h-6 w-6 text-gray-600" />
              <a href="#" className="text-gray-900 hover:text-gray-500">
                My Networks
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="h-6 w-6 text-gray-600" />
              <a href="#" className="text-gray-900 hover:text-gray-500">
                Jobs
              </a>
            </div>
            <div className="flex flex-col items-center">
              <MessageCircleMore className="h-6 w-6 text-gray-600" />
              <a href="#" className="text-gray-900 hover:text-gray-500">
                Messaging
              </a>
            </div>
            <div className="flex flex-col items-center">
              <Bell className="h-6 w-6 text-gray-600" />
              <a href="#" className="text-gray-900 hover:text-gray-500">
                Notifications
              </a>
            </div>
            <div>
              <LogOut/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
