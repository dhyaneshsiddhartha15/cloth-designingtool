import { useState } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { PiScribbleBold } from 'react-icons/pi';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { TiClipboard } from 'react-icons/ti';
import { GoGitPullRequestDraft } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
import { FaBarsProgress } from 'react-icons/fa6';

function SideBar() {
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [open, setOpen] = useState(false);
  const [horizontle, setHorizontle] = useState(true);

  const [tabs] = useState([
    {
      id: 'create',
      name: 'Create',
      Icon: PiScribbleBold,
      subTabs: [
        { id: 1, name: 'Add or edit a new line 1', Icon: GoGitPullRequestDraft },
        { id: 2, name: 'Add or edit a new line 2', Icon: GoGitPullRequestDraft },
        { id: 5, name: 'Add or edit a new line 3', Icon: GoGitPullRequestDraft },
        { id: 6, name: 'Add or edit a new line 4', Icon: GoGitPullRequestDraft },
        { id: 9, name: 'Add or edit a new line 5', Icon: GoGitPullRequestDraft },
      ],
    },
    {
      id: 'confirm',
      name: 'Confirm',
      Icon: MdOutlineDoneOutline,
    },
    {
      id: 'produce',
      name: 'Produce',
      Icon: TiClipboard,
      subTabs: [
        { id: 11, name: 'Add or edit a new line 1', Icon: GoGitPullRequestDraft },
        { id: 12, name: 'Add or edit a new line 2', Icon: GoGitPullRequestDraft },
        { id: 15, name: 'Add or edit a new line 3', Icon: GoGitPullRequestDraft },
        { id: 16, name: 'Add or edit a new line 4', Icon: GoGitPullRequestDraft },
        { id: 19, name: 'Add or edit a new line 5', Icon: GoGitPullRequestDraft },
      ],
    },
    {
      id: 'settings',
      name: 'Settings',
      Icon: AiOutlineSetting,
    },
  ]);

  const handleTabToggle = (tabId) => {
    if (activeTab === tabId) {
      setOpen((prevOpen) => !prevOpen);
    } else {
      setActiveTab(tabId);
      setActiveSubTab(null);
      setOpen(true);
    }
  };

  const handleSubTabClick = (subTabId) => {
    setActiveSubTab(subTabId);
    setOpen(true);
  };

  const handleCloseMenu = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  const handleHorizontle = (e) => {
    e.stopPropagation();
    setHorizontle((prev) => !prev);
  };

  return (
    <div className="bg-indigo-100 py-5 text-indigo-900 w-[70px]">
      <ul className="space-y-3">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer flex justify-center items-center flex-col text-xs font-semibold px-2 group py-2 ${
              activeTab === tab.id ? 'bg-indigo-200' : 'hover:bg-indigo-200'
            } relative`}
            onClick={() => handleTabToggle(tab.id)}
          >
            <tab.Icon className="h-6 w-6" />
            {tab.name}
            {tab.subTabs && (
              <span
                className="bg-black h-2 w-2 absolute bottom-1 right-1"
                style={{
                  clipPath: 'polygon(100% 13%, 11% 100%, 100% 100%)',
                }}
              ></span>
            )}
            {tab.subTabs && activeTab === tab.id && open && (
              <>
                {horizontle ? (
                  <div
                    className={`absolute top-0 bottom-0 left-[69px] z-10 shadow-lg rounded-lg  bg-indigo-200 pr-5`}
                  >
                    <div className="relative ">
                      <button
                        className="absolute -right-4 top-1 hover:text-red-500"
                        onClick={handleCloseMenu}
                      >
                        <CgClose />
                      </button>
                    </div>
                    <div className="relative">
                      <button
                        className="absolute -right-4 top-4 hover:text-indigo-400 mt-1"
                        onClick={handleHorizontle}
                      >
                        <FaBarsProgress className="rotate-90" />
                      </button>
                    </div>
                    <ul className="bg-ind igo-200 w-full shadow-lg rounded-xl flex flex-row space-x-1 h-full ">
                      {tab.subTabs.map((subTab) => (
                        <li
                          key={subTab.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubTabClick(subTab.id);
                          }}
                          className={`cursor-pointer bg-indigo-200 flex justify-center items-center flex-col text-xs font-semibold px-4 py-2 rounded-lg ${
                            activeSubTab === subTab.id ? 'bg-indigo-300' : 'hover:bg-indigo-100'
                          }`}
                        >
                          <subTab.Icon className="h-6 w-6" />
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div
                    className={`absolute top-0 bottom-0 w-full left-[60px] z-10 bg-indigo-200 shadow-lg rounded-lg `}
                  >
                    <div className="relative">
                      <button
                        className="absolute right-1 top-1 hover:text-red-500"
                        onClick={handleCloseMenu}
                      >
                        <CgClose />
                      </button>
                    </div>
                    <div className="relative">
                      {console.log(tab.subTabs.length)}
                      <button
                        className="absolute right-5 top-1 hover:text-indigo-400 "
                        onClick={handleHorizontle}
                      >
                        <FaBarsProgress />
                      </button>
                    </div>
                    <ul className="bg-indigo-200 shadow-lg rounded-xl mt-5">
                      {tab.subTabs.map((subTab) => (
                        <li
                          key={subTab.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubTabClick(subTab.id);
                          }}
                          className={`cursor-pointer bg-indigo-200 flex justify-center items-center flex-col text-xs font-semibold px-2 py-4 rounded-lg ${
                            activeSubTab === subTab.id ? 'bg-indigo-300' : 'hover:bg-indigo-100'
                          }`}
                        >
                          <subTab.Icon className="h-6 w-6" />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}{' '}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
