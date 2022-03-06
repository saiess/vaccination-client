import React from 'react';
import { GiLoveInjection } from 'react-icons/gi'
import { FaShieldVirus, FaVirusSlash } from 'react-icons/fa';


const Statistic: React.FC = () => {
    return (
      <div className="flex w-4/5 mx-auto px-6 py-8">
        <div className="flex w-full">
          <div className="flex-1 m-5 relative rounded bg-gray-100 shadow">
            <div className="bg-orange-500 px-6 py-4 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white text-6xl fill-current shadow">
              <GiLoveInjection />
            </div>

            <div className="float-right top-0 right-0 m-3">
              <div className="text-right text-base font-semibold">
                Users who took 1 vaccines
              </div>
              <div className="text-right text-3xl">25</div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex-1 m-5 relative rounded bg-gray-100 shadow">
            <div className="bg-orange-500 px-6 py-4 ml-3  absolute top-0 -mt-4 -mr-4 rounded text-white text-6xl fill-current shadow">
              <FaVirusSlash />
            </div>

            <div className="float-right top-0 right-0 m-3">
              <div className="text-right text-base font-semibold">
                Users who took 2 vaccines
              </div>
              <div className="text-right text-3xl">25</div>
            </div>
          </div>
        </div>

        <div className="flex w-full">
          <div className="flex-1 m-5 relative rounded bg-gray-100 shadow">
            <div className="bg-orange-500 px-6 py-4 ml-3 absolute top-0 -mt-4 -mr-4 rounded text-white text-6xl fill-current shadow">
              <FaShieldVirus />
            </div>

            <div className="float-right top-0 right-0 m-3">
              <div className="text-right text-base font-semibold">
                Users who took 3 vaccines
              </div>
              <div className="text-right text-3xl">25</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Statistic;