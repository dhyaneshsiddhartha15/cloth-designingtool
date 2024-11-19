import { useState } from 'react';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import OpenFilesTabs from './components/OpenFilesTabs';

function App() {
  const [selectedTool, setSelectedTool] = useState('draw');
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState(null);
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
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1729.13px" height="2369.76px" viewBox="0 0 1729.13 2369.76" enable-background="new 0 0 1729.13 2369.76"
	 xml:space="preserve">
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="822" y1="2014.928" x2="822" y2="393.792"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="355.025" y1="739.591" x2="1261.835" y2="739.591"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="444.275" y1="1307.375" x2="1172.665" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="366.365" y1="812.515" x2="1250.06" y2="812.515"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="355.025" y1="739.5" x2="444.275" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1261.835" y1="739.138" x2="1172.665" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="551.084" y1="2015.347" x2="1066.339" y2="2015.347"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="551.085" y1="2015.347" x2="444.275" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1066.339" y1="2015.347" x2="1172.665" y2="1307.375"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="808.47" y1="740.188" x2="808.47" y2="2015.347"/>
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
<text transform="matrix(0 -1 1 0 693.6162 1357.8027)" font-family="'Calibri'" font-size="28.3465">MRUK10B - MRUSA6B - MREU36B</text>
<text transform="matrix(0 -1 1 0 745.1968 1101.4619)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 699.6182 1890.7793)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
<text transform="matrix(0 -1 1 0 740.2183 1891.4941)" font-family="'Calibri'" font-size="28.3465">WOVEN BODICE BLOCK</text>
<text transform="matrix(1 0 0 1 936.0869 1297.4912)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
<text transform="matrix(1 0 0 1 936.0869 801.4316)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822.037,393.389
	c-195.192,0.224-276.782,284.939-467.498,346.373"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822.037,393.389
	c159.357,2.362,255.028,310.367,439.727,346.203"/>
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

  const [selectedFile, setSelectedFile] = useState(`<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2267.72px" height="3401.58px" viewBox="0 0 2267.72 3401.58" enable-background="new 0 0 2267.72 3401.58"
	 xml:space="preserve">
<g>
	<rect x="1827.707" y="677.113" fill="none" stroke="#000000" stroke-miterlimit="10" width="207.012" height="245.957"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1998.965" y1="710.738" x2="1998.965" y2="874.489"/>
			<g>
				<path d="M1998.965,706.461c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C2000.984,710.97,1999.711,708.474,1998.965,706.461z"/>
			</g>
			<g>
				<path d="M1998.965,878.766c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C2000.984,874.256,1999.711,876.753,1998.965,878.766z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0.9947 0 0 1 1851.0918 767.5352)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COIN</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">POCKET</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 1</tspan></text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1887.697" y1="1616.014" x2="1887.697" y2="1883.693"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1887.924,1883.693c8.809,60.926,55.574,49.797,55.574,49.797"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1943.498" y1="1933.49" x2="1943.498" y2="1616.014"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1887.697" y1="1616.014" x2="1943.498" y2="1616.014"/>
	<text transform="matrix(0 -1 1 0 1915.5957 1852.7676)" fill="#010101" font-family="'Calibri'" font-size="28.3465">FLY FRONT CUT 1</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="1923.537" y1="1673.043" x2="1923.537" y2="1876.047"/>
			<g>
				<path d="M1923.537,1670.025c-0.527,1.42-1.426,3.182-2.378,4.273l2.378-0.86l2.377,0.86
					C1924.963,1673.207,1924.063,1671.445,1923.537,1670.025z"/>
			</g>
			<g>
				<path d="M1923.537,1879.064c-0.527-1.42-1.426-3.182-2.378-4.273l2.378,0.859l2.377-0.859
					C1924.963,1875.883,1924.063,1877.645,1923.537,1879.064z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1743.025,1986.525
		c119.688,37.934,359.164,40.48,359.164,40.48"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2015.682" y1="2023.972" x2="2015.682" y2="2037.178"/>
			<g>
				<circle cx="2015.682" cy="2036.99" r="3.76"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1701.741" y1="2229.396" x2="1689.432" y2="2227.74"/>
			<g>
				<circle cx="1701.609" cy="2229.379" r="2.664"/>
			</g>
		</g>
	</g>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1745.143,1988.342
		c-60.215,74.59-72.93,497.805-72.93,497.805"/>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1865.76,2121.542c-7.391,0-13.367-5.603-13.367-12.527
				c0-6.919,5.977-12.522,13.367-12.522s13.355,5.604,13.355,12.522C1879.115,2115.939,1873.15,2121.542,1865.76,2121.542z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1876.889,2109.015c0-5.771-4.98-10.435-11.129-10.435
				c-6.152,0-11.137,4.664-11.137,10.435c0,5.778,4.984,10.437,11.137,10.437
				C1871.908,2119.451,1876.889,2114.793,1876.889,2109.015z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1865.76,2117.373c-4.922,0-8.906-3.746-8.906-8.358
				c0-4.61,3.984-8.351,8.906-8.351c4.926,0,8.898,3.74,8.898,8.351C1874.658,2113.627,1870.686,2117.373,1865.76,2117.373z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1872.443,2109.015c0-3.458-2.984-6.261-6.684-6.261
				c-3.691,0-6.684,2.803-6.684,6.261c0,3.461,2.992,6.262,6.684,6.262C1869.459,2115.276,1872.443,2112.476,1872.443,2109.015z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1865.76,2113.189c-2.453,0-4.453-1.857-4.453-4.175
				c0-2.307,2-4.166,4.453-4.166c2.449,0,4.453,1.859,4.453,4.166C1870.213,2111.332,1868.209,2113.189,1865.76,2113.189z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1867.979,2109.015c0-1.149-0.988-2.087-2.219-2.087
				c-1.238,0-2.23,0.938-2.23,2.087c0,1.151,0.992,2.099,2.23,2.099C1866.99,2111.113,1867.979,2110.166,1867.979,2109.015z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1865.76" y1="2109.015" x2="1865.76" y2="2121.542"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1865.76" y1="2109.015" x2="1878.459" y2="2112.881"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1865.76" y1="2109.015" x2="1873.607" y2="2098.889"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1865.76" y1="2109.015" x2="1857.904" y2="2098.889"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1865.76" y1="2109.015" x2="1853.061" y2="2112.881"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2061.67,2123.636c-7.387,0-13.359-5.604-13.359-12.528
				c0-6.921,5.973-12.527,13.359-12.527c7.379,0,13.355,5.606,13.355,12.527C2075.025,2118.032,2069.049,2123.636,2061.67,2123.636z
				"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2072.803,2111.107c0-5.77-4.98-10.435-11.133-10.435
				c-6.148,0-11.129,4.665-11.129,10.435c0,5.775,4.98,10.435,11.129,10.435C2067.822,2121.542,2072.803,2116.883,2072.803,2111.107
				z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2061.67,2119.464c-4.922,0-8.91-3.741-8.91-8.356
				c0-4.609,3.988-8.354,8.91-8.354c4.926,0,8.902,3.744,8.902,8.354C2070.572,2115.723,2066.596,2119.464,2061.67,2119.464z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2068.342,2111.107c0-3.463-2.98-6.259-6.672-6.259
				c-3.688,0-6.68,2.796-6.68,6.259c0,3.464,2.992,6.266,6.68,6.266C2065.361,2117.373,2068.342,2114.571,2068.342,2111.107z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2061.67,2115.276c-2.457,0-4.461-1.854-4.461-4.169
				c0-2.312,2.004-4.169,4.461-4.169c2.453,0,4.453,1.856,4.453,4.169C2066.123,2113.423,2064.123,2115.276,2061.67,2115.276z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2063.893,2111.107c0-1.146-0.996-2.093-2.223-2.093
				c-1.238,0-2.23,0.947-2.23,2.093c0,1.152,0.992,2.094,2.23,2.094C2062.896,2113.201,2063.893,2112.26,2063.893,2111.107z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2061.67" y1="2111.107" x2="2061.67" y2="2123.636"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2061.67" y1="2111.107" x2="2074.373" y2="2114.977"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2061.67" y1="2111.107" x2="2069.521" y2="2100.979"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2061.67" y1="2111.107" x2="2053.822" y2="2100.979"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2061.67" y1="2111.107" x2="2048.959" y2="2114.977"/>
		</g>
	</g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1672.92" y1="2486.146" x2="2103.182" y2="2486.146"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2103.182" y1="2486.08" x2="2103.182" y2="2026.838"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1790.299" y1="2022.936" x2="1790.299" y2="2465.199"/>
			<g>
				<path d="M1786.733,2027.479c0,0.117,0.058,0.231,0.164,0.3c0.165,0.105,0.384,0.057,0.489-0.108l2.912-4.573l2.912,4.573
					c0.105,0.165,0.324,0.214,0.489,0.108s0.213-0.326,0.108-0.489l-3.211-5.042c-0.064-0.103-0.178-0.164-0.299-0.164
					s-0.234,0.062-0.299,0.164l-3.211,5.042C1786.751,2027.349,1786.733,2027.415,1786.733,2027.479
					C1786.733,2027.597,1786.733,2027.415,1786.733,2027.479z"/>
			</g>
			<g>
				<path d="M1786.733,2460.654c0-0.116,0.058-0.23,0.164-0.299c0.165-0.105,0.384-0.057,0.489,0.108l2.912,4.573l2.912-4.573
					c0.105-0.165,0.324-0.214,0.489-0.108s0.213,0.326,0.108,0.489l-3.211,5.042c-0.064,0.102-0.178,0.164-0.299,0.164
					s-0.234-0.062-0.299-0.164l-3.211-5.042C1786.751,2460.786,1786.733,2460.72,1786.733,2460.654
					C1786.733,2460.538,1786.733,2460.72,1786.733,2460.654z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1827.377 2187.709)" fill="#999798" font-family="'Calibri'" font-size="28.5775">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 1773.5098 2443.1328)"><tspan x="0" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">POCKET BACK  </tspan><tspan x="171.793" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465" letter-spacing="3">	</tspan><tspan x="181.465" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	<text transform="matrix(0 -1 1 0 1817.79 2437)" fill="#010101" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<g>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2124.244" y1="737.303" x2="2124.244" y2="942.545"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2124.244" y1="941.1" x2="1802.475" y2="937.369"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1802.475" y1="937.369" x2="1785.486" y2="1190.971"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1783.834" y1="1192.631" x2="2214.096" y2="1192.631"/>
	<line fill="none" stroke="#3A53A4" stroke-miterlimit="10" x1="2214.096" y1="1192.568" x2="2214.096" y2="737.303"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2124.244" y1="737.303" x2="2214.096" y2="737.303"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2150.318" y1="794.229" x2="2150.318" y2="1187.49"/>
			<g>
				<path d="M2146.753,798.773c0,0.117,0.058,0.231,0.164,0.299c0.165,0.105,0.384,0.056,0.489-0.109l2.912-4.573l2.912,4.573
					c0.105,0.165,0.324,0.214,0.489,0.109c0.165-0.105,0.213-0.326,0.108-0.489l-3.211-5.042c-0.064-0.102-0.178-0.164-0.299-0.164
					s-0.234,0.062-0.299,0.164l-3.211,5.042C2146.771,798.642,2146.753,798.708,2146.753,798.773
					C2146.753,798.89,2146.753,798.708,2146.753,798.773z"/>
			</g>
			<g>
				<path d="M2146.753,1182.946c0-0.117,0.058-0.231,0.164-0.299c0.165-0.105,0.384-0.056,0.489,0.109l2.912,4.573l2.912-4.573
					c0.105-0.165,0.324-0.214,0.489-0.109c0.165,0.105,0.213,0.326,0.108,0.489l-3.211,5.042c-0.064,0.102-0.178,0.164-0.299,0.164
					s-0.234-0.062-0.299-0.164l-3.211-5.042C2146.771,1183.077,2146.753,1183.011,2146.753,1182.946
					C2146.753,1182.829,2146.753,1183.011,2146.753,1182.946z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 2197.7852 982.0312)" fill="#999798" font-family="'Calibri'" font-size="28.5775">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 2030.6641 1148.8867)"><tspan x="0" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">POCKET </tspan><tspan x="0" y="34.016" fill="#231F20" font-family="'Calibri'" font-size="28.3465">LINING  </tspan><tspan x="93.496" y="34.016" fill="#231F20" font-family="'Calibri'" font-size="28.3465" letter-spacing="8">	</tspan><tspan x="0" y="68.031" fill="#231F20" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	<text transform="matrix(0 -1 1 0 2197.7871 1122.7598)" fill="#010101" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1643.568" y1="287.373" x2="1644.322" y2="381.682"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1071.049,137.998
		c110.59,84.715,310,152.09,310,152.09"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1368.201" y1="383.889" x2="1644.322" y2="381.682"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1381.049" y1="290.088" x2="1643.568" y2="287.994"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1073.068" y1="138.287" x2="1027.002" y2="223.826"/>
	<text transform="matrix(1.0149 -0.0081 0.008 1 1374.5527 329.5903)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">RIGHT FRONT</tspan><tspan x="0.001" y="34.015" fill="#010101" font-family="'Calibri'" font-size="28.3465">WAISTBAND</tspan></text>
	<text transform="matrix(1.0149 -0.0081 0.008 1 1616.4336 329.585)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1027.002,222.553
		c105.434,80.242,342.59,161.336,342.59,161.336"/>
	<text transform="matrix(1 0 0 1 1228.8555 313.0234)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1363.9" y1="293.318" x2="1363.9" y2="371.077"/>
			<g>
				<path d="M1363.9,289.041c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C1365.921,293.55,1364.646,291.054,1363.9,289.041z"/>
			</g>
			<g>
				<path d="M1363.9,375.354c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C1365.921,370.844,1364.646,373.341,1363.9,375.354z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<text transform="matrix(1 0 0 1 1371.5625 441.6953)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">LEFT FRONT</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">WAISTBAND</tspan></text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="2" x1="1615.441" y1="409.475" x2="1616.203" y2="504.646"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1042.91,258.717
		c113.91,83.719,317.863,152.172,317.863,152.172"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1340.066" y1="504.604" x2="1677.828" y2="501.908"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1360.344" y1="410.74" x2="1677.742" y2="408.205"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1044.93" y1="259.006" x2="998.867" y2="344.545"/>
	<text transform="matrix(1.0149 -0.0081 0.008 1 1586.0332 441.771)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0.001" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M998.867,344.545
		c105.117,79.367,341.199,160.059,341.199,160.059"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1677.832" y1="501.908" x2="1677.832" y2="408.088"/>
	<text transform="matrix(1 0 0 1 1200.7207 433.7422)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1340.066" y1="410.466" x2="1340.066" y2="499.53"/>
			<g>
				<path d="M1340.066,406.189c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C1342.087,410.699,1340.812,408.202,1340.066,406.189z"/>
			</g>
			<g>
				<path d="M1340.066,503.807c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C1342.087,499.297,1340.812,501.794,1340.066,503.807z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<rect x="1741.951" y="1616.811" fill="none" stroke="#000000" stroke-miterlimit="10" width="120.797" height="317.477"/>
	
		<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2" x1="1801.83" y1="1616.811" x2="1802.346" y2="1934.287"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="1830.873" y1="1673.648" x2="1830.873" y2="1876.652"/>
			<g>
				<path d="M1830.873,1670.631c-0.527,1.42-1.426,3.182-2.378,4.273l2.378-0.86l2.377,0.86
					C1832.299,1673.812,1831.399,1672.051,1830.873,1670.631z"/>
			</g>
			<g>
				<path d="M1830.873,1879.67c-0.527-1.42-1.426-3.182-2.378-4.273l2.378,0.859l2.377-0.859
					C1832.299,1876.488,1831.399,1878.25,1830.873,1879.67z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1787.8418 1876.3457)" fill="#010101" font-family="'Calibri'" font-size="28.3465">FLY BACK CUT 1</text>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="294.447" y1="561.947" x2="294.342" y2="839.389"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="294.342" y1="839.389" x2="578.861" y2="739.146"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="562.076" y1="557.299" x2="294.447" y2="561.947"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M559.74,558.045
		c267.91-74.895,355.926-126.984,355.926-126.984"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="948.658" y1="524.838" x2="578.861" y2="739.146"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="915.666" y1="431.061" x2="948.658" y2="524.838"/>
	<text transform="matrix(0.9643 0.0155 -0.0048 1 309.5073 693.8203)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="384.182" y1="592.271" x2="384.182" y2="785.499"/>
			<g>
				<path d="M384.182,587.994c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.37,1.219
					C386.202,592.503,384.928,590.007,384.182,587.994z"/>
			</g>
			<g>
				<path d="M384.182,789.775c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.37-1.219
					C386.202,785.266,384.928,787.763,384.182,789.775z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 400.6973 677.1133)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK YOKE</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
</g>
<g>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2094.607" y1="1265.83" x2="2094.607" y2="1495.225"/>
			<g>
				<path d="M2094.607,1259.795c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C2097.458,1266.158,2095.66,1262.635,2094.607,1259.795z"/>
			</g>
			<g>
				<path d="M2094.607,1501.26c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C2097.458,1494.896,2095.66,1498.42,2094.607,1501.26z"/>
			</g>
		</g>
	</g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2191.639" y1="1237.494" x2="2218.58" y2="1502.217"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2218.58" y1="1502.217" x2="2033.674" y2="1573.885"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2033.674" y1="1573.885" x2="1848.854" y2="1500.865"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1848.854" y1="1500.865" x2="1887.697" y2="1234.205"/>
	<text transform="matrix(1 0 0 1 1931.2109 1356.5723)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">POCKET</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2192.318" y1="1234.205" x2="1887.697" y2="1234.205"/>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2" x1="1561.668" y1="523.744" x2="1562.691" y2="634.154"/>
	<text transform="matrix(0.8913 0.0251 0.0028 1 1538.1738 567.7764)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2152.164" y1="423.107" x2="2184.16" y2="520.1"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1835.992,634.256c173.23-33.445,347.902-114.961,347.902-114.961"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1821.652,523.545c154.258-28.836,331.844-101.41,331.844-101.41"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1661.375" y1="535.076" x2="1661.375" y2="623.307"/>
			<g>
				<path d="M1661.375,530.799c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C1663.396,535.308,1662.121,532.812,1661.375,530.799z"/>
			</g>
			<g>
				<path d="M1661.375,627.584c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C1663.396,623.075,1662.121,625.571,1661.375,627.584z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1835.992" y1="634.248" x2="1289.516" y2="634.248"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="971.348" y1="421.873" x2="939.352" y2="518.865"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1290.488,633.021c-174.754-33.336-350.867-114.961-350.867-114.961"
		/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1301.859,523.861c-153.648-31.371-332.004-102.48-332.004-102.48"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1300.945" y1="523.545" x2="1821.652" y2="523.545"/>
	<text transform="matrix(1 0 0 1 1249.0117 567.9609)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK WAISTBAND</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
</g>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="236.713" y1="1070.85" x2="992.893" y2="1070.85"/>
<text transform="matrix(0.9655 0 0 1 263.3594 1060.6641)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<text transform="matrix(0.9655 0 0 1 345.666 2017.7383)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="101.963" y1="1370.721" x2="963.795" y2="1370.721"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="41.76" y1="1284.186" x2="972.498" y2="1284.193"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="333.42" y1="2028.115" x2="901.381" y2="2028.115"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="345.666" y1="2457.045" x2="889.854" y2="2457.045"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="374.146" y1="3371.287" x2="866.24" y2="3371.287"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M294.342,849.986
	c-64.375,403.293-251.953,434.207-251.953,434.207"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="333.42" y1="2028.115" x2="374.146" y2="3369.404"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="901.381" y1="2028.115" x2="866.248" y2="3371.096"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="992.893" y1="1070.85" x2="901.381" y2="2028.115"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M41.76,1284.115
	c288.797,356.047,291.66,744,291.66,744"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1012.459" y1="719.717" x2="294.342" y2="849.986"/>
<text transform="matrix(0.9922 0 0 1 229.7129 1268.1406)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
<g>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.8346" stroke-miterlimit="10" x1="638.637" y1="1570.169" x2="638.637" y2="2856.989"/>
			<g>
				<path d="M624.375,1588.345c0,0.468,0.232,0.926,0.656,1.197c0.659,0.42,1.537,0.226,1.958-0.435l11.648-18.291l11.648,18.291
					c0.421,0.661,1.298,0.855,1.958,0.435c0.659-0.421,0.85-1.303,0.435-1.958l-12.845-20.167c-0.26-0.408-0.711-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.845,20.167C624.447,1587.82,624.375,1588.084,624.375,1588.345
					C624.375,1588.812,624.375,1588.084,624.375,1588.345z"/>
			</g>
			<g>
				<path d="M624.375,2838.813c0-0.468,0.232-0.926,0.656-1.197c0.659-0.42,1.537-0.226,1.958,0.435l11.648,18.291l11.648-18.291
					c0.421-0.66,1.298-0.854,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.845,20.168c-0.26,0.408-0.711,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.845-20.168C624.447,2839.339,624.375,2839.074,624.375,2838.813
					C624.375,2838.346,624.375,2839.074,624.375,2838.813z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 617.7598 2774.8428)" fill="#231F20" font-family="'Calibri'" font-size="28.3465">BACK TROUSER LEG</text>
	<text transform="matrix(0 -1 1 0 666.3184 1757.9873)" fill="#999798" font-family="'Calibri'" font-size="28.5775">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 683.0391 2765.3623)" fill="#010101" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1012.459,719.717
	c-1.645,101.848-19.566,351.133-19.566,351.133"/>
<text transform="matrix(0 -1 1 0 617.4004 2242.1426)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<g>
	<g>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M766.51,881.365c-6.141,0-11.109-5.855-11.109-13.086
			s4.969-13.086,11.109-13.086s11.102,5.855,11.102,13.086S772.65,881.365,766.51,881.365z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M775.764,868.279c0-6.031-4.141-10.898-9.254-10.898
			s-9.254,4.867-9.254,10.898s4.141,10.898,9.254,10.898S775.764,874.311,775.764,868.279z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M766.51,877.006c-4.09,0-7.402-3.91-7.402-8.727
			s3.312-8.727,7.402-8.727c4.094,0,7.398,3.91,7.398,8.727S770.604,877.006,766.51,877.006z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M772.064,868.279c0-3.617-2.48-6.543-5.555-6.543
			c-3.066,0-5.555,2.926-5.555,6.543s2.488,6.543,5.555,6.543C769.584,874.822,772.064,871.896,772.064,868.279z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M766.51,872.635c-2.039,0-3.699-1.941-3.699-4.355
			s1.66-4.355,3.699-4.355s3.699,1.941,3.699,4.355S768.549,872.635,766.51,872.635z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M768.357,868.279c0-1.203-0.824-2.188-1.848-2.188
			c-1.027,0-1.855,0.984-1.855,2.188c0,1.199,0.828,2.188,1.855,2.188C767.533,870.467,768.357,869.479,768.357,868.279z"/>
	</g>
	<g>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="766.51" y1="868.279" x2="766.51" y2="881.365"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="766.51" y1="868.279" x2="777.064" y2="872.318"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="766.51" y1="868.279" x2="773.037" y2="857.701"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="766.51" y1="868.279" x2="759.982" y2="857.701"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="766.51" y1="868.279" x2="755.951" y2="872.318"/>
	</g>
</g>
<g>
	<g>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M398.076,909.811c-6.141,0-11.105-5.855-11.105-13.086
			s4.965-13.086,11.105-13.086c6.145,0,11.102,5.855,11.102,13.086S404.221,909.811,398.076,909.811z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M407.33,896.725c0-6.031-4.141-10.898-9.254-10.898
			s-9.25,4.867-9.25,10.898s4.137,10.898,9.25,10.898S407.33,902.756,407.33,896.725z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M398.076,905.451c-4.094,0-7.406-3.91-7.406-8.727
			s3.312-8.727,7.406-8.727c4.098,0,7.402,3.91,7.402,8.727S402.174,905.451,398.076,905.451z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M403.631,896.725c0-3.613-2.477-6.543-5.555-6.543
			c-3.062,0-5.551,2.93-5.551,6.543c0,3.617,2.488,6.543,5.551,6.543C401.154,903.268,403.631,900.342,403.631,896.725z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M398.076,901.08c-2.035,0-3.699-1.941-3.699-4.355
			s1.664-4.355,3.699-4.355c2.039,0,3.699,1.941,3.699,4.355S400.115,901.08,398.076,901.08z"/>
		<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M399.924,896.725c0-1.199-0.828-2.184-1.848-2.184
			c-1.027,0-1.852,0.984-1.852,2.184s0.824,2.188,1.852,2.188C399.096,898.912,399.924,897.924,399.924,896.725z"/>
	</g>
	<g>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="398.076" y1="896.725" x2="398.076" y2="909.811"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="398.076" y1="896.725" x2="408.635" y2="900.764"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="398.076" y1="896.725" x2="404.604" y2="886.146"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="398.076" y1="896.725" x2="391.553" y2="886.146"/>
		<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="398.076" y1="896.725" x2="387.521" y2="900.764"/>
	</g>
</g>
<text transform="matrix(0.9655 0 0 1 1691.0547 1062.5586)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<text transform="matrix(0.9655 0 0 1 1577.168 2011.8164)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1744.51" y1="667.729" x2="1744.51" y2="1070.838"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1744.83" y1="1070.838" x2="1032.144" y2="1070.838"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="1800.744" y1="1370.709" x2="1047.541" y2="1370.713"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1744.627,1070.99
	c3.855,183.918,112.223,213.188,112.223,213.188"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1856.85" y1="1284.178" x2="1039.783" y2="1284.182"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1144.104" y1="2028.252" x2="1624.127" y2="2028.252"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1156.377" y1="2457.045" x2="1613.131" y2="2457.045"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1182.76" y1="3371.287" x2="1590.088" y2="3371.287"/>
<text transform="matrix(0.9922 0 0 1 1709.0703 1268.8008)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1379.002" y1="667.729" x2="1744.51" y2="667.729"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1729.324" y1="991.971" x2="1744.51" y2="991.971"/>
		<g>
			<circle cx="1729.457" cy="991.971" r="2.665"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1379.002" y1="665.627" x2="1379.002" y2="874.361"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1379.01" y1="874.361" x2="1040.885" y2="870.545"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1143.779" y1="2028.252" x2="1182.76" y2="3371.287"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1624.385" y1="2022.771" x2="1590.088" y2="3371.287"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1853.002,1281.787
	c-215.637,321.547-228.875,746.465-228.875,746.465"/>
<text transform="matrix(1 0 0 1 1713.8574 839.3887)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1042.302" y1="1139.111" x2="1033.444" y2="1139.111"/>
		<g>
			<circle cx="1042.168" cy="1139.111" r="2.665"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 1328.2666 2246.3125)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.8346" stroke-miterlimit="10" x1="1342.055" y1="1541.459" x2="1342.055" y2="2885.699"/>
		<g>
			<path d="M1327.793,1559.635c0,0.468,0.232,0.926,0.656,1.197c0.658,0.42,1.536,0.226,1.957-0.435l11.648-18.291l11.648,18.291
				c0.421,0.661,1.299,0.855,1.957,0.435c0.659-0.421,0.85-1.303,0.435-1.958l-12.844-20.167c-0.261-0.408-0.712-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.844,20.167C1327.865,1559.11,1327.793,1559.374,1327.793,1559.635
				C1327.793,1560.103,1327.793,1559.374,1327.793,1559.635z"/>
		</g>
		<g>
			<path d="M1327.793,2867.523c0-0.468,0.232-0.926,0.656-1.197c0.658-0.42,1.536-0.226,1.957,0.435l11.648,18.291l11.648-18.291
				c0.421-0.66,1.299-0.854,1.957-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.844,20.168c-0.261,0.408-0.712,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.844-20.168C1327.865,2868.049,1327.793,2867.784,1327.793,2867.523
				C1327.793,2867.056,1327.793,2867.784,1327.793,2867.523z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 1374.5527 1723.5576)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 1322.4238 2816.5977)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">FRONT</tspan><tspan x="78.02" y="0" font-family="'Calibri'" font-size="28.3465"> T</tspan><tspan x="98.242" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="113.377" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="210.916" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="224.473" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
<text transform="matrix(0 -1 1 0 1322.4238 1923.9004)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
<text transform="matrix(0 -1 1 0 1374.5527 2816.5957)" font-family="'Calibri'" font-size="28.3465">JEANS</text>
<text transform="matrix(0 -1 1 0 617.7598 1951.9004)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1039.783,1284.182
	c4.312,148.423,103.996,744.07,103.996,744.07"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1040.885,870.545
	c-19.289,131.582-1.102,413.637-1.102,413.637"/>
</svg>
`);

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
    <div className="  flex flex-col bg-gray-100 h-screen w-screen overflow-x-hidden ">
      <div className="sticky top-0 right-0 left-0 z-10">
        <TopBar
          onSave={handleSavePattern}
          setSelectedTool={setSelectedTool}
          selectedTool={selectedTool}
          setActiveTab={setActiveTab}
          setActiveSubTab={setActiveSubTab}
        />
      </div>
      <div className="flex flex-1   ">
        <div className="h-screen   ">
          <SideBar
            setSelectedTool={setSelectedTool}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            activeSubTab={activeSubTab}
            setActiveSubTab={setActiveSubTab}
          />
        </div>
        <main className="   w-screen h-screen overflow-hidden ">
          <OpenFilesTabs
            fileTabs={fileTabs}
            setFileTabs={setFileTabs}
            setOpenedFile={setSelectedFile}
          />

          <Canvas
            selectedTool={selectedTool}
            patterns={patterns}
            setPatterns={setPatterns}
            selectedPattern={selectedPattern}
            selectedFile={selectedFile}
            setSelectedTool={setSelectedTool}
          />
        </main>
      </div>
    </div>
  );
}
export default App;
