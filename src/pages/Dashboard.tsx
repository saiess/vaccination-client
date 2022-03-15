import React from 'react';
import { Outlet } from 'react-router-dom';
import Statistic from '../components/Statistic';
import Sidebar from '../layouts/Sidebar';

const Dashboard: React.FC = () => (
  <div className="flex w-full h-screen bg-gray-100 dark:bg-gray-800 font-roboto">
    <Sidebar />

    <div className="flex-1 flex flex-col h-full justify-center bg-gray-200">
      <Statistic />
      <main className="h-4/5">
        <div className="container mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  </div>
);

export default Dashboard;
