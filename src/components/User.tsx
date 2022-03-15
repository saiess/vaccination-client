/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaEdit, FaPlusSquare } from 'react-icons/fa';
import useFetch from '../hooks/useFetch';

const User: React.FC = () => {
  const url = 'http://localhost:3001/api/users/';
  const { data, loading, error } = useFetch(url);

  console.log(data, 'is heeeeeeeeere');
  if (loading) return <h1>LOADING...</h1>;

  if (error) console.log(error);

  const handleClick = (_id: string) => {
    axios
      .delete(`http://localhost:3001/user/delete/${_id}`)
      .then((res: any) => {
        console.log(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="min-w-full flex justify-between mb-8">
        <h1 className="text-4xl font-semibold">Users</h1>
        <button className="flex items-center justify-evenly w-40 bg-slate-200 shadow-lg px-4 py-3 rounded-md border border-white font-medium">
          Add New <FaPlusSquare />
        </button>
      </div>
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
        <tbody id="Users">
          {data
            ?.filter((el) => el.role === 'user')
            .map((el) => (
              <tr key={el._id}>
                <td className="px-5 py-5 text-center border-b border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {el?.firstname}
                  </p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {el?.lastname}
                  </p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {el?.email}
                  </p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{el?.city}</p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {el?.phone}
                  </p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">{el?.cin}</p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <p className="text-gray-900 whitespace-no-wrap">
                    {el?.createdAt}
                  </p>
                </td>
                <td className="px-5 py-5 border-b text-center border-gray-200 bg-white text-sm">
                  <button
                    type="button"
                    className="text-3xl pr-2 text-orange-600"
                    onClick={() => handleClick(el._id)}
                  >
                    <AiFillDelete />
                  </button>
                  <button type="button" className="text-3xl pl-3 text-cyan-600">
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
