import { profileImage } from '@/assets';
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import { BiCaretDown, BiFilterAlt } from "react-icons/bi";
import { ImCancelCircle } from "react-icons/im";
import RemoveTeamMemberModal from './RemoveTeamMemberModal';

type Props = {};

const TeamTable = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <div className="min-w-full  sm:flex sm:flex-col bg-gray-900 p-3 mb-4 ">
        
        <span className="">Number of Teams: <span className="text-green-800">4</span></span> 
        <span className="ml-4 sm:ml-0">Roles assigned:<span className="text-green-900 px-1">2</span></span>
      </div>
      
      {/* Row with 3 items */}
       <div className="flex sm:text-sm sm:mx-1 sm:flex-col items-center mb-4 mx-0 p-0">
        {/* Filter Icon */}
        <div className="flex items-center mb-2 sm:mb-3 pt-3 mr-2">
          <BiFilterAlt className="w-6 h-6 ml-6" />
          <span className="ml-2">Filter</span>
        </div>

        {/* Dropdown 1: All Roles */}
        <div className="relative mt-2 sm:mt-0 sm:my-5 mr-3">
          <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight ">
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editors</option>
            <option>Support</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <BiCaretDown className="w-6 h-6 ml-6" />
          </div>
        </div>

        {/* Dropdown 2: All Departments */}
        <div className="relative mt-2 sm:mt-0 ml-0 sm:ml-5">
          <select className="block bg-black appearance-none border border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
            <option>All Departments</option>
            <option>All Departments</option>
            <option>All Departments</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <BiCaretDown className="w-6 h-6 ml-6" />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-half-font sm:text-sm">
        <thead className="text-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Team Member
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Department
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Roles
            </th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-200 tracking-wider">
              Remove
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {/* Sample row */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 text-half-font">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Link href="/">
                    <Image
                      src={profileImage}
                      alt="profileImage"
                      width={50}
                      className="rounded-full"
                    />
                  </Link>
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-200">
                    Frank Williams
                  </div>
                  <div className="text-sm text-gray-500">@Qubigs</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Department dropdown */}
              <div className="flex relative">
                <select className="block bg-gray-800 appearance-none border rounded-full border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Mangmnt.</option>
                  <option>Engine.</option>
                  <option>Support.</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '5.5rem' }} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Roles dropdown */}
              <div className="flex relative">
                <select className="block bg-black appearance-none text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Admin</option>
                  <option>Editor</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '3.7rem' }} />
              </div>
            </td>
            <td className="px-6 py-4 w-20 whitespace-nowrap text-half-font">
              {/* Add remove button or action here */}
              <button className="text-white-500"><ImCancelCircle className="w-6 h-6 ml-1" onClick={toggleModal} /></button>
              <RemoveTeamMemberModal isOpen={modalOpen} onClose={toggleModal} />
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 text-half-font">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Link href="/">
                    <Image
                      src={profileImage}
                      alt="profileImage"
                      width={50}
                      className="rounded-full"
                    />
                  </Link>
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-200">
                    Frank Williams
                  </div>
                  <div className="text-sm text-gray-500">@Qubigs</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Department dropdown */}
              <div className="flex relative">
                <select className="block bg-gray-800 appearance-none border rounded-full border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Mangmnt.</option>
                  <option>Engine.</option>
                  <option>Support.</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '5.5rem' }} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Roles dropdown */}
              <div className="flex relative">
                <select className="block bg-black appearance-none text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Admin</option>
                  <option>Editor</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '3.7rem'  }} />
              </div>
            </td>
            <td className="px-6 py-4 w-20 whitespace-nowrap text-half-font">
              {/* Add remove button or action here */}
              <button className="text-white-500"><ImCancelCircle className="w-6 h-6 ml-1" onClick={toggleModal} /></button>
              <RemoveTeamMemberModal isOpen={modalOpen} onClose={toggleModal} />
            </td>
          </tr>

          <tr>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 text-half-font">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                  <Link href="/">
                    <Image
                      src={profileImage}
                      alt="profileImage"
                      width={50}
                      className="rounded-full"
                    />
                  </Link>
                </div>
                <div className="ml-4">
                  <div className="text-lg font-medium text-gray-200">
                    Frank Williams
                  </div>
                  <div className="text-sm text-gray-500">@Qubigs</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Department dropdown */}
              <div className="flex relative">
                <select className="block bg-gray-800 appearance-none border rounded-full border-solid border-outline-gray-900 text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Mangmnt.</option>
                  <option>Engine.</option>
                  <option>Support.</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '5.5rem' }} />
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap sm:w-40 mx-0 sm:mx-5 text-half-font">
              {/* Roles dropdown */}
              <div className="flex relative">
                <select className="block bg-black appearance-none text-gray-200 py-2 px-4 pr-8 leading-tight">
                  <option>Admin</option>
                  <option>Editor</option>
                </select>
                <BiCaretDown className="w-6 h-6 ml-1 top-2 " style={{ position: 'absolute', left: '3.7rem' }} />
              </div>
            </td>
            <td className="px-6 py-4 w-20 whitespace-nowrap text-half-font">
              {/* Add remove button or action here */}
              <button className="text-white-500"><ImCancelCircle className="w-6 h-6 ml-1" onClick={toggleModal} /></button>
              <RemoveTeamMemberModal isOpen={modalOpen} onClose={toggleModal} />
            </td>
          </tr>

        </tbody>
      </table>
      </div>



      

    </>
  );
};

export default TeamTable;

