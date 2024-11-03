import { useState } from 'react';
import { AiOutlineDisconnect, AiOutlineSetting } from 'react-icons/ai';
import { PiNotchesBold, PiScribbleBold, PiSelectionBold } from 'react-icons/pi';
import { MdOutlineDoneOutline, MdOutlineTabUnselected } from 'react-icons/md';
import { TiClipboard } from 'react-icons/ti';
import { GoGitPullRequestDraft } from 'react-icons/go';
import { CgClose } from 'react-icons/cg';
import { FaBarsProgress, FaBookOpen, FaEraser, FaInfo } from 'react-icons/fa6';

import { VscLoading } from 'react-icons/vsc';
import { PiLineVerticalBold } from 'react-icons/pi';
import { FaLessThan } from 'react-icons/fa';
import { FaRotateRight } from 'react-icons/fa6';
import { FaMousePointer } from 'react-icons/fa';
import { MdCompareArrows } from 'react-icons/md';
import { RiRadioButtonLine, RiRectangleLine } from 'react-icons/ri';
import { PiTriangleBold } from 'react-icons/pi';
import { GoMirror } from 'react-icons/go';
import { PiWaveTriangleBold } from 'react-icons/pi';
import { BiCut, BiText } from 'react-icons/bi';
import { BsArrowsVertical, BsGrid1X2 } from 'react-icons/bs';
import {
  TbArrowsMaximize,
  TbBadge3DFilled,
  TbHexagonLetterMFilled,
  TbLetterD,
  TbLetterG,
} from 'react-icons/tb';
import { TfiArrowsHorizontal } from 'react-icons/tfi';
import { LiaCompressArrowsAltSolid } from 'react-icons/lia';
import { GiHole, GiShirtButton } from 'react-icons/gi';
import { IoGrid } from 'react-icons/io5';
function SideBar() {
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [open, setOpen] = useState(false);
  const [horizontle, setHorizontle] = useState(true);

  const [tabs] = useState([
    {
      id: 'PAT001',
      name: 'Line',
      Icon: PiLineVerticalBold,
      subTabs: [
        { id: 'PAT0012', name: 'Curve', Icon: VscLoading },
        { id: 'PAT0013', name: 'CONVERTOR', Icon: FaLessThan },
        { id: 'PAT0014', name: 'ROTATE', Icon: FaRotateRight },
      ],
    },

    {
      id: 'PAT002',
      name: 'Select',
      Icon: FaMousePointer,
    },
    {
      id: 'PAT0021',
      name: 'Cut Line',
      Icon: MdCompareArrows,
    },

    {
      id: 'PAT003',
      name: 'Rectangle',
      Icon: RiRectangleLine,
      subTabs: [
        {
          id: 'PAT0031',
          name: 'Godet',
          Icon: PiTriangleBold,
        },
      ],
    },

    {
      id: 'PAT004',
      name: 'Mirror',
      Icon: GoMirror,
    },
    {
      id: 'PAT005',
      name: 'Group',
      Icon: PiWaveTriangleBold,
      subTabs: [
        {
          id: 'PAT0051',
          name: 'Disconnect',
          Icon: AiOutlineDisconnect,
        },
      ],
    },
    {
      id: 'PAT006',
      name: 'Rubber',
      Icon: FaEraser,
    },
    {
      id: 'PAT007',
      name: 'Pattern select',
      Icon: PiSelectionBold,
      subTabs: [
        {
          id: 'PAT0071',
          name: 'Extract',
          Icon: BiCut,
        },
        {
          id: 'PAT0072',
          name: 'Seams',
          Icon: MdOutlineTabUnselected,
        },
        {
          id: 'PAT0073',
          name: 'Fabric Width',
          Icon: FaBookOpen,
        },
        {
          id: 'PAT0074',
          name: 'Pattern Lay',
          Icon: BsGrid1X2,
        },
      ],
    },

    {
      id: 'PAT008',
      name: 'Info',
      Icon: FaInfo,
      subTabs: [
        {
          id: 'PAT0081',
          name: 'Type',
          Icon: BiText,
        },
        {
          id: 'PAT0082',
          name: 'Grain',
          Icon: BsArrowsVertical,
          subTabs: [
            {
              id: 'PAT00821',
              name: 'Cross Grain',
              Icon: TfiArrowsHorizontal,
            },
            {
              id: 'PAT00822',
              name: 'Bias Grain',
              Icon: TbArrowsMaximize,
            },
            {
              id: 'PAT00823',
              name: 'Custom Grain',
              Icon: LiaCompressArrowsAltSolid,
            },
          ],
        },

        {
          id: 'PAT0083',
          name: 'NOTCHES',
          Icon: PiNotchesBold,
        },
        {
          id: 'PAT00831',
          name: 'Drill Hole',
          Icon: GiHole,
        },
        {
          id: 'PAT0084',
          name: 'Button Hole',
          Icon: RiRadioButtonLine,
        },

        {
          id: 'PAT00841',
          name: 'Button',
          Icon: GiShirtButton,
        },
      ],
    },
    //********************************************* */

    {
      id: 'G001',
      name: 'Grading',
      Icon: TbLetterG,
    },
    {
      id: 'GOO2',
      name: 'Size Dupe',
      Icon: TbLetterD,
    },
    {
      id: 'GOO3',
      name: '3D Grade',
      Icon: TbBadge3DFilled,
    },
    {
      id: 'GOO4',
      name: 'Auto Seams',
      Icon: MdOutlineTabUnselected,
    },
    {
      id: 'G0041',
      name: '5MM Seam',
      Icon: TbHexagonLetterMFilled,
    },
    {
      id: 'G0042',
      name: '10MM Seam',
      Icon: TbHexagonLetterMFilled,
    },

    {
      id: 'G0043',
      name: '15MM Seam',
      Icon: TbHexagonLetterMFilled,
    },
    {
      id: 'GOO44',
      name: '20MM Seam',
      Icon: TbHexagonLetterMFilled,
    },
    {
      id: 'G0045',
      name: '40MM Seam',
      Icon: TbHexagonLetterMFilled,
    },
    {
      id: 'G005',
      name: 'Multi Lay',
      Icon: IoGrid,
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
    <div className="bg-indigo-100 py-5 text-indigo-900 w-[70px]  ">
      <ul className="space-y-">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`cursor-pointer flex justify-center items-center flex-col text-xs font-semibold px-2   py-2 text-center ${
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
                    <ul className="bg-indigo-200 w-full shadow-lg rounded-xl flex flex-row space-x-1 h-full  ">
                      {tab.subTabs.map((subTab) => (
                        <li
                          key={subTab.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubTabClick(subTab.id);
                          }}
                          className={`cursor-pointer group bg-indigo-200 flex justify-center items-center flex-col text-xs font-semibold px-4 py-2 rounded-lg relative ${
                            activeSubTab === subTab.id ? 'bg-indigo-300' : 'hover:bg-indigo-100'
                          }`}
                        >
                          <subTab.Icon className="h-6 w-6" />
                          {subTab?.subTabs && (
                            <span
                              className="bg-black h-2 w-2 absolute bottom-1 right-1"
                              style={{
                                clipPath: 'polygon(100% 13%, 11% 100%, 100% 100%)',
                              }}
                            ></span>
                          )}
                          {/* ******************************************************************************** */}
                          <ul className="absolute   top-[55px] right-0 left-0 bg-indigo-200 hidden  group-hover:inline">
                            {subTab?.subTabs?.map((subTab) => (
                              <li
                                key={subTab.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSubTabClick(subTab.id);
                                }}
                                className={`cursor-pointer bg-indigo-200 flex justify-center items-center flex-col text-xs font-semibold px-4 py-4 rounded-lg ${
                                  activeSubTab === subTab.id
                                    ? 'bg-indigo-300'
                                    : 'hover:bg-indigo-100'
                                }`}
                              >
                                <subTab.Icon className="h-6 w-6" />
                              </li>
                            ))}
                            {/* ******************************************************************************** */}
                          </ul>
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
                          className={`cursor-pointer relative group bg-indigo-200 flex justify-center items-center flex-col text-xs font-semibold px-2 py-4 rounded-lg ${
                            activeSubTab === subTab.id ? 'bg-indigo-300' : 'hover:bg-indigo-100'
                          }`}
                        >
                          <subTab.Icon className="h-6 w-6" />{' '}
                          {subTab?.subTabs && (
                            <span
                              className="bg-black h-2 w-2 absolute bottom-1 right-1"
                              style={{
                                clipPath: 'polygon(100% 13%, 11% 100%, 100% 100%)',
                              }}
                            ></span>
                          )}
                          {/* ******************************************************************************** */}
                          <ul className="absolute    top-0 bottom-0  left-[70px]  bg-indigo-200 hidden group-hover:flex">
                            {subTab?.subTabs?.map((subTab) => (
                              <li
                                key={subTab.id}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleSubTabClick(subTab.id);
                                }}
                                className={`cursor-pointer bg-indigo-200 flex justify-center px-5 items-center text-xs font-semibold px-4 py-4 rounded-lg ${
                                  activeSubTab === subTab.id
                                    ? 'bg-indigo-300'
                                    : 'hover:bg-indigo-100'
                                }`}
                              >
                                <subTab.Icon className="h-6 w-6" />
                              </li>
                            ))}
                            {/* ******************************************************************************** */}
                          </ul>
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
