import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  const [showCard, setShowCard] = useState<boolean>(true);
  const [showCard2, setShowCard2] = useState<boolean>(true);
  const [showCard3, setShowCard3] = useState<boolean>(true);
    const [isOpen, setIsOpen] = useState(false);

    function closeModal() {
      setIsOpen(false);
    }

    function openModal() {
      setIsOpen(true);
    }
    return (
      <div className="w-4/5 h-4/5 flex justify-evenly items-center">
        {showCard ? (
          <div className="container transform-gpu transition ease-in mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div className="relative mb-6">
              <img
                className="w-full"
                src="/assets/images/vaccin1.jpg"
                alt="Profile picture"
              />
              <div className="text-center absolute w-full -bottom-10">
                <button className="p-4 bg-orange-400 rounded-full hover:scale-110 transition ease-in duration-200 focus:outline-none shadow-md shadow-orange-600 hover:shadow-xl hover:shadow-orange-600">
                  <span
                    className="text-black font-semibold bg-orange-500 rounded-full p-2"
                    onClick={() => {
                      return setShowCard(!showCard);
                    }}
                  >
                    Go
                  </span>
                </button>
              </div>
            </div>
            <div className="py-10 px-6 text-center gap-6">
              <div className="w-full flex flex-col justify-center">
                <p className="text-lg font-semibold">First Vaccin 1</p>
                <p className="text-gray-400 text-sm underline underline-offset-1">
                  Be ready to fight covid 19
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {!showCard ? (
          <div className="container animate-[wiggle_1s_ease-in-out] h-3/5 mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1579781403337-de692320718a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1043&q=80',
              }}
              className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>

            <div className="bg-white -mt-24 h-80 shadow-md rounded-lg overflow-hidden">
              <h1 className="text-2xl text-slate-600 font-medium leading-loose my-3 mt-6 w-full underline">
                Do you have any disease condition, or problem ?
              </h1>

              <div className="h-3/5 flex px-8 justify-center items-center">
                <div className="rounded-l-xl h-16 w-20 border flex items-center justify-center">
                  <button
                    onClick={openModal}
                    className="text-center self-center py-2 px-4 rounded-lg cursor-pointer bg-cyan-500 hover:bg-gray-200"
                  >
                    Yes
                  </button>
                </div>
                <div className="rounded-r-xl h-16 w-20 border flex items-center justify-center">
                  <Link
                    rel="stylesheet"
                    to={'/form'}
                    className="text-center self-center py-2 px-4 rounded-lg cursor-pointer bg-orange-400 hover:bg-gray-200"
                  >
                    No
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {showCard2 ? (
          <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div className="relative mb-6">
              <img
                className="w-full"
                src="/assets/images/vaccin2.jpg"
                alt="Profile picture"
              />
              <div className="text-center absolute w-full -bottom-10">
                <button
                  onClick={() => {
                    return setShowCard2(!showCard2);
                  }}
                  className="p-4 bg-orange-400 rounded-full hover:scale-110 transition ease-in duration-200 focus:outline-none shadow-md shadow-orange-600 hover:shadow-xl hover:shadow-orange-600"
                >
                  <span className="text-black font-semibold bg-orange-500 rounded-full p-2">
                    Go
                  </span>
                </button>
              </div>
            </div>
            <div className="py-10 px-6 text-center gap-6">
              <div className="w-full flex flex-col justify-center">
                <p className="text-lg font-semibold">Second Vaccin 2</p>
                <p className="text-gray-400 text-sm underline underline-offset-1">
                  It's important to get your second dose
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {!showCard2 ? (
          <div className="container animate-[wiggle_1s_ease-in-out] h-3/5 mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1626351545208-28c9080106ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
              }}
              className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>

            <div className="bg-white -mt-24 h-80 shadow-md rounded-lg overflow-hidden">
              <h1 className="text-2xl text-slate-600 font-medium leading-loose my-3 mt-6 w-full underline">
                Enter you CIN
              </h1>

              <form
                action="#"
                className="h-3/5 flex flex-col px-8 justify-evenly"
              >
                <input
                  type="text"
                  placeholder="CIN"
                  className="appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-cyan-700 p-3"
                >
                  Get started
                </button>
              </form>
            </div>
          </div>
        ) : null}

        {showCard3 ? (
          <div className="container mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div className="relative mb-6">
              <img
                className="w-full"
                src="/assets/images/vaccin3.jpg"
                alt="Profile picture"
              />
              <div className="text-center absolute w-full -bottom-10">
                <button
                  onClick={() => {
                    return setShowCard3(!showCard3);
                  }}
                  className="p-4 bg-orange-400 rounded-full hover:scale-110 transition ease-in duration-200 focus:outline-none shadow-md shadow-orange-600 hover:shadow-xl hover:shadow-orange-600"
                >
                  <span className="text-black font-semibold bg-orange-500 rounded-full p-2">
                    Go
                  </span>
                </button>
              </div>
            </div>
            <div className="py-10 px-6 text-center gap-6">
              <div className="w-full flex flex-col justify-center">
                <p className="text-lg font-semibold">Third Vaccin 3</p>
                <p className="text-gray-400 text-sm underline underline-offset-1">
                  We can beat it together #covid19
                </p>
              </div>
            </div>
          </div>
        ) : null}

        {!showCard3 ? (
          <div className="container animate-[wiggle_1s_ease-in-out] h-3/5 mx-auto max-w-xs rounded-lg overflow-hidden shadow-lg my-2 bg-white">
            <div
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1627495396837-a756c3267f77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}
              className="max-w-5xl bg-gray-300 h-64 w-full rounded-lg shadow-md bg-cover bg-center"
            ></div>

            <div className="bg-white -mt-24 h-80 shadow-md rounded-lg overflow-hidden">
              <h1 className="text-2xl text-slate-600 font-medium leading-loose my-3 mt-6 w-full underline">
                Enter you CIN
              </h1>

              <form
                action="#"
                className="h-3/5 flex flex-col px-8 justify-evenly"
              >
                <input
                  type="text"
                  placeholder="CIN"
                  className="appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-cyan-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-cyan-700 p-3"
                >
                  Get started
                </button>
              </form>
            </div>
          </div>
        ) : null}

        {isOpen ? (
          <div className="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster bg-black/70">
            <div className="border border-teal-500 modal-container bg-white w-11/12 md:max-w-md mx-auto shadow-lg z-50 overflow-y-auto rounded-3xl">
              <img
                className="object-cover w-full h-64 rounded-xl"
                src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div className="relative z-10 p-8 mx-2 mb-2 -mt-16 text-center bg-white shadow-xl  rounded-3xl">
                <h5 className="text-2xl font-semibold">
                  You’d better{' '}
                  <span className="font-bold text-cyan-600 animate-pulse">
                    see a doctor
                  </span>{' '}
                  about your condition before taking any Dose!
                </h5>

                <button
                  onClick={closeModal}
                  className="py-2 px-4 mt-6 font-semibold text-lg text-white bg-orange-600 shadow-xl  rounded-xl"
                >
                  Comfirme
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
};

export default Home;