import { useState } from 'react';
import { FaCheck, FaRedo } from 'react-icons/fa';
import { AiOutlineSetting } from 'react-icons/ai';
import { PiScribbleBold } from 'react-icons/pi';
function SideBar() {
  const [activeTab, setActiveTab] = useState('create');

  const tabs = [
    { id: 'create', label: 'Create' },
    { id: 'confirm', label: 'Confirm' },
    { id: 'produce', label: 'Produce' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="bg-indigo-100 py-5 text-indigo-900">
      <ul className="space-y-3">
        <li
          id=""
          className="flex justif-center items-center flex-col text-xs font-semibold px-5 py-2 hover:bg-indigo-200"
        >
          <PiScribbleBold className="h-6 w-6" />
          Create
        </li>
        <li
          id=""
          className="flex justif-center items-center flex-col text-xs font-semibold px-5 py-2 hover:bg-indigo-200"
        >
          <FaCheck className="h-6 w-6" />
          Confirm
        </li>
        <li
          id=""
          className="flex justif-center items-center flex-col text-xs font-semibold px-5 py-2 hover:bg-indigo-200"
        >
          <AiOutlineSetting className="h-6 w-6" />
          Produce
        </li>
        <li
          id=""
          className="flex justif-center items-center flex-col text-xs font-semibold px-5 py-2 hover:bg-indigo-200"
        >
          <AiOutlineSetting className="h-6 w-6" />
          Settings
        </li>
      </ul>
    </div>
  );
}
export default SideBar;
