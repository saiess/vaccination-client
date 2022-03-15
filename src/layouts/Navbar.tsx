import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-12 bg-slate-50 flex justify-start shadow-sm items-center">
      <div className="w-20 ml-8">
        <img
          className="w-2/4"
          src="https://img.icons8.com/external-flat-icon-mangsaabguru-/50/000000/external-syringe-coronavirus-vaccine-flat-flat-icon-mangsaabguru--4.png"
          alt=""
        />

        {/* <img src="https://img.icons8.com/external-wanicon-flat-wanicon/50/000000/external-vaccine-vaccine-development-wanicon-flat-wanicon.png" /> */}
      </div>
    </div>
  );
};

export default Navbar;
