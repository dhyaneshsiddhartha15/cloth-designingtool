import {
  FaMousePointer,
  FaPencilAlt,
  FaRegCircle,
  FaRegSquare,
  FaArrowsAlt,
  FaCrop,
  FaMagic,
  FaRulerHorizontal,
  FaShapes,
  FaInfo,
} from 'react-icons/fa';

const tools = [
  { id: 'select', icon: FaMousePointer, label: 'Select Line' },
  { id: 'draw', icon: FaPencilAlt, label: 'Cut a Line' },
  { id: 'convert', icon: FaMagic, label: 'Convertor' },
  { id: 'rotate', icon: FaArrowsAlt, label: 'Rotate' },
  { id: 'group', icon: FaShapes, label: 'Group Lines' },
  { id: 'disconnect', icon: FaCrop, label: 'Disconnect' },
  { id: 'extract', icon: FaRegSquare, label: 'Extract Pattern' },
  { id: 'seam', icon: FaRulerHorizontal, label: 'Add Seam' },
  { id: 'info', icon: FaInfo, label: 'Info' },
];

function ToolBar({ selectedTool, onToolSelect }) {
  return (
    <div className="bg-white border-b border-gray-200 p-2 flex gap-2 ">
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <button
            key={tool.id}
            onClick={() => onToolSelect(tool.id)}
            className={`p-2 rounded hover:bg-indigo-50 flex flex-col items-center
              ${selectedTool === tool.id ? 'bg-indigo-100 text-indigo-900' : 'text-gray-700'}`}
            title={tool.label}
          >
            <Icon className="w-5 h-5" />
            <span className="text-xs mt-1">{tool.label}</span>
          </button>
        );
      })}
    </div>
  );
}
export default ToolBar;
