import { useState } from "react";
import ToolBar from "./components/ToolBar";
import Canvas from "./components/Canvas";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";

function App() {
  const [selectedTool, setSelectedTool] = useState("select");
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState(null);

  const handleToolSelect = (tool) => {
    setSelectedTool(tool);
  };

  const handlePatternSelect = (pattern) => {
    setSelectedPattern(pattern);
  };

  const handleSavePattern = () => {
    // Mock save to backend
    console.log("Saving pattern:", patterns);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <TopBar onSave={handleSavePattern} />
      <div className="flex flex-1 overflow-hidden">
        <SideBar />
        <main className="flex-1 flex flex-col">
          <ToolBar selectedTool={selectedTool} onToolSelect={handleToolSelect} />
          <Canvas
            selectedTool={selectedTool}
            patterns={patterns}
            setPatterns={setPatterns}
            selectedPattern={selectedPattern}
          />
        </main>
      </div>
    </div>
  );
}
export default App;
