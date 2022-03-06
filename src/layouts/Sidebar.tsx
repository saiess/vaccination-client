import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar: React.FC = () => {
    return (
      <div className="fixed z-30 inset-y-0 left-0 w-60 transition duration-300 transform bg-cyan-500 dark:bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
        <div className="flex items-center justify-center mt-8">
          <div className="flex items-center">
            <span className="text-gray-800 dark:text-white text-2xl font-semibold">
              Dashboard
            </span>
          </div>
        </div>

        <nav className="flex flex-col mt-10 px-4 text-center">
          <Link
            to="#"
            className="py-2 text-base font-semibold text-gray-800 dark:text-gray-100 bg-cyan-400 rounded"
          >
            Users
          </Link>
          <Link
            to="#"
            className="mt-3 py-2 text-base font-semibold text-gray-700  hover:text-gray-800 hover:bg-cyan-400 rounded"
          >
            Regions
          </Link>
          <Link
            to="#"
            className="mt-3 py-2 text-base font-semibold text-gray-700 hover:text-gray-800 hover:bg-cyan-400 rounded"
          >
            Log out
          </Link>
        </nav>
      </div>
    );
};

export default Sidebar;