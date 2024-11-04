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
  const [selectedTool, setSelectedTool] = useState('draw');
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [fileTabs, setFileTabs] = useState([
    {
      _id: '123',
      name: 'Filename 1',
      isOpen: true,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1683.78px" height="2383.94px" viewBox="0 0 1683.78 2383.94" enable-background="new 0 0 1683.78 2383.94"
	 xml:space="preserve">
<g>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="529.784" y1="978.061" x2="529.784" y2="1939.823"/>
			<g>
				<path d="M515.521,996.238c0,0.468,0.232,0.926,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.65-18.293l11.65,18.293
					c0.421,0.66,1.299,0.855,1.958,0.435c0.659-0.42,0.85-1.302,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.846,20.17C515.593,995.713,515.521,995.978,515.521,996.238
					C515.521,996.706,515.521,995.978,515.521,996.238z"/>
			</g>
			<g>
				<path d="M515.521,1921.645c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.537-0.226,1.958,0.435l11.65,18.294l11.65-18.294
					c0.421-0.66,1.299-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.846-20.17C515.593,1922.169,515.521,1921.905,515.521,1921.645
					C515.521,1921.176,515.521,1921.905,515.521,1921.645z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1902.4644)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">B</tspan><tspan x="12.839" y="0" font-family="'Calibri'" font-size="24">A</tspan><tspan x="26.558" y="0" font-family="'Calibri'" font-size="24">CK BODICE B</tspan><tspan x="150.003" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="159.589" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
	
		<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 553.4355 1119.873)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(1.0506 0 0 1 93.6787 542.4321)" fill="#010101" font-family="'Calibri'" font-size="24">XB</text>
	<text transform="matrix(1.0506 0 0 1 94.4351 1141.3521)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
	<text transform="matrix(1.0506 0 0 1 93.6787 1390.856)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
	<text transform="matrix(1.0506 0 0 1 93.6787 1977.5601)" fill="#010101" font-family="'Calibri'" font-size="24">HL</text>
	<text transform="matrix(1 0 0 1 96.5288 940.6001)" font-family="'Calibri'" font-size="24">BL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.33" y1="1399.557" x2="670.404" y2="1399.557"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.333" y1="549.082" x2="604.793" y2="549.082"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M619.807,358.405
		c-7.293,40.662-15.424,190.677-15.424,190.677"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="670.405" y1="1399.662" x2="686.477" y2="891.927"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="311.644" y1="1399.729" x2="353.144" y2="948.739"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="395.477" y2="1399.647"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="948.739" x2="684.898" y2="948.739"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M290.33,234.511
		c-13.43,40.5-204.998,36.971-204.998,36.971"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M604.344,548.932
		c0,0-19.707,349.027,82.133,343.125"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.613" y1="1986.342" x2="754.129" y2="1986.342"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M670.405,1399.662
		c74.637,256.142,80.08,449.079,83.892,586.681"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="353.144" y2="1986.342"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="395.477" y1="1399.647" x2="353.144" y2="1797.286"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="1797.286" x2="311.644" y2="1399.728"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="270.416" x2="85.325" y2="1986.342"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="1147.717" x2="677.467" y2="1147.717"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="290.33" y1="234.511" x2="620.173" y2="358.728"/>
	<text transform="matrix(1 0 0 1 93.6787 729.0317)" font-family="'Calibri'" font-size="36">C</text>
	<text transform="matrix(1 0 0 1 93.6787 772.2319)" font-family="'Calibri'" font-size="36">B</text>
	<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1333.8813)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
</g>
<g>
	<text transform="matrix(1.0506 0 0 1 1442.1299 942.6079)" fill="#010101" font-family="'Calibri'" font-size="24">BL</text>
	<text transform="matrix(1.0506 0 0 1 1435.0703 1393.9038)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
	<text transform="matrix(1.0506 0 0 1 1440.7432 555.9199)" fill="#010101" font-family="'Calibri'" font-size="24">XF</text>
	<text transform="matrix(1 0 0 1.0358 1440.7383 1978.7964)" fill="#010101" font-family="'Calibri'" font-size="23.1713">HL</text>
	<text transform="matrix(1.0506 0 0 1 1435.0576 1138.5835)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
	
		<ellipse fill="none" stroke="#000000" stroke-width="0.283" stroke-miterlimit="10" stroke-dasharray="0.567,0.567" cx="1206.104" cy="947.958" rx="201.457" ry="201.034"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.465" x2="1473.227" y2="1399.465"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.221" y1="1399.625" x2="1205.65" y2="948.56"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.65" y1="948.56" x2="1163.387" y2="1399.543"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1104.039" y1="295.578" x2="1205.65" y2="948.559"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1268.383,233.74
		c56.568,178.944,205.139,163.954,205.139,163.954"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1146.137" y1="562.734" x2="1473.553" y2="562.734"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.658" y1="948.648" x2="1473.227" y2="948.648"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.553" y1="398.003" x2="1473.553" y2="1986.239"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1206.537" y1="1147.639" x2="1473.09" y2="1147.639"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.545" x2="793.649" y2="899.694"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M891.113,633.313
		c105.131,252.66-97.465,266.381-97.465,266.381"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="841.096" y1="1151.684" x2="1206.537" y2="1147.639"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.25" y1="1986.239" x2="804.734" y2="1986.239"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M888.428,1399.545
		c-74.461,256.147-79.889,449.09-83.693,586.693"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="948.648" x2="1205.689" y2="1986.239"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1163.387" y1="1399.543" x2="1205.689" y2="1683.774"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="1683.774" x2="1247.221" y2="1399.602"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1268.781" y1="233.74" x2="1103.83" y2="295.765"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="804.309" y1="955.73" x2="1205.65" y2="948.56"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="1205.699" y2="948.67"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="797.496" y2="445.367"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1048.35" y1="591.497" x2="890.85" y2="633.492"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M797.496,445.367
		c0,0,84.267,161.171,93.652,188.154"/>
	
		<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="998.831" y1="971.251" x2="998.831" y2="1940.657"/>
	<path d="M984.569,989.427c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.536,0.226,1.957-0.434l11.648-18.291l11.648,18.291
		c0.421,0.66,1.299,0.855,1.958,0.434c0.658-0.421,0.849-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.196-0.656
		s-0.936,0.248-1.195,0.656l-12.846,20.168C984.642,988.902,984.569,989.167,984.569,989.427
		C984.569,989.895,984.569,989.167,984.569,989.427"/>
	<path d="M984.569,1922.48c0-0.468,0.233-0.926,0.656-1.196c0.659-0.421,1.536-0.227,1.957,0.434l11.648,18.291l11.648-18.291
		c0.421-0.66,1.299-0.854,1.958-0.434c0.658,0.421,0.849,1.302,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.656-1.196,0.656
		s-0.936-0.248-1.195-0.656l-12.846-20.168C984.642,1923.005,984.569,1922.741,984.569,1922.48
		C984.569,1922.012,984.569,1922.741,984.569,1922.48"/>
	<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1904.1177)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">F</tspan><tspan x="11.027" y="0" font-family="'Calibri'" font-size="24">R</tspan><tspan x="23.843" y="0" font-family="'Calibri'" font-size="24">ONT BODICE B</tspan><tspan x="165.101" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="174.687" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
	
		<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 1028.0889 1116.8706)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(1 0 0 1 1442.1309 713.8169)" font-family="'Calibri'" font-size="36">C</text>
	<text transform="matrix(1 0 0 1 1442.1309 757.0171)" font-family="'Calibri'" font-size="36">F</text>
	<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1324.9497)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
</g>
</svg>
`,
    },
    {
      _id: '1233',
      name: 'Filename Filename FilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilenameFilename 2',
      isOpen: false,
      file: ` <?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1729.13px" height="2369.76px" viewBox="0 0 1729.13 2369.76" enable-background="new 0 0 1729.13 2369.76"
	 xml:space="preserve">
<g>
	
		<rect x="0.004" y="144.999" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="31.612" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="59.958" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="88.305" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="116.652" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="286.731" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="173.345" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="201.691" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="230.038" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="258.385" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="428.465" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="315.078" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="343.425" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="371.771" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="400.118" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="570.198" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="456.812" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="485.158" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="513.505" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="541.852" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="711.932" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="598.545" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="626.892" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="655.238" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="683.585" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="853.665" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="740.278" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="768.625" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="796.972" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="825.318" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="995.398" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="882.012" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="910.358" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="938.705" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="967.052" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1137.132" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1023.745" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1052.092" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1080.438" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1108.785" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.347"/>
	
		<rect x="0.004" y="1278.859" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1165.472" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1193.817" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.349"/>
	
		<rect x="0.004" y="1222.166" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1250.512" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1420.592" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1307.205" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1335.551" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1363.898" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1392.244" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1562.326" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1448.939" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1477.285" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1505.633" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1533.979" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.003" y="1704.059" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.79" height="28.346"/>
	
		<rect x="0.004" y="1590.672" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1619.018" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1647.365" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1675.711" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1845.791" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1732.404" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1760.75" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1789.098" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1817.443" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1987.523" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1874.137" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1902.482" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="1930.83" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="1959.176" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="2129.256" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2015.869" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2044.215" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="2072.562" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2100.908" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="2270.988" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2157.602" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2185.947" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="0.004" y="2214.295" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.346"/>
	
		<rect x="0.004" y="2242.641" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="1700.789" height="28.348"/>
	
		<rect x="113.39" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.717"/>
	
		<rect x="0.003" y="31.616" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.716"/>
	
		<rect x="28.35" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.717"/>
	
		<rect x="56.697" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.717"/>
	
		<rect x="85.043" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.717"/>
	
		<rect x="255.124" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="141.737" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="170.083" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="198.43" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="226.776" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="396.856" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="283.469" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="311.817" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="340.163" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="368.51" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="538.59" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="425.204" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="453.549" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="481.897" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="510.243" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="680.323" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="566.936" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="595.284" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="623.629" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="651.977" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="822.057" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="708.67" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="737.016" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="765.364" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="793.709" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="963.789" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="850.403" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.347" height="2267.717"/>
	
		<rect x="878.75" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="907.096" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="935.443" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1105.523" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="992.137" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1020.482" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1048.83" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1077.176" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1247.25" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1133.863" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1162.209" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1190.557" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1218.902" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1388.982" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1275.596" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1303.941" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1332.289" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1360.635" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1530.717" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1417.33" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1445.676" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1474.023" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1502.369" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1672.449" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1559.062" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1587.408" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
	
		<rect x="1615.756" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.346" height="2267.717"/>
	
		<rect x="1644.102" y="31.617" fill="none" stroke="#D1D3D4" stroke-width="0.2835" stroke-miterlimit="10" width="28.348" height="2267.717"/>
</g>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="822" y1="2014.928" x2="822" y2="393.792"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="355.025" y1="739.591" x2="1403.638" y2="739.591"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="514.352" y1="1307.375" x2="1243.665" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="375.857" y1="812.515" x2="1382.1" y2="812.515"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="621.601" y1="2015.347" x2="1137.339" y2="2015.347"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.8347" stroke-miterlimit="10" x1="714.197" y1="930.491" x2="714.197" y2="1939.038"/>
		<g>
			<path d="M699.935,948.667c0,0.468,0.232,0.926,0.656,1.197c0.659,0.42,1.537,0.226,1.958-0.435l11.648-18.291l11.648,18.291
				c0.421,0.661,1.298,0.855,1.958,0.435c0.659-0.421,0.85-1.303,0.435-1.958l-12.845-20.167c-0.26-0.409-0.711-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.845,20.167C700.007,948.142,699.935,948.407,699.935,948.667
				C699.935,949.135,699.935,948.407,699.935,948.667z"/>
		</g>
		<g>
			<path d="M699.935,1920.862c0-0.468,0.232-0.926,0.656-1.197c0.659-0.421,1.537-0.226,1.958,0.435l11.648,18.291l11.648-18.291
				c0.421-0.66,1.298-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.845,20.168c-0.26,0.408-0.711,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.845-20.168C700.007,1921.387,699.935,1921.123,699.935,1920.862
				C699.935,1920.395,699.935,1921.123,699.935,1920.862z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 699.6182 1363.8984)" font-family="'Calibri'" font-size="28.3465">MRUK10E - MRUSA6E - MREU36E</text>
<text transform="matrix(0 -1 1 0 745.1968 1101.4619)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 699.6182 1890.7793)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
<text transform="matrix(0 -1 1 0 740.2183 1891.4941)" font-family="'Calibri'" font-size="28.3465">WOVEN BODICE BLOCK</text>
<text transform="matrix(1 0 0 1 936.0869 1297.4912)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
<text transform="matrix(1 0 0 1 936.0869 801.4316)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822.037,393.389
	c-195.192,0.224-276.782,284.939-467.498,346.373"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822.037,393.389
	c210.772,2.362,337.31,310.367,581.601,346.203"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="879.122" y1="739.762" x2="879.122" y2="2014.921"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="515.275" y1="1307.375" x2="621.601" y2="2015.347"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1243.665" y1="1307.375" x2="1137.339" y2="2015.347"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="354.54" y1="739.762" x2="515.275" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1403.219" y1="739.591" x2="1243.665" y2="1307.375"/>
</svg>
 `,
    },
    {
      _id: '12d3',
      name: 'Filename 3',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
      <!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
      <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="1683.78px" height="2383.94px" viewBox="0 0 1683.78 2383.94" enable-background="new 0 0 1683.78 2383.94"
         xml:space="preserve">
      <g>
        <g>
          <g>
            
              <line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="529.784" y1="978.061" x2="529.784" y2="1939.823"/>
            <g>
              <path d="M515.521,996.238c0,0.468,0.232,0.926,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.65-18.293l11.65,18.293
                c0.421,0.66,1.299,0.855,1.958,0.435c0.659-0.42,0.85-1.302,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
                s-0.936,0.248-1.196,0.656l-12.846,20.17C515.593,995.713,515.521,995.978,515.521,996.238
                C515.521,996.706,515.521,995.978,515.521,996.238z"/>
            </g>
            <g>
              <path d="M515.521,1921.645c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.537-0.226,1.958,0.435l11.65,18.294l11.65-18.294
                c0.421-0.66,1.299-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
                s-0.936-0.248-1.196-0.656l-12.846-20.17C515.593,1922.169,515.521,1921.905,515.521,1921.645
                C515.521,1921.176,515.521,1921.905,515.521,1921.645z"/>
            </g>
          </g>
        </g>
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1902.4644)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">B</tspan><tspan x="12.839" y="0" font-family="'Calibri'" font-size="24">A</tspan><tspan x="26.558" y="0" font-family="'Calibri'" font-size="24">CK BODICE B</tspan><tspan x="150.003" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="159.589" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
        
          <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 553.4355 1119.873)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
        <text transform="matrix(1.0506 0 0 1 93.6787 542.4321)" fill="#010101" font-family="'Calibri'" font-size="24">XB</text>
        <text transform="matrix(1.0506 0 0 1 94.4351 1141.3521)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
        <text transform="matrix(1.0506 0 0 1 93.6787 1390.856)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
        <text transform="matrix(1.0506 0 0 1 93.6787 1977.5601)" fill="#010101" font-family="'Calibri'" font-size="24">HL</text>
        <text transform="matrix(1 0 0 1 96.5288 940.6001)" font-family="'Calibri'" font-size="24">BL</text>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.33" y1="1399.557" x2="670.404" y2="1399.557"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.333" y1="549.082" x2="604.793" y2="549.082"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M619.807,358.405
          c-7.293,40.662-15.424,190.677-15.424,190.677"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="670.405" y1="1399.662" x2="686.477" y2="891.927"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="311.644" y1="1399.729" x2="353.144" y2="948.739"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="395.477" y2="1399.647"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="948.739" x2="684.898" y2="948.739"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M290.33,234.511
          c-13.43,40.5-204.998,36.971-204.998,36.971"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M604.344,548.932
          c0,0-19.707,349.027,82.133,343.125"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.613" y1="1986.342" x2="754.129" y2="1986.342"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M670.405,1399.662
          c74.637,256.142,80.08,449.079,83.892,586.681"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="353.144" y2="1986.342"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="395.477" y1="1399.647" x2="353.144" y2="1797.286"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="1797.286" x2="311.644" y2="1399.728"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="270.416" x2="85.325" y2="1986.342"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="1147.717" x2="677.467" y2="1147.717"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="290.33" y1="234.511" x2="620.173" y2="358.728"/>
        <text transform="matrix(1 0 0 1 93.6787 729.0317)" font-family="'Calibri'" font-size="36">C</text>
        <text transform="matrix(1 0 0 1 93.6787 772.2319)" font-family="'Calibri'" font-size="36">B</text>
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1333.8813)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
      </g>
      <g>
        <text transform="matrix(1.0506 0 0 1 1442.1299 942.6079)" fill="#010101" font-family="'Calibri'" font-size="24">BL</text>
        <text transform="matrix(1.0506 0 0 1 1435.0703 1393.9038)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
        <text transform="matrix(1.0506 0 0 1 1440.7432 555.9199)" fill="#010101" font-family="'Calibri'" font-size="24">XF</text>
        <text transform="matrix(1 0 0 1.0358 1440.7383 1978.7964)" fill="#010101" font-family="'Calibri'" font-size="23.1713">HL</text>
        <text transform="matrix(1.0506 0 0 1 1435.0576 1138.5835)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
        
          <ellipse fill="none" stroke="#000000" stroke-width="0.283" stroke-miterlimit="10" stroke-dasharray="0.567,0.567" cx="1206.104" cy="947.958" rx="201.457" ry="201.034"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.465" x2="1473.227" y2="1399.465"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.221" y1="1399.625" x2="1205.65" y2="948.56"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.65" y1="948.56" x2="1163.387" y2="1399.543"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1104.039" y1="295.578" x2="1205.65" y2="948.559"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1268.383,233.74
          c56.568,178.944,205.139,163.954,205.139,163.954"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1146.137" y1="562.734" x2="1473.553" y2="562.734"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.658" y1="948.648" x2="1473.227" y2="948.648"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.553" y1="398.003" x2="1473.553" y2="1986.239"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1206.537" y1="1147.639" x2="1473.09" y2="1147.639"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.545" x2="793.649" y2="899.694"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M891.113,633.313
          c105.131,252.66-97.465,266.381-97.465,266.381"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="841.096" y1="1151.684" x2="1206.537" y2="1147.639"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.25" y1="1986.239" x2="804.734" y2="1986.239"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M888.428,1399.545
          c-74.461,256.147-79.889,449.09-83.693,586.693"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="948.648" x2="1205.689" y2="1986.239"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1163.387" y1="1399.543" x2="1205.689" y2="1683.774"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="1683.774" x2="1247.221" y2="1399.602"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1268.781" y1="233.74" x2="1103.83" y2="295.765"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="804.309" y1="955.73" x2="1205.65" y2="948.56"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="1205.699" y2="948.67"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="797.496" y2="445.367"/>
        
          <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1048.35" y1="591.497" x2="890.85" y2="633.492"/>
        <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M797.496,445.367
          c0,0,84.267,161.171,93.652,188.154"/>
        
          <line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="998.831" y1="971.251" x2="998.831" y2="1940.657"/>
        <path d="M984.569,989.427c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.536,0.226,1.957-0.434l11.648-18.291l11.648,18.291
          c0.421,0.66,1.299,0.855,1.958,0.434c0.658-0.421,0.849-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.196-0.656
          s-0.936,0.248-1.195,0.656l-12.846,20.168C984.642,988.902,984.569,989.167,984.569,989.427
          C984.569,989.895,984.569,989.167,984.569,989.427"/>
        <path d="M984.569,1922.48c0-0.468,0.233-0.926,0.656-1.196c0.659-0.421,1.536-0.227,1.957,0.434l11.648,18.291l11.648-18.291
          c0.421-0.66,1.299-0.854,1.958-0.434c0.658,0.421,0.849,1.302,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.656-1.196,0.656
          s-0.936-0.248-1.195-0.656l-12.846-20.168C984.642,1923.005,984.569,1922.741,984.569,1922.48
          C984.569,1922.012,984.569,1922.741,984.569,1922.48"/>
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1904.1177)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">F</tspan><tspan x="11.027" y="0" font-family="'Calibri'" font-size="24">R</tspan><tspan x="23.843" y="0" font-family="'Calibri'" font-size="24">ONT BODICE B</tspan><tspan x="165.101" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="174.687" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
        
          <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 1028.0889 1116.8706)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
        <text transform="matrix(1 0 0 1 1442.1309 713.8169)" font-family="'Calibri'" font-size="36">C</text>
        <text transform="matrix(1 0 0 1 1442.1309 757.0171)" font-family="'Calibri'" font-size="36">F</text>
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1324.9497)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
      </g>
      </svg>
      `,
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(
    `<?xml version="1.0" encoding="utf-8"?>
    <!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       width="1683.78px" height="2383.94px" viewBox="0 0 1683.78 2383.94" enable-background="new 0 0 1683.78 2383.94"
       xml:space="preserve">
    <g>
      <g>
        <g>
          
            <line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="529.784" y1="978.061" x2="529.784" y2="1939.823"/>
          <g>
            <path d="M515.521,996.238c0,0.468,0.232,0.926,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.65-18.293l11.65,18.293
              c0.421,0.66,1.299,0.855,1.958,0.435c0.659-0.42,0.85-1.302,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
              s-0.936,0.248-1.196,0.656l-12.846,20.17C515.593,995.713,515.521,995.978,515.521,996.238
              C515.521,996.706,515.521,995.978,515.521,996.238z"/>
          </g>
          <g>
            <path d="M515.521,1921.645c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.537-0.226,1.958,0.435l11.65,18.294l11.65-18.294
              c0.421-0.66,1.299-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
              s-0.936-0.248-1.196-0.656l-12.846-20.17C515.593,1922.169,515.521,1921.905,515.521,1921.645
              C515.521,1921.176,515.521,1921.905,515.521,1921.645z"/>
          </g>
        </g>
      </g>
      <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1902.4644)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">B</tspan><tspan x="12.839" y="0" font-family="'Calibri'" font-size="24">A</tspan><tspan x="26.558" y="0" font-family="'Calibri'" font-size="24">CK BODICE B</tspan><tspan x="150.003" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="159.589" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
      
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 553.4355 1119.873)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
      <text transform="matrix(1.0506 0 0 1 93.6787 542.4321)" fill="#010101" font-family="'Calibri'" font-size="24">XB</text>
      <text transform="matrix(1.0506 0 0 1 94.4351 1141.3521)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
      <text transform="matrix(1.0506 0 0 1 93.6787 1390.856)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
      <text transform="matrix(1.0506 0 0 1 93.6787 1977.5601)" fill="#010101" font-family="'Calibri'" font-size="24">HL</text>
      <text transform="matrix(1 0 0 1 96.5288 940.6001)" font-family="'Calibri'" font-size="24">BL</text>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.33" y1="1399.557" x2="670.404" y2="1399.557"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.333" y1="549.082" x2="604.793" y2="549.082"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M619.807,358.405
        c-7.293,40.662-15.424,190.677-15.424,190.677"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="670.405" y1="1399.662" x2="686.477" y2="891.927"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="311.644" y1="1399.729" x2="353.144" y2="948.739"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="395.477" y2="1399.647"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="948.739" x2="684.898" y2="948.739"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M290.33,234.511
        c-13.43,40.5-204.998,36.971-204.998,36.971"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M604.344,548.932
        c0,0-19.707,349.027,82.133,343.125"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.613" y1="1986.342" x2="754.129" y2="1986.342"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M670.405,1399.662
        c74.637,256.142,80.08,449.079,83.892,586.681"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="948.739" x2="353.144" y2="1986.342"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="395.477" y1="1399.647" x2="353.144" y2="1797.286"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="353.144" y1="1797.286" x2="311.644" y2="1399.728"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="270.416" x2="85.325" y2="1986.342"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="85.325" y1="1147.717" x2="677.467" y2="1147.717"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="290.33" y1="234.511" x2="620.173" y2="358.728"/>
      <text transform="matrix(1 0 0 1 93.6787 729.0317)" font-family="'Calibri'" font-size="36">C</text>
      <text transform="matrix(1 0 0 1 93.6787 772.2319)" font-family="'Calibri'" font-size="36">B</text>
      <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 516.499 1333.8813)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
    </g>
    <g>
      <text transform="matrix(1.0506 0 0 1 1442.1299 942.6079)" fill="#010101" font-family="'Calibri'" font-size="24">BL</text>
      <text transform="matrix(1.0506 0 0 1 1435.0703 1393.9038)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
      <text transform="matrix(1.0506 0 0 1 1440.7432 555.9199)" fill="#010101" font-family="'Calibri'" font-size="24">XF</text>
      <text transform="matrix(1 0 0 1.0358 1440.7383 1978.7964)" fill="#010101" font-family="'Calibri'" font-size="23.1713">HL</text>
      <text transform="matrix(1.0506 0 0 1 1435.0576 1138.5835)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
      
        <ellipse fill="none" stroke="#000000" stroke-width="0.283" stroke-miterlimit="10" stroke-dasharray="0.567,0.567" cx="1206.104" cy="947.958" rx="201.457" ry="201.034"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.465" x2="1473.227" y2="1399.465"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.221" y1="1399.625" x2="1205.65" y2="948.56"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.65" y1="948.56" x2="1163.387" y2="1399.543"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1104.039" y1="295.578" x2="1205.65" y2="948.559"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1268.383,233.74
        c56.568,178.944,205.139,163.954,205.139,163.954"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1146.137" y1="562.734" x2="1473.553" y2="562.734"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.658" y1="948.648" x2="1473.227" y2="948.648"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.553" y1="398.003" x2="1473.553" y2="1986.239"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1206.537" y1="1147.639" x2="1473.09" y2="1147.639"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="888.428" y1="1399.545" x2="793.649" y2="899.694"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M891.113,633.313
        c105.131,252.66-97.465,266.381-97.465,266.381"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="841.096" y1="1151.684" x2="1206.537" y2="1147.639"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1473.25" y1="1986.239" x2="804.734" y2="1986.239"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M888.428,1399.545
        c-74.461,256.147-79.889,449.09-83.693,586.693"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="948.648" x2="1205.689" y2="1986.239"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1163.387" y1="1399.543" x2="1205.689" y2="1683.774"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.689" y1="1683.774" x2="1247.221" y2="1399.602"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1268.781" y1="233.74" x2="1103.83" y2="295.765"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="804.309" y1="955.73" x2="1205.65" y2="948.56"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="1205.699" y2="948.67"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="939.717" y1="343.874" x2="797.496" y2="445.367"/>
      
        <line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1048.35" y1="591.497" x2="890.85" y2="633.492"/>
      <path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M797.496,445.367
        c0,0,84.267,161.171,93.652,188.154"/>
      
        <line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="998.831" y1="971.251" x2="998.831" y2="1940.657"/>
      <path d="M984.569,989.427c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.536,0.226,1.957-0.434l11.648-18.291l11.648,18.291
        c0.421,0.66,1.299,0.855,1.958,0.434c0.658-0.421,0.849-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.196-0.656
        s-0.936,0.248-1.195,0.656l-12.846,20.168C984.642,988.902,984.569,989.167,984.569,989.427
        C984.569,989.895,984.569,989.167,984.569,989.427"/>
      <path d="M984.569,1922.48c0-0.468,0.233-0.926,0.656-1.196c0.659-0.421,1.536-0.227,1.957,0.434l11.648,18.291l11.648-18.291
        c0.421-0.66,1.299-0.854,1.958-0.434c0.658,0.421,0.849,1.302,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.656-1.196,0.656
        s-0.936-0.248-1.195-0.656l-12.846-20.168C984.642,1923.005,984.569,1922.741,984.569,1922.48
        C984.569,1922.012,984.569,1922.741,984.569,1922.48"/>
      <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1904.1177)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">F</tspan><tspan x="11.027" y="0" font-family="'Calibri'" font-size="24">R</tspan><tspan x="23.843" y="0" font-family="'Calibri'" font-size="24">ONT BODICE B</tspan><tspan x="165.101" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="174.687" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
      
        <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 1028.0889 1116.8706)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
      <text transform="matrix(1 0 0 1 1442.1309 713.8169)" font-family="'Calibri'" font-size="36">C</text>
      <text transform="matrix(1 0 0 1 1442.1309 757.0171)" font-family="'Calibri'" font-size="36">F</text>
      <text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 986.8809 1324.9497)" font-family="'Calibri'" font-size="24">MRUK10B - MRUS6B - MREU36B</text>
    </g>
    </svg>
    `
  );

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
          <SideBar />
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
