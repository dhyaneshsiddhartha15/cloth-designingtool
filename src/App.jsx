import { useState } from 'react';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import OpenFilesTabs from './components/OpenFilesTabs';
import fileOne from './assets/MRUK10DD SLEEVE.svg';
import fileTwo from './assets/MRUK10B BODICE.svg';
import fileThree from './assets/MRUK10B SLEEVE.svg';

import svgImg from './assets/react.svg';

function App() {
  const [selectedTool, setSelectedTool] = useState('select');
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [fileTabs, setFileTabs] = useState([
    { _id: '123', name: 'Filename 1', isOpen: true, file: fileOne },
    {
      _id: '1233',
      name: 'Filename Filename FilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilename 2',
      isOpen: false,
      file: fileTwo,
    },
    { _id: '12d3', name: 'Filename 3', isOpen: false, file: fileThree },
  ]);

  const [openedFile, setOpenedFile] = useState(fileOne);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern);
  };

  const handleSavePattern = () => {
    // Mock save to backend
    console.log('Saving pattern:', patterns);
  };

  return (
    <div className="  flex flex-col bg-gray-100">
      <TopBar onSave={handleSavePattern} />
      <div className="flex flex-1   ">
        <SideBar />
        <main className="flex-1 flex flex-col">
          <OpenFilesTabs
            fileTabs={fileTabs}
            setFileTabs={setFileTabs}
            setOpenedFile={setOpenedFile}
          />
          {/* <ToolBar selectedTool={selectedTool} onToolSelect={handleToolSelect} /> */}

          <div
            className="h-full w-full "
            style={{
              backgroundImage:
                'linear-gradient(to right, #e0e7ff 1px, transparent 1px), linear-gradient(to bottom, #e0e7ff 1px, transparent 1px)',
              backgroundSize: '10mm 10mm',
            }}
          >
            <img src={openedFile} />
          </div>

          {/* <Canvas
            selectedTool={selectedTool}
            patterns={patterns}
            setPatterns={setPatterns}
            selectedPattern={selectedPattern}
          /> */}
        </main>
      </div>
    </div>
  );
}
export default App;
