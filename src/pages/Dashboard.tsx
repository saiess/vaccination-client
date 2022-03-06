import React from 'react';
import Statistic from '../components/Statistic';
import Sidebar from '../layouts/Sidebar';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-full w-full bg-gray-100 dark:bg-gray-800 font-roboto">
      <Sidebar />

      <div className="flex-1 flex flex-col h-full justify-center bg-gray-200">
        <Statistic />
        <main className="h-4/5">
          <div className="container mx-auto px-6 py-8">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    City
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    CIN
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Created at
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody id="chefrayons">
                <tr>
                  <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">said</p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">ess</p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      ghj@hj.com
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">Rabat</p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">09345621</p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">HG67892</p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      12-14-1515
                    </p>
                  </td>
                  <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                    <button
                      type="button"
                      className="text-3xl pr-2 text-orange-600"
                    >
                      <AiFillDelete />
                    </button>
                    <button
                      type="button"
                      className="text-3xl pl-3 text-cyan-600"
                    >
                      <FaEdit />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
