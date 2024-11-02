import {
  FaSave,
  FaCopy,
  FaTrash,
  FaEye,
  FaSearchPlus,
  FaExchangeAlt,
  FaFont,
  FaClone,
  FaRuler,
} from 'react-icons/fa';

function TopBar({ onSave }) {
  const tools = [
    { id: 'duplicate', icon: FaClone, label: 'Duplicate' },
    { id: 'delete', icon: FaTrash, label: 'Delete' },
    { id: 'view', icon: FaEye, label: 'View' },
    { id: 'zoom', icon: FaSearchPlus, label: 'Zoom' },
    { id: 'mirror', icon: FaExchangeAlt, label: 'Mirror' },
    { id: 'type', icon: FaFont, label: 'Type' },
    { id: 'copy', icon: FaCopy, label: 'Copy' },
    { id: 'paste', icon: FaClone, label: 'Paste' },
    { id: 'fabric-width', icon: FaRuler, label: 'Fabric Width' },
  ];

  return (
    <div className="bg-indigo-900 text-white h-14 flex items-center px-4 justify-between">
      <div className="flex items-center gap-1">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
        <div className="text-xl font-bold">SS</div>
      </div>
      <div className="flex gap-4">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              className="flex flex-col items-center px-2 py-1 hover:bg-indigo-800 rounded"
              title={tool.label}
            >
              <Icon className="w-4 h-4" />
              <span className="text-xs">{tool.label}</span>
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
