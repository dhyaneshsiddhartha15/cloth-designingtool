import { useState } from 'react';
import { FaCheck, FaRedo } from 'react-icons/fa';

function SideBar() {
  const [activeTab, setActiveTab] = useState('create');

  const tabs = [
    { id: 'create', label: 'Create' },
    { id: 'confirm', label: 'Confirm' },
    { id: 'produce', label: 'Produce' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="w-16 bg-indigo-100 flex flex-col items-center py-4 space-y-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-xs
            ${
              activeTab === tab.id
                ? 'bg-indigo-900 text-white'
                : 'text-indigo-900 hover:bg-indigo-200'
            }`}
        >
          {tab.id === 'create' && <span className="text-lg">乡</span>}
          {tab.id === 'confirm' && <FaCheck className="w-4 h-4 mb-1" />}
          {tab.id === 'produce' && <span className="text-lg">口</span>}
          {tab.id === 'settings' && <span className="text-lg">⚙</span>}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
export default SideBar;
