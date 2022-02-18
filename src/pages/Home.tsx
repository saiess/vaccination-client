import React from 'react';


const Home: React.FC = () => {
    return (
      <div className="w-full h-4/5 flex justify-evenly items-center">
        <div className="h-64 w-64 bg-slate-50 flex flex-col justify-center items-center shadow-lg rounded-3xl">
          <img
            className=""
            src="https://img.icons8.com/external-flat-icon-mangsaabguru-/50/000000/external-syringe-coronavirus-vaccine-flat-flat-icon-mangsaabguru--8.png"
          />
          <h1 className="text-2xl font-semibold">First vaccin</h1>
        </div>
        <div className="h-64 w-64 bg-slate-50 flex flex-col justify-center items-center shadow-lg rounded-3xl">
          <img src="https://img.icons8.com/external-flat-icon-mangsaabguru-/50/000000/external-syringe-coronavirus-vaccine-flat-flat-icon-mangsaabguru--11.png" />
          <h1 className="text-2xl font-semibold">Second vaccin</h1>
        </div>
        <div className="h-64 w-64 bg-slate-50 flex flex-col justify-center items-center shadow-lg rounded-3xl">
          <img src="https://img.icons8.com/external-flat-icon-mangsaabguru-/50/000000/external-syringe-coronavirus-vaccine-flat-flat-icon-mangsaabguru-.png" />
          <h1 className="text-2xl font-semibold">Third vaccin</h1>
        </div>
      </div>
    );
};

export default Home;