import { useState } from 'react';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import OpenFilesTabs from './components/OpenFilesTabs';

function App() {
  const [selectedTool, setSelectedTool] = useState('draw');
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [fileTabs, setFileTabs] = useState([
    {
      _id: '123',
      name: 'Filename 1',
      isOpen: false,
      file: 'https://firebasestorage.googleapis.com/v0/b/trelloboard-clone.appspot.com/o/MRUK10D%20SLEEVE.svg?alt=media&token=844be7e9-a147-4c61-b77f-e815e73c4f0f',
    },
    {
      _id: '1233',
      name: 'Filename Filename FilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilename 2',
      isOpen: false,
      file: 'https://firebasestorage.googleapis.com/v0/b/trelloboard-clone.appspot.com/o/MRUK10DD%20BODICE.svg?alt=media&token=e6c937a1-44c5-4fdd-9c54-89d1fe8c0764',
    },
    {
      _id: '12d3',
      name: 'Filename 3',
      isOpen: false,
      file: 'https://firebasestorage.googleapis.com/v0/b/trelloboard-clone.appspot.com/o/MRUK10D%20SLEEVE.svg?alt=media&token=844be7e9-a147-4c61-b77f-e815e73c4f0f',
    },
  ]);

  const [selectedFile, setSelectedFile] = useState();

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
    <div className="  flex flex-col bg-gray-100 min-h-screen">
      <TopBar onSave={handleSavePattern} />
      <div className="flex flex-1   ">
        <div className="h-screen ">
          <SideBar setSelectedTool={setSelectedTool} />
        </div>
        <main className="flex-1 flex flex-col">
          <OpenFilesTabs
            fileTabs={fileTabs}
            setFileTabs={setFileTabs}
            setOpenedFile={setSelectedFile}
          />
          {/* <ToolBar selectedTool={selectedTool} onToolSelect={handleToolSelect} /> */}
          {/* <boxy-svg>
            <div
              className="h-full w-full "
              style={{
                backgroundImage:
                  'linear-gradient(to right, #e0e7ff 1px, transparent 1px), linear-gradient(to bottom, #e0e7ff 1px, transparent 1px)',
                backgroundSize: '10mm 10mm',
              }}
            >
              <img src={selectedFile} />
            </div>
          </boxy-svg> */}

          <Canvas
            selectedTool={selectedTool}
            patterns={patterns}
            setPatterns={setPatterns}
            selectedPattern={selectedPattern}
            selectedFile={selectedFile}
          />
        </main>
      </div>
    </div>
  );
}
export default App;
