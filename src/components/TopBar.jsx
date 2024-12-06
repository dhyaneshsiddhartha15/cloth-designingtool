import { FaExchangeAlt, FaInfo, FaRuler } from 'react-icons/fa';

import { MdOutlineContentCopy } from 'react-icons/md';
import { FiTrash } from 'react-icons/fi';
import { FaRegEye } from 'react-icons/fa6';
import { IoSearchSharp } from 'react-icons/io5';
import { FaSearchMinus } from 'react-icons/fa'; //search minus
import { IoMdCopy } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';
import { LuType } from 'react-icons/lu';
import { FiClipboard } from 'react-icons/fi';
import { FaUndo, FaRedo } from 'react-icons/fa';
function TopBar({ setSelectedTool, selectedTool, setActiveTab, setActiveSubTab }) {
  const tools = [
    { id: 'duplicate', icon: MdOutlineContentCopy, label: 'Duplicate' },
    { id: 'zoom', icon: IoSearchSharp, label: 'Zoom' },
    { id: 'view', icon: FaRegEye, label: 'View' },
    { id: 'copy', icon: IoMdCopy, label: 'Copy' },
    { id: 'paste', icon: FiClipboard, label: 'Paste' },
    { id: 'Save', icon: TiTick, label: 'Save' },
    { id: 'delete', icon: FiTrash, label: 'Delete' },
    { id: 'undo', icon: FaUndo, label: 'Undo' },
    { id: 'redo', icon: FaRedo, label: 'Redo' },

    // { id: 'type', icon: LuType, label: 'Type' },

    // { id: 'fabric-width', icon: FaRuler, label: 'Fabric Width' },
  ];

  const handleSelectTool = (label) => {
    console.log(label.toLowerCase());
    setSelectedTool(label.toLowerCase());
    setActiveTab(null);
    setActiveSubTab(null);
  };

  return (
    <div className="bg-indigo-900 text-white  flex items-center px-4 justify-start gap-10 z-20">
      <div className="flex items-center gap-1">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <div className="text-xl font-bold">SS</div>
      </div>
      <div className="flex gap-4 flex-1 ">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              className={`flex flex-col items-center justify-center my-2 py-2  rounded w-[60px] group hover:font-semibold ${
                selectedTool == tool.label.toLocaleLowerCase()
                  ? 'bg-indigo-200 text-indigo-800'
                  : 'hover:bg-indigo-200  hover:text-indigo-800'
              }`}
              title={tool.label}
              onClick={() => handleSelectTool(tool?.label)}
            >
              <Icon className="w-4 h-4  " />
              <span className="text-xs text-center word-break">{tool.label}</span>
            </button>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button className="hover:bg-indigo-800 px-3 py-1 rounded">Tutorial</button>
        <button className="hover:bg-indigo-800 px-3 py-1 rounded">Chat</button>
      </div>
    </div>
  );
}

export default TopBar;
