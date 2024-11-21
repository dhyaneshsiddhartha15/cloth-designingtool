import { useState } from 'react';
import ToolBar from './components/ToolBar';
import Canvas from './components/Canvas';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import OpenFilesTabs from './components/OpenFilesTabs';

function App() {
  const [selectedTool, setSelectedTool] = useState('view');
  const [activeTab, setActiveTab] = useState('');
  const [activeSubTab, setActiveSubTab] = useState(null);
  const [patterns, setPatterns] = useState([]);
  const [selectedPattern, setSelectedPattern] = useState(null);
  const [fileTabs, setFileTabs] = useState([
    {
      _id: '123',
      name: 'ShirtDress',
      isOpen: true,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="612px" height="792px" viewBox="0 0 612 792" enable-background="new 0 0 612 792" xml:space="preserve">
<path fill="none" stroke="#000000" d="M336.072,128.38c-27.807,75.924-36.373,182.578-36.373,182.578"/>
<path fill="none" stroke="#000000" d="M323.419,316.026c0,0,30.709-112.433,26.535-121.391"/>
<line fill="none" stroke="#000000" x1="149.913" y1="106.412" x2="173.277" y2="134.961"/>
<line fill="none" stroke="#000000" x1="179.518" y1="138.248" x2="179.518" y2="424.328"/>
<line fill="none" stroke="#000000" x1="142.778" y1="117.391" x2="158.745" y2="148.641"/>
<line fill="none" stroke="#000000" x1="158.745" y1="148.641" x2="174.161" y2="134.961"/>
<line fill="none" stroke="#000000" x1="148.905" y1="106.412" x2="142.778" y2="117.391"/>
<line fill="none" stroke="#000000" x1="197.05" y1="106.436" x2="173.685" y2="134.984"/>
<line fill="none" stroke="#000000" x1="204.185" y1="117.424" x2="189.267" y2="148.675"/>
<line fill="none" stroke="#000000" x1="189.267" y1="148.675" x2="173.852" y2="134.995"/>
<line fill="none" stroke="#000000" x1="198.058" y1="106.446" x2="204.185" y2="117.424"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="1.25" ry="1.283"/>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="1" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.308" cy="153.701" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.308" y1="153.701" x2="174.308" y2="155.24"/>
		<line fill="none" stroke="#000000" x1="174.308" y1="153.701" x2="175.734" y2="154.176"/>
		<line fill="none" stroke="#000000" x1="174.308" y1="153.701" x2="175.189" y2="152.456"/>
		<line fill="none" stroke="#000000" x1="174.308" y1="153.701" x2="173.426" y2="152.456"/>
		<line fill="none" stroke="#000000" x1="174.308" y1="153.701" x2="172.881" y2="154.176"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.308" y1="153.443" x2="176.509" y2="153.443"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.226" cy="175.266" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="174.225" cy="175.266" rx="1.25" ry="1.283"/>
		<ellipse fill="none" stroke="#000000" cx="174.226" cy="175.266" rx="1" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.226" cy="175.266" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.226" cy="175.266" rx="0.501" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.225" cy="175.266" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.226" y1="175.266" x2="174.226" y2="176.805"/>
		<line fill="none" stroke="#000000" x1="174.226" y1="175.266" x2="175.651" y2="175.741"/>
		<line fill="none" stroke="#000000" x1="174.226" y1="175.266" x2="175.106" y2="174.021"/>
		<line fill="none" stroke="#000000" x1="174.226" y1="175.266" x2="173.343" y2="174.021"/>
		<line fill="none" stroke="#000000" x1="174.226" y1="175.266" x2="172.798" y2="175.741"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.226" y1="175.008" x2="176.427" y2="175.008"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="1.5" ry="1.539"/>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="1.25" ry="1.283"/>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="0.999" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.142" cy="240.396" rx="0.25" ry="0.258"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.142" y1="240.396" x2="174.142" y2="241.936"/>
		<line fill="none" stroke="#000000" x1="174.142" y1="240.396" x2="175.569" y2="240.871"/>
		<line fill="none" stroke="#000000" x1="174.142" y1="240.396" x2="175.024" y2="239.152"/>
		<line fill="none" stroke="#000000" x1="174.142" y1="240.396" x2="173.261" y2="239.152"/>
		<line fill="none" stroke="#000000" x1="174.142" y1="240.396" x2="172.716" y2="240.871"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.142" y1="240.139" x2="176.343" y2="240.139"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.961" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.961" rx="1.25" ry="1.282"/>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.961" rx="1" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.961" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.962" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.06" cy="261.961" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.06" y1="261.961" x2="174.06" y2="263.501"/>
		<line fill="none" stroke="#000000" x1="174.06" y1="261.961" x2="175.486" y2="262.437"/>
		<line fill="none" stroke="#000000" x1="174.06" y1="261.961" x2="174.941" y2="260.717"/>
		<line fill="none" stroke="#000000" x1="174.06" y1="261.961" x2="173.178" y2="260.717"/>
		<line fill="none" stroke="#000000" x1="174.06" y1="261.961" x2="172.633" y2="262.437"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.06" y1="261.704" x2="176.261" y2="261.704"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="1.5" ry="1.539"/>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="1.251" ry="1.283"/>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="0.999" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="0.501" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.166" cy="197.01" rx="0.249" ry="0.258"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.166" y1="197.01" x2="174.166" y2="198.549"/>
		<line fill="none" stroke="#000000" x1="174.166" y1="197.01" x2="175.593" y2="197.484"/>
		<line fill="none" stroke="#000000" x1="174.166" y1="197.01" x2="175.048" y2="195.766"/>
		<line fill="none" stroke="#000000" x1="174.166" y1="197.01" x2="173.284" y2="195.766"/>
		<line fill="none" stroke="#000000" x1="174.166" y1="197.01" x2="172.739" y2="197.484"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.166" y1="196.752" x2="176.367" y2="196.752"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.575" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.574" rx="1.25" ry="1.282"/>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.575" rx="0.999" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.574" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.575" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.083" cy="218.574" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.083" y1="218.574" x2="174.083" y2="220.114"/>
		<line fill="none" stroke="#000000" x1="174.083" y1="218.574" x2="175.511" y2="219.05"/>
		<line fill="none" stroke="#000000" x1="174.083" y1="218.574" x2="174.966" y2="217.33"/>
		<line fill="none" stroke="#000000" x1="174.083" y1="218.574" x2="173.202" y2="217.33"/>
		<line fill="none" stroke="#000000" x1="174.083" y1="218.574" x2="172.657" y2="219.05"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.083" y1="218.317" x2="176.284" y2="218.317"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="1.25" ry="1.282"/>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="1" ry="1.026"/>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="0.75" ry="0.771"/>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="174.124" cy="282.847" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="174.124" y1="282.847" x2="174.124" y2="284.387"/>
		<line fill="none" stroke="#000000" x1="174.124" y1="282.847" x2="175.551" y2="283.322"/>
		<line fill="none" stroke="#000000" x1="174.124" y1="282.847" x2="175.006" y2="281.602"/>
		<line fill="none" stroke="#000000" x1="174.124" y1="282.847" x2="173.242" y2="281.602"/>
		<line fill="none" stroke="#000000" x1="174.124" y1="282.847" x2="172.697" y2="283.322"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="170.124" y1="282.59" x2="176.325" y2="282.59"/>
<path fill="none" stroke="#000000" d="M149.253,106.412c23.421,4,49.157,0,49.157,0"/>
<path fill="none" stroke="#000000" d="M159.216,118.206c14.543,4.873,28.143-0.115,28.143-0.115"/>
<path fill="none" stroke="#000000" d="M107.637,412.491c44.164,25.52,129.007,8.685,132.561,0"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M108.535,411.292
	c43.795,25.521,127.924,8.685,131.45,0"/>
<line fill="none" stroke="#000000" x1="143.373" y1="119.084" x2="108.433" y2="127.357"/>
<path fill="none" stroke="#000000" d="M108.433,127.357c0,0,19.475,48.022,12.463,51.706"/>
<line fill="none" stroke="#000000" x1="108.433" y1="127.357" x2="54.886" y2="210.083"/>
<line fill="none" stroke="#000000" x1="54.886" y1="210.083" x2="87.218" y2="274.746"/>
<line fill="none" stroke="#000000" x1="87.218" y1="274.746" x2="108.433" y2="262.988"/>
<line fill="none" stroke="#000000" x1="108.433" y1="262.988" x2="87.218" y2="207.412"/>
<line fill="none" stroke="#000000" x1="87.218" y1="207.412" x2="120.896" y2="179.062"/>
<line fill="none" stroke="#000000" x1="108.433" y1="262.988" x2="115.426" y2="276.568"/>
<line fill="none" stroke="#000000" x1="115.426" y1="276.568" x2="93.552" y2="288.412"/>
<line fill="none" stroke="#000000" x1="93.552" y1="288.412" x2="87.218" y2="274.746"/>
<line fill="none" stroke="#000000" x1="204.185" y1="118.342" x2="239.124" y2="126.615"/>
<path fill="none" stroke="#000000" d="M239.124,126.615c0,0-19.473,48.022-12.463,51.706"/>
<line fill="none" stroke="#000000" x1="239.124" y1="126.615" x2="292.673" y2="209.342"/>
<line fill="none" stroke="#000000" x1="292.673" y1="209.342" x2="260.339" y2="274.004"/>
<line fill="none" stroke="#000000" x1="260.339" y1="274.004" x2="239.124" y2="262.246"/>
<line fill="none" stroke="#000000" x1="239.124" y1="262.246" x2="260.339" y2="206.67"/>
<line fill="none" stroke="#000000" x1="260.339" y1="206.67" x2="226.661" y2="178.321"/>
<line fill="none" stroke="#000000" x1="239.124" y1="262.246" x2="232.132" y2="275.826"/>
<line fill="none" stroke="#000000" x1="232.132" y1="275.826" x2="254.006" y2="287.67"/>
<line fill="none" stroke="#000000" x1="254.006" y1="287.67" x2="260.339" y2="274.004"/>
<line fill="none" stroke="#000000" x1="132.354" y1="168.979" x2="159.328" y2="169.262"/>
<line fill="none" stroke="#000000" x1="159.328" y1="169.262" x2="159.328" y2="193.196"/>
<line fill="none" stroke="#000000" x1="132.354" y1="168.979" x2="132.354" y2="192.566"/>
<line fill="none" stroke="#000000" x1="132.354" y1="192.566" x2="145.629" y2="204.615"/>
<line fill="none" stroke="#000000" x1="145.629" y1="204.615" x2="159.328" y2="193.196"/>
<path fill="none" stroke="#000000" d="M166.415,141.835c8.803,5.577,15.106-0.034,15.106-0.034"/>
<line fill="none" stroke="#000000" x1="111.382" y1="134.961" x2="147.491" y2="126.615"/>
<line fill="none" stroke="#000000" x1="235.946" y1="134.961" x2="199.837" y2="126.615"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="146.156" y1="125.412" x2="110.974" y2="133.878"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="143.373" y1="116.324" x2="158.745" y2="145.246"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="158.745" y1="145.246" x2="171.881" y2="134.961"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="132.354" y1="174.334" x2="158.857" y2="174.334"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="157.664" y1="169.262" x2="157.831" y2="192.566"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="157.831" y1="192.566" x2="145.841" y2="202.637"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="133.498" y1="169.262" x2="133.498" y2="191.667"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="133.498" y1="191.667" x2="145.841" y2="202.637"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M110.224,126.933c0,0,20.934,50.754,12.195,54.479"
	/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="201.3" y1="125.185" x2="236.483" y2="133.651"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="204.083" y1="116.097" x2="188.712" y2="145.019"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="188.712" y1="145.019" x2="175.575" y2="134.734"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M237.233,126.706c0,0-20.934,50.754-12.195,54.479"
	/>
<line fill="none" stroke="#000000" x1="169.052" y1="141.295" x2="169.052" y2="425.538"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M167.731,140.617
	c7.648,5.577,13.124-0.034,13.124-0.034"/>
<g>
	<g>
		<ellipse fill="none" stroke="#000000" cx="173.374" cy="140.103" rx="1.5" ry="1.54"/>
		<ellipse fill="none" stroke="#000000" cx="173.375" cy="140.103" rx="1.25" ry="1.283"/>
		<ellipse fill="none" stroke="#000000" cx="173.374" cy="140.103" rx="0.999" ry="1.027"/>
		<ellipse fill="none" stroke="#000000" cx="173.374" cy="140.103" rx="0.75" ry="0.77"/>
		<ellipse fill="none" stroke="#000000" cx="173.374" cy="140.103" rx="0.5" ry="0.513"/>
		<ellipse fill="none" stroke="#000000" cx="173.375" cy="140.103" rx="0.25" ry="0.257"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" x1="173.374" y1="140.103" x2="173.374" y2="141.643"/>
		<line fill="none" stroke="#000000" x1="173.374" y1="140.103" x2="174.802" y2="140.578"/>
		<line fill="none" stroke="#000000" x1="173.374" y1="140.103" x2="174.257" y2="138.858"/>
		<line fill="none" stroke="#000000" x1="173.374" y1="140.103" x2="172.493" y2="138.858"/>
		<line fill="none" stroke="#000000" x1="173.374" y1="140.103" x2="171.948" y2="140.578"/>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-width="2" stroke-dasharray="0.3" x1="169.374" y1="139.846" x2="175.575" y2="139.846"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="88.85" y1="275.272" x2="109.22" y2="264.283"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="238.075" y1="264.283" x2="259.751" y2="275.272"/>
<line fill="none" stroke="#000000" x1="120.896" y1="179.062" x2="132.107" y2="258.773"/>
<path fill="none" stroke="#000000" d="M132.107,258.773C117,283,107.637,412.491,107.637,412.491"/>
<path fill="none" stroke="#000000" d="M146.517,204.272c2.983,57.917-12.131,218.151-12.131,218.151"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M144.75,203.687
	c2.983,57.569-12.132,216.837-12.132,216.837"/>
<line fill="none" stroke="#000000" x1="145.606" y1="167.979" x2="134.385" y2="129.418"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="143.373" y1="169.288" x2="132.107" y2="130.171"/>
<line fill="none" stroke="#000000" x1="215.61" y1="168.979" x2="188.637" y2="169.262"/>
<line fill="none" stroke="#000000" x1="188.637" y1="169.262" x2="188.637" y2="193.196"/>
<line fill="none" stroke="#000000" x1="215.61" y1="168.979" x2="215.61" y2="192.566"/>
<line fill="none" stroke="#000000" x1="215.61" y1="192.566" x2="202.336" y2="204.615"/>
<line fill="none" stroke="#000000" x1="202.336" y1="204.615" x2="188.637" y2="193.196"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="215.61" y1="174.334" x2="189.107" y2="174.334"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="190.301" y1="169.262" x2="190.134" y2="192.566"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="190.134" y1="192.566" x2="202.124" y2="202.637"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="214.467" y1="169.262" x2="214.467" y2="191.667"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="214.467" y1="191.667" x2="202.124" y2="202.637"/>
<line fill="none" stroke="#000000" x1="227.069" y1="179.062" x2="215.857" y2="258.773"/>
<path fill="none" stroke="#000000" d="M215.857,258.773c15.107,24.227,24.471,153.718,24.471,153.718"/>
<path fill="none" stroke="#000000" d="M201.448,204.272c-2.983,57.917,12.131,218.151,12.131,218.151"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M203.215,203.687
	c-2.983,57.569,12.132,216.837,12.132,216.837"/>
<line fill="none" stroke="#000000" x1="202.359" y1="167.979" x2="213.58" y2="129.418"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="204.592" y1="169.288" x2="215.857" y2="130.171"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="177.509" y1="143.087" x2="177.509" y2="425.538"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="171.308" y1="143.549" x2="171.308" y2="427.792"/>
<line fill="none" stroke="#000000" x1="401.652" y1="148.698" x2="401.652" y2="425.281"/>
<line fill="none" stroke="#000000" x1="376.545" y1="107.436" x2="370.418" y2="118.414"/>
<line fill="none" stroke="#000000" x1="425.697" y1="107.469" x2="431.824" y2="118.448"/>
<path fill="none" stroke="#000000" d="M376.893,107.436c23.421,4,49.157,0,49.157,0"/>
<path fill="none" stroke="#000000" d="M371.013,119.229c31.426,4.873,60.812-0.115,60.812-0.115"/>
<path fill="none" stroke="#000000" d="M335.276,413.515c44.164,25.52,129.007,8.685,132.561,0"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M336.175,412.315
	c43.795,25.521,127.924,8.685,131.45,0"/>
<line fill="none" stroke="#000000" x1="371.013" y1="120.107" x2="336.072" y2="128.38"/>
<path fill="none" stroke="#000000" d="M336.072,128.38c0,0,19.475,48.022,12.463,51.706"/>
<line fill="none" stroke="#000000" x1="431.824" y1="119.366" x2="466.764" y2="127.639"/>
<path fill="none" stroke="#000000" d="M466.764,127.639c0,0-19.473,48.022-12.463,51.706"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M337.863,127.957c0,0,20.934,50.754,12.195,54.479"
	/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M464.873,127.729c0,0-20.934,50.754-12.195,54.479"
	/>
<line fill="none" stroke="#000000" x1="348.535" y1="180.086" x2="359.747" y2="259.796"/>
<path fill="none" stroke="#000000" d="M359.747,259.796c-15.107,24.227-24.471,153.718-24.471,153.718"/>
<path fill="none" stroke="#000000" d="M374.156,149.175C381.5,257,362.024,423.446,362.024,423.446"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M372.39,148.44
	c8.11,70.56-12.132,272.62-12.132,272.62"/>
<path fill="none" stroke="#000000" d="M426.914,149.175C419.57,257,439.046,423.446,439.046,423.446"/>
<path fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" d="M428.681,148.44
	c-8.11,70.56,12.132,272.62,12.132,272.62"/>
<line fill="none" stroke="#000000" x1="454.709" y1="180.086" x2="443.497" y2="259.796"/>
<path fill="none" stroke="#000000" d="M443.497,259.796c15.107,24.227,24.471,153.718,24.471,153.718"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="399.644" y1="147.641" x2="399.644" y2="426.492"/>
<line fill="none" stroke="#000000" x1="323.419" y1="316.026" x2="299.699" y2="310.958"/>
<line fill="none" stroke="#000000" x1="296.966" y1="325.986" x2="321.342" y2="330.945"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="299.289" y1="313.213" x2="323.227" y2="317.411"/>
<line fill="none" stroke="#000000" x1="323.419" y1="316.026" x2="321.342" y2="330.945"/>
<line fill="none" stroke="#000000" x1="299.699" y1="310.958" x2="296.966" y2="325.986"/>
<line fill="none" stroke="#000000" x1="304.114" y1="311.63" x2="309.356" y2="269.303"/>
<line fill="none" stroke="#000000" x1="308.703" y1="277.6" x2="315.478" y2="279.1"/>
<line fill="none" stroke="#000000" x1="316.402" y1="271.114" x2="310.496" y2="313.213"/>
<line fill="none" stroke="#000000" x1="309.778" y1="269.317" x2="316.402" y2="270.803"/>
<line fill="none" stroke="#000000" x1="314.621" y1="314.146" x2="317.179" y2="302.35"/>
<path fill="none" stroke="#000000" d="M467.236,128.38c27.807,75.924,36.373,182.578,36.373,182.578"/>
<path fill="none" stroke="#000000" d="M479.89,316.026c0,0-30.709-112.433-26.535-121.391"/>
<line fill="none" stroke="#000000" x1="479.89" y1="316.026" x2="503.609" y2="310.958"/>
<line fill="none" stroke="#000000" x1="506.343" y1="325.986" x2="481.967" y2="330.945"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="504.02" y1="313.213" x2="480.082" y2="317.411"/>
<line fill="none" stroke="#000000" x1="479.89" y1="316.026" x2="481.967" y2="330.945"/>
<line fill="none" stroke="#000000" x1="503.609" y1="310.958" x2="506.343" y2="325.986"/>
<line fill="none" stroke="#000000" x1="499.194" y1="311.63" x2="493.952" y2="269.303"/>
<line fill="none" stroke="#000000" x1="494.605" y1="277.6" x2="487.831" y2="279.1"/>
<line fill="none" stroke="#000000" x1="486.906" y1="271.114" x2="492.812" y2="313.213"/>
<line fill="none" stroke="#000000" x1="493.53" y1="269.317" x2="486.906" y2="270.803"/>
<line fill="none" stroke="#000000" x1="488.688" y1="314.146" x2="486.13" y2="302.35"/>
<line fill="none" stroke="#000000" x1="345.027" y1="149.729" x2="457.709" y2="149.729"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-dasharray="2" x1="341.523" y1="147.641" x2="459.771" y2="147.641"/>
</svg>
`,
    },

    {
      _id: '12234212d3',
      name: 'MRUK12B SLEEVE',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1729.13px" height="2369.76px" viewBox="0 0 1729.13 2369.76" enable-background="new 0 0 1729.13 2369.76"
	 xml:space="preserve">
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="822" y1="2003.331" x2="822" y2="359.047"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="329.107" y1="727.995" x2="1289.766" y2="727.995"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="427.335" y1="1294.75" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="341.972" y1="799.417" x2="1277.771" y2="799.417"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="329.107" y1="727.302" x2="427.335" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1290.182" y1="727.542" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="540.363" y1="2003.512" x2="1078.88" y2="2003.512"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="540.364" y1="2003.512" x2="427.335" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1078.88" y1="2003.512" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="809.622" y1="728.719" x2="809.622" y2="2003.331"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="696.099" y1="861.323" x2="696.099" y2="1874.981"/>
		<g>
			<path d="M692.533,865.867c0,0.117,0.058,0.231,0.164,0.299c0.165,0.105,0.384,0.056,0.489-0.109l2.912-4.573l2.912,4.573
				c0.105,0.165,0.325,0.214,0.489,0.109c0.165-0.105,0.212-0.326,0.109-0.489l-3.211-5.042c-0.065-0.102-0.178-0.164-0.299-0.164
				s-0.234,0.062-0.299,0.164l-3.211,5.042C692.551,865.736,692.533,865.802,692.533,865.867
				C692.533,865.984,692.533,865.802,692.533,865.867z"/>
		</g>
		<g>
			<path d="M692.533,1870.438c0-0.117,0.058-0.231,0.164-0.3c0.165-0.105,0.384-0.057,0.489,0.108l2.912,4.573l2.912-4.573
				c0.105-0.165,0.325-0.214,0.489-0.108s0.212,0.326,0.109,0.489l-3.211,5.042c-0.065,0.103-0.178,0.164-0.299,0.164
				s-0.234-0.062-0.299-0.164l-3.211-5.042C692.551,1870.568,692.533,1870.502,692.533,1870.438
				C692.533,1870.32,692.533,1870.502,692.533,1870.438z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 681.8193 1299.5391)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUSA8B - MREU38B</text>
<text transform="matrix(0 -1 1 0 722.6987 1034.8486)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 682.2407 1823.4521)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
<text transform="matrix(0 -1 1 0 722.8398 1824.1641)" font-family="'Calibri'" font-size="28.3465">WOVEN BODICE BLOCK</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822,359.047
	c-205.771,0.238-291.784,302.799-492.835,368.083"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822,359.047
	c169.653,2.516,271.505,330.511,468.137,368.672"/>
<text transform="matrix(1 0 0 1 948.5938 1278.7217)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
<text transform="matrix(1 0 0 1 948.5938 782.6616)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
</svg>
`,
    },
    {
      _id: '1223433',
      name: 'MRUK12B BODICE',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1683.78px" height="2383.94px" viewBox="0 0 1683.78 2383.94" enable-background="new 0 0 1683.78 2383.94"
	 xml:space="preserve">
<text transform="matrix(1.0506 0 0 1 64.5161 560.2124)" fill="#010101" font-family="'Calibri'" font-size="24">XB</text>
<text transform="matrix(1.0506 0 0 1 64.9194 1182.5327)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
<text transform="matrix(1.0506 0 0 1 64.9194 1435.9966)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.457" y1="1445.391" x2="680.646" y2="1445.391"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.004" y1="566.734" x2="595.198" y2="566.734"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="339.846" y1="976.46" x2="382.4" y2="1445.521"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="339.846" y1="976.46" x2="297.293" y2="1445.479"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M613.475,354.545
	c-14.551,72.674-18.277,212.188-18.277,212.188"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M595.028,566.605
	c-11.076,358.365,65.25,349.567,100.867,352.882"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="680.647" y1="1445.587" x2="695.895" y2="919.487"/>
<text transform="matrix(1.0506 0 0 1 62.8242 2040.7583)" fill="#010101" font-family="'Calibri'" font-size="24">HL</text>
<text transform="matrix(1 0 0 1 65.6738 970.4819)" font-family="'Calibri'" font-size="24">BL</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.45" y1="976.501" x2="694.254" y2="976.501"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M268.982,240.418
	c-13.904,46.434-212.231,42.387-212.231,42.387"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="268.982" y1="240.418" x2="613.476" y2="354.545"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="297.293" y1="1445.478" x2="339.846" y2="1857.375"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="382.4" y1="1445.52" x2="339.846" y2="1856.497"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.45" y1="2054.816" x2="764.896" y2="2054.816"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="339.846" y1="976.46" x2="339.846" y2="2054.816"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.45" y1="282.621" x2="56.45" y2="2055.011"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="56.45" y1="1187.976" x2="688.271" y2="1187.976"/>
<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="520.562" y1="1016.435" x2="520.562" y2="1992.354"/>
<path d="M506.301,1034.61c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.536,0.226,1.957-0.434l11.649-18.291l11.649,18.291
	c0.42,0.66,1.298,0.855,1.957,0.434c0.658-0.421,0.849-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.196-0.656
	c-0.485,0-0.936,0.248-1.196,0.656l-12.845,20.168C506.373,1034.085,506.301,1034.351,506.301,1034.61
	C506.301,1035.079,506.301,1034.351,506.301,1034.61"/>
<path d="M506.301,1974.178c0-0.468,0.233-0.926,0.656-1.196c0.659-0.421,1.536-0.227,1.957,0.434l11.649,18.291l11.649-18.291
	c0.42-0.66,1.298-0.854,1.957-0.434c0.658,0.421,0.849,1.302,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.655-1.196,0.655
	c-0.485,0-0.936-0.247-1.196-0.655l-12.845-20.168C506.373,1974.704,506.301,1974.439,506.301,1974.178
	C506.301,1973.71,506.301,1974.439,506.301,1974.178"/>
<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 546.3037 1150.9624)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<text transform="matrix(-6.123234e-17 -1 1.0736 -6.573667e-17 502.1621 1955.7993)"><tspan x="0" y="0" font-family="'Calibri'" font-size="22.3555">B</tspan><tspan x="11.959" y="0" font-family="'Calibri'" font-size="22.3555">A</tspan><tspan x="24.738" y="0" font-family="'Calibri'" font-size="22.3555">CK BODICE B</tspan><tspan x="139.725" y="0" font-family="'Calibri'" font-size="22.3555">L</tspan><tspan x="148.653" y="0" font-family="'Calibri'" font-size="22.3555">OCK</tspan></text>
<text transform="matrix(1 0 0 1 62.8242 743.0464)" font-family="'Calibri'" font-size="36">C</text>
<text transform="matrix(1 0 0 1 62.8242 786.2466)" font-family="'Calibri'" font-size="36">B</text>
<text transform="matrix(-6.123234e-17 -1 1.0736 -6.573667e-17 506.8262 1344.1392)" font-family="'Calibri'" font-size="22.3555">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 1041.2891 1947.5708)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">F</tspan><tspan x="11.027" y="0" font-family="'Calibri'" font-size="24">R</tspan><tspan x="23.843" y="0" font-family="'Calibri'" font-size="24">ONT BODICE B</tspan><tspan x="165.101" y="0" font-family="'Calibri'" font-size="24">L</tspan><tspan x="174.687" y="0" font-family="'Calibri'" font-size="24">OCK</tspan></text>
<text transform="matrix(1.0506 0 0 1 1499.666 969.6206)" fill="#010101" font-family="'Calibri'" font-size="24">BL</text>
<text transform="matrix(1.0506 0 0 1 1492.1523 1437.3325)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
<text transform="matrix(1.0506 0 0 1 1499.666 572.7568)" fill="#010101" font-family="'Calibri'" font-size="24">XF</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="907.715" y1="1445.573" x2="1531.034" y2="1445.573"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.414" y1="977.776" x2="1530.657" y2="977.776"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1148.225" y1="299.596" x2="1247.949" y2="977.931"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.949" y1="977.691" x2="1290.19" y2="1445.515"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.707" y1="977.651" x2="1205.397" y2="1445.694"/>
<text transform="matrix(1 0 0 1.0358 1495.375 2046.7827)" fill="#010101" font-family="'Calibri'" font-size="23.1713">HL</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1531.361" y1="416.612" x2="1531.361" y2="2054.99"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="967.141" y1="352.018" x2="1247.706" y2="978.098"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.584" y1="1188.232" x2="1530.897" y2="1188.232"/>
<text transform="matrix(1.0506 0 0 1 1495.375 1182.2202)" fill="#010101" font-family="'Calibri'" font-size="24">UB</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="907.715" y1="1445.564" x2="812.582" y2="928.331"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M921.926,656.496
	c102.514,256.292-84.986,267.579-109.345,271.835"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1290.184" y1="1445.521" x2="1247.824" y2="1744.228"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1205.398" y1="1445.648" x2="1247.695" y2="1744.328"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1531.348" y1="2054.99" x2="822.9" y2="2054.99"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1247.695" y1="977.556" x2="1247.695" y2="2055.157"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="822.896" y1="984.41" x2="1247.949" y2="977.691"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="967.566" y1="351.802" x2="819.693" y2="454.972"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1083.449" y1="611.171" x2="921.582" y2="656.72"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M819.873,454.556
	c0,0,92.691,178.95,102.084,202.163"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1318.701" y1="240.056" x2="1147.832" y2="299.733"/>
<text transform="matrix(-6.123234e-17 -1 1 -6.123234e-17 1078.6797 1166.981)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1189.141" y1="580.096" x2="1531.391" y2="580.096"/>
<path fill="none" stroke="#000000" stroke-width="0.283" stroke-miterlimit="10" stroke-dasharray="0.567,0.567" d="
	M1247.996,1189.098c-117.714,0-213.14-95.197-213.14-212.626c0-117.429,95.426-212.626,213.14-212.626
	c117.711,0,213.135,95.197,213.135,212.626C1461.131,1093.901,1365.707,1189.098,1247.996,1189.098z"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M907.771,1445.645
	c-92.709,322.193-84.845,609.437-84.845,609.437"/>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M680.646,1444.609
	c92.71,322.193,84.845,609.437,84.845,609.437"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="861.027" y1="1191.876" x2="1247.584" y2="1188.232"/>
<text transform="matrix(1 0 0 1 1506.25 748.355)" font-family="'Calibri'" font-size="36">C</text>
<text transform="matrix(1 0 0 1 1506.25 791.5552)" font-family="'Calibri'" font-size="36">F</text>
<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1318.701,240.811
	c53.938,183.024,212.659,175.801,212.659,175.801"/>
<text transform="matrix(-6.123234e-17 -1 1.0736 -6.573667e-17 1035.4229 1357.1909)" font-family="'Calibri'" font-size="22.3555">MRUK12B - MRUS8B - MREU38B</text>
</svg>
 `,
    },

    {
      _id: '12mku983',
      name: 'SHIRT DRESS PATTERN',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2551.18px" height="5102.359px" viewBox="0 0 2551.18 5102.359" enable-background="new 0 0 2551.18 5102.359"
	 xml:space="preserve">
<g>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1253.626" y1="2448.025" x2="1605.502" y2="2448.025"/>
			<g>
				<circle cx="1253.814" cy="2448.025" r="3.76"/>
			</g>
			<g>
				<circle cx="1605.314" cy="2448.025" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1573.348" y1="2448.025" x2="1564.754" y2="2738.757"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1277.281" y1="2448.025" x2="1277.281" y2="2728.956"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1277.281" y1="2728.956" x2="1421.02" y2="2797.558"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1421.02" y1="2797.558" x2="1564.754" y2="2738.757"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1250.054" y1="2375.889" x2="1611.086" y2="2375.889"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1611.086" y1="2375.889" x2="1600.605" y2="2763.065"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1250.054" y1="2375.889" x2="1250.054" y2="2750.015"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1250.054" y1="2750.015" x2="1425.324" y2="2841.374"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1425.324" y1="2841.374" x2="1600.605" y2="2763.065"/>
	<text transform="matrix(1 0 0 1 1373.7637 2509.7466)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">FRONT POCKET</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="1455.809" y1="2628.09" x2="1455.809" y2="2725.481"/>
			<g>
				<path fill="#231F20" d="M1455.809,2610.982c-2.986,8.051-8.082,18.038-13.48,24.229l13.48-4.875l13.479,4.875
					C1463.889,2629.021,1458.793,2619.033,1455.809,2610.982z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1455.809,2742.589c-2.986-8.049-8.082-18.037-13.48-24.229l13.48,4.877l13.479-4.877
					C1463.889,2724.552,1458.793,2734.54,1455.809,2742.589z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<rect x="369.422" y="4049.215" fill="none" stroke="#000000" stroke-miterlimit="10" width="565.555" height="161.758"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="883.527" y1="4017.985" x2="883.527" y2="4242.21"/>
			<g>
				<circle cx="883.527" cy="4018.174" r="3.76"/>
			</g>
			<g>
				<circle cx="883.527" cy="4242.021" r="3.76"/>
			</g>
		</g>
	</g>
	<rect x="335.121" y="4014.414" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="633.887" height="231.367"/>
	<g>
		<g>
			<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="738.93" y1="4070.328" x2="738.93" y2="4189.863"/>
			<g>
				<path fill="#231F20" d="M738.93,4064.293c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C741.78,4070.656,739.982,4067.133,738.93,4064.293z"/>
			</g>
			<g>
				<path fill="#231F20" d="M738.93,4195.898c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C741.78,4189.535,739.982,4193.059,738.93,4195.898z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 571.0566 4103.5078)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUFF</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3938.054" x2="2005.985" y2="3938.054"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3938.054" x2="2438.849" y2="3910.284"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2393.657" y1="3933.458" x2="2390.477" y2="3901.381"/>
			<g>
				<circle cx="2390.495" cy="3901.567" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3822.081" x2="2005.985" y2="3962.101"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3847.405" x2="2005.985" y2="3847.405"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3847.405" x2="2358.813" y2="3822.081"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2358.813,3822.081c75.949-2.449,80.035,88.203,80.035,88.203"/>
	<text transform="matrix(1 0 0 1 1762.8877 3875.9619)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1508.548" y1="3962.101" x2="2005.985" y2="3962.101"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2005.985" y1="3962.101" x2="2464.653" y2="3928.026"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1508.548" y1="3822.081" x2="2005.985" y2="3822.081"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2005.985" y1="3822.081" x2="2379.751" y2="3797.24"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M2379.751,3797.24c84.055,6.498,84.902,130.786,84.902,130.786"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2379.67" y1="3797.603" x2="2381.981" y2="3835.673"/>
			<g>
				<circle cx="2381.97" cy="3835.485" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.773" y1="3938.206" x2="1075.91" y2="3910.437"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1121.102" y1="3933.61" x2="1124.282" y2="3901.533"/>
			<g>
				<circle cx="1124.264" cy="3901.72" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.773" y1="3847.558" x2="1155.945" y2="3822.233"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1155.945,3822.233c-75.949-2.449-80.035,88.203-80.035,88.203"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1508.773" y1="3962.253" x2="1050.105" y2="3928.179"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1508.773" y1="3822.233" x2="1135.008" y2="3797.393"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1135.008,3797.393c-84.055,6.498-84.902,130.786-84.902,130.786"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1135.089" y1="3797.755" x2="1132.777" y2="3835.825"/>
			<g>
				<circle cx="1132.789" cy="3835.638" r="3.76"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1836.492" y1="3834.544" x2="1836.492" y2="3954.079"/>
			<g>
				<path fill="#231F20" d="M1836.492,3828.509c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C1839.343,3834.872,1837.545,3831.349,1836.492,3828.509z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1836.492,3960.114c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C1839.343,3953.751,1837.545,3957.274,1836.492,3960.114z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1758.427" y1="3821.569" x2="1758.427" y2="3967.054"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3821.569" x2="1508.548" y2="3961.589"/>
	<text transform="matrix(1 0 0 1 1414.8008 3888.6289)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR STAND</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2    SHIRT DRESS</tspan></text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3533.971" x2="1779.562" y2="3717.592"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3557.26" x2="2445.965" y2="3520.51"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2445.965" y1="3520.51" x2="2410.852" y2="3715.697"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2410.852" y1="3715.697" x2="2142.164" y2="3709.162"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2142.164" y1="3709.162" x2="1779.562" y2="3694.033"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2029.893" y1="3690.087" x2="2030.055" y2="3727.498"/>
			<g>
				<circle cx="2029.894" cy="3690.274" r="3.76"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 1784.332 3617.9746)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1779.562" y1="3533.971" x2="2477.547" y2="3496.01"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2477.477" y1="3496.01" x2="2430.449" y2="3740.197"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2430.449" y1="3740.197" x2="2142.164" y2="3733.662"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2142.164" y1="3733.662" x2="1779.562" y2="3717.326"/>
	<g>
		<g>
			<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1930.457" y1="3585.061" x2="1930.457" y2="3704.592"/>
			<g>
				<path fill="#231F20" d="M1930.457,3579.025c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C1933.308,3585.389,1931.51,3581.865,1930.457,3579.025z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1930.457,3710.627c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C1933.308,3704.264,1931.51,3707.787,1930.457,3710.627z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3557.26" x2="1111.387" y2="3521.721"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1111.387" y1="3521.721" x2="1146.5" y2="3716.908"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1146.5" y1="3716.908" x2="1415.188" y2="3710.373"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1415.188" y1="3710.373" x2="1779.562" y2="3694.033"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1528.009" y1="3698.378" x2="1527.293" y2="3728.709"/>
			<g>
				<circle cx="1528.004" cy="3698.565" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1779.562" y1="3533.971" x2="1081.578" y2="3497.221"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1079.871" y1="3497.221" x2="1126.902" y2="3741.408"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1126.902" y1="3741.408" x2="1415.188" y2="3734.873"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1415.188" y1="3734.873" x2="1780.691" y2="3717.326"/>
	<text transform="matrix(1 0 0 1 1548.6885 3592.8857)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR FALL</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
</g>
<g>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1702.201" y1="356.711" x2="2039.666" y2="356.711"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1759.613" y1="754.172" x2="2039.666" y2="754.172"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1757.949" y1="1834.749" x2="2039.666" y2="1834.749"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.94" y1="1499.464" x2="1778.94" y2="2365.644"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.709" y1="754.392" x2="1822.062" y2="1223.745"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1822.062" y1="1222.968" x2="1778.94" y2="1509.741"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1691.713" y1="159.151" x2="1778.709" y2="754.392"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1800.499" y1="1222.968" x2="2039.666" y2="1222.968"/>
	<text transform="matrix(1 0 0 1 1955.0996 1804.1221)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(1 0 0 1 1984.3633 745.5059)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
	<text transform="matrix(1 0 0 1 1938.3613 1202.707)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<text transform="matrix(1 0 0 1 1984.3633 350.9512)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XF</text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2017.74" y1="190.136" x2="2017.74" y2="2365.644"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1692.113" y1="161.881" x2="1884.088" y2="93.332"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1757.948" y1="2365.644" x2="2038.166" y2="2365.644"/>
	<text transform="matrix(1 0 0 1 1992.8262 946.6553)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<g>
		<g>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,617.976c-5.418,0-9.801-4.383-9.801-9.801
				c0-5.414,4.383-9.797,9.801-9.797s9.801,4.383,9.801,9.797C1910.604,613.593,1906.222,617.976,1900.804,617.976z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1908.972,608.175c0-4.516-3.656-8.164-8.168-8.164
				s-8.168,3.648-8.168,8.164c0,4.52,3.656,8.164,8.168,8.164S1908.972,612.694,1908.972,608.175z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,614.714c-3.613,0-6.531-2.93-6.531-6.539
				c0-3.605,2.918-6.535,6.531-6.535s6.531,2.93,6.531,6.535C1907.335,611.784,1904.417,614.714,1900.804,614.714z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1905.706,608.175c0-2.707-2.191-4.898-4.902-4.898
				c-2.707,0-4.898,2.191-4.898,4.898c0,2.711,2.191,4.902,4.898,4.902C1903.515,613.077,1905.706,610.886,1905.706,608.175z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,611.44c-1.805,0-3.266-1.457-3.266-3.266
				s1.461-3.262,3.266-3.262s3.27,1.453,3.27,3.262S1902.608,611.44,1900.804,611.44z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1902.437,608.175c0-0.898-0.727-1.637-1.633-1.637
				c-0.902,0-1.633,0.738-1.633,1.637c0,0.902,0.73,1.637,1.633,1.637C1901.71,609.812,1902.437,609.077,1902.437,608.175z"/>
		</g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1900.804" y2="617.976"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1910.124" y2="611.202"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1906.565" y2="600.253"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1895.042" y2="600.253"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1891.483" y2="611.202"/>
		</g>
	</g>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1882.878,91.145c45.818,96.354,134.862,98.991,134.862,98.991"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1757.948" y1="1509.741" x2="1757.948" y2="2424.608"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2039.666" y1="173.887" x2="2039.666" y2="2424.608"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1757.948" y1="2424.608" x2="2039.666" y2="2424.608"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1671.166" y1="146.303" x2="1760.666" y2="753.087"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1671.166" y1="145.658" x2="1890.788" y2="68.505"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1890.788,68.505c50.579,102.567,148.878,105.382,148.878,105.382"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1760.666" y1="753.087" x2="1800.499" y2="1224.39"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1800.499" y1="1223.612" x2="1757.378" y2="1510.386"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="1906.935" y1="1156.02" x2="1906.935" y2="2262.447"/>
			<g>
				<path d="M1892.671,1174.197c0,0.469,0.232,0.927,0.656,1.197c0.659,0.422,1.536,0.227,1.957-0.434l11.65-18.294l11.65,18.294
					c0.421,0.66,1.298,0.855,1.957,0.434c0.659-0.42,0.85-1.302,0.435-1.957l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.846,20.17C1892.743,1173.673,1892.671,1173.938,1892.671,1174.197
					C1892.671,1174.666,1892.671,1173.938,1892.671,1174.197z"/>
			</g>
			<g>
				<path d="M1892.671,2244.27c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.536-0.226,1.957,0.435l11.65,18.294l11.65-18.294
					c0.421-0.66,1.298-0.855,1.957-0.435s0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.846-20.17C1892.743,2244.794,1892.671,2244.529,1892.671,2244.27
					C1892.671,2243.801,1892.671,2244.529,1892.671,2244.27z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1932.6768 1424.4648)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(0 -1 1.0736 0 1888.5361 2229.3018)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">CENTRE FRONT</tspan><tspan x="172.941" y="0" font-family="'Calibri'" font-size="28.3465"> </tspan></text>
	<text transform="matrix(0 -1 1.0736 0 1893.1992 1617.6416)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
	<text transform="matrix(0 -1 1.0736 0 1932.6777 2229.3018)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
	<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 1893.2002 1792.6938)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="208.352" y1="121.512" x2="496.735" y2="121.512"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="208.352" y1="121.512" x2="208.352" y2="2174.215"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="462.151" y1="1409.758" x2="462.151" y2="2174.215"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="462.151" y1="591.821" x2="422.893" y2="1032.313"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="422.893" y1="1032.313" x2="462.151" y2="1430.477"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="183.438" y1="1641.172" x2="487.204" y2="1645.129"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="182.321" y1="1031.54" x2="444.745" y2="1031.54"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="182.321" y1="591.821" x2="487.766" y2="591.821"/>
	<text transform="matrix(0.8463 0 0 1 222.3823 576.8086)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
	<text transform="matrix(0.8463 0 0 1 222.3823 1018.6387)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<text transform="matrix(0.8463 0 0 1 222.3823 1628.6821)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(0.8463 0 0 1 222.3823 731.9785)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="183.438" y1="2174.215" x2="487.756" y2="2174.215"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M496.735,121.512c-18.619,104.129-34.584,470.309-34.584,470.309"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="182.321" y1="91.77" x2="528.76" y2="91.77"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="182.321" y1="91.77" x2="182.321" y2="2226.833"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="487.214" y1="1436.602" x2="487.214" y2="2231.735"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="487.766" y1="591.821" x2="444.2" y2="1044.016"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="444.2" y1="1044.016" x2="487.214" y2="1436.602"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="179.29" y1="2231.735" x2="487.875" y2="2231.735"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M528.76,96.668c-22.368,110.094-41.546,497.246-41.546,497.246"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="354.565" y1="973.073" x2="354.565" y2="2028.713"/>
			<g>
				<path d="M340.301,991.25c0,0.467,0.232,0.926,0.656,1.197c0.659,0.42,1.537,0.225,1.958-0.436l11.65-18.293l11.65,18.293
					c0.421,0.66,1.298,0.855,1.958,0.436c0.659-0.421,0.85-1.303,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.846,20.17C340.374,990.725,340.301,990.99,340.301,991.25
					C340.301,991.717,340.301,990.99,340.301,991.25z"/>
			</g>
			<g>
				<path d="M340.301,2010.536c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.537-0.226,1.958,0.435l11.65,18.294l11.65-18.294
					c0.421-0.66,1.298-0.855,1.958-0.435s0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.846-20.17C340.374,2011.06,340.301,2010.795,340.301,2010.536
					C340.301,2010.067,340.301,2010.795,340.301,2010.536z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1.1816 1 0 376.3501 1159.3013)" fill="#9A9899" font-family="'Calibri'" font-size="20.3118">BCSizing ©</text>
	<text transform="matrix(0 -1.1816 1.0736 0 338.9917 1997.7368)"><tspan x="0" y="0" font-family="'Calibri'" font-size="23.9904">CENTRE B</tspan><tspan x="93.168" y="0" font-family="'Calibri'" font-size="23.9904">A</tspan><tspan x="106.881" y="0" font-family="'Calibri'" font-size="23.9904">CK </tspan></text>
	<text transform="matrix(0 -1.1816 1.0736 0 342.9395 1386.0767)" font-family="'Calibri'" font-size="23.9904">MRUK12B - MRUS8B - MREU38B</text>
	<text transform="matrix(0 -1.1816 1.0736 0 376.3496 1997.7368)" font-family="'Calibri'" font-size="23.9904">SHIRT DRESS</text>
	<text transform="matrix(4.489659e-11 -1.1816 1 5.304876e-11 342.9399 1594.8423)" font-family="'Calibri'" font-size="23.9904">CUT 2</text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="576.199" y1="127.32" x2="774.047" y2="127.32"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="542.113" y1="1436.281" x2="542.113" y2="2180.02"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="916.961" y1="461.32" x2="887.238" y2="1038.117"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M775.559,127.32c0,0-81.637,350.57,141.402,334"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="542.766" y1="597.625" x2="589.152" y2="1038.117"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="589.152" y1="1038.117" x2="542.766" y2="1436.281"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="513.219" y1="1649.125" x2="1024.156" y2="1649.125"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="567.121" y1="1037.344" x2="908.707" y2="1037.344"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="515.867" y1="597.625" x2="935.191" y2="597.625"/>
	<text transform="matrix(1 0 0 1 862.6138 584.3125)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
	<text transform="matrix(1 0 0 1 823.9561 1024.8047)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<text transform="matrix(1 0 0 1 935.1914 1623.459)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="542.113" y1="2180.02" x2="1045.793" y2="2180.02"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="983.145" y1="1513.621" x2="1045.793" y2="2180.738"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M887.238,1038.117c60.836,165.164,95.906,475.504,95.906,475.504"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M582.977,127.32c-22,104.125-40.863,470.305-40.863,470.305"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="561.762" y1="102.836" x2="797.449" y2="102.836"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="513.219" y1="1422.969" x2="513.219" y2="2233"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="942.766" y1="447.793" x2="908.707" y2="1024.805"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M797.449,102.277c0,0-83.898,357.727,145.316,340.816"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="513.965" y1="584.312" x2="567.121" y2="1024.805"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="567.121" y1="1024.805" x2="513.965" y2="1422.969"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="513.219" y1="2235.309" x2="1090.395" y2="2235.309"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1014.469" y1="1513.621" x2="1085.496" y2="2235.309"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M908.707,1024.805c67.086,169.789,105.762,488.816,105.762,488.816"
		/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M561.762,102.836c-26.137,106.605-48.543,481.477-48.543,481.477"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="739.9" y1="1005.865" x2="739.9" y2="2061.507"/>
			<g>
				<path d="M725.636,1024.043c0,0.469,0.232,0.927,0.656,1.197c0.659,0.422,1.537,0.227,1.958-0.434l11.65-18.294l11.65,18.294
					c0.421,0.66,1.299,0.855,1.958,0.434c0.659-0.42,0.85-1.302,0.435-1.957l-12.846-20.17c-0.26-0.408-0.711-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.846,20.17C725.708,1023.519,725.636,1023.783,725.636,1024.043
					C725.636,1024.512,725.636,1023.783,725.636,1024.043z"/>
			</g>
			<g>
				<path d="M725.636,2043.329c0-0.467,0.232-0.926,0.656-1.197c0.659-0.42,1.537-0.226,1.958,0.436l11.65,18.293l11.65-18.293
					c0.421-0.661,1.299-0.855,1.958-0.436c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.26,0.408-0.711,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.846-20.17C725.708,2043.854,725.636,2043.59,725.636,2043.329
					C725.636,2042.862,725.636,2043.59,725.636,2043.329z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 765.6411 1172.3672)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(0 -1 1.0736 0 721.4985 2028.3604)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">SIDE B</tspan><tspan x="71.744" y="0" font-family="'Calibri'" font-size="28.3465">A</tspan><tspan x="87.947" y="0" font-family="'Calibri'" font-size="28.3465">CK </tspan></text>
	<text transform="matrix(0 -1 1.0736 0 726.1636 1416.7002)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
	<text transform="matrix(0 -1 1.0736 0 765.6401 2028.3604)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
	<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 726.1636 1623.4595)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
</g>
<g>
	<rect x="2248.764" y="2925.325" fill="none" stroke="#000000" stroke-miterlimit="10" width="115.152" height="481.234"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2248.764" y1="3002.31" x2="2363.916" y2="3002.31"/>
	<rect x="2229.674" y="2876.325" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="149.926" height="557.516"/>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="2304.635" y1="3040.241" x2="2304.635" y2="3374.25"/>
			<g>
				<path fill="#231F20" d="M2304.635,3023.134c-2.986,8.05-8.082,18.037-13.48,24.229l13.48-4.876l13.479,4.876
					C2312.715,3041.171,2307.619,3031.184,2304.635,3023.134z"/>
			</g>
			<g>
				<path fill="#231F20" d="M2304.635,3391.357c-2.986-8.05-8.082-18.037-13.48-24.229l13.48,4.876l13.479-4.876
					C2312.715,3373.32,2307.619,3383.308,2304.635,3391.357z"/>
			</g>
		</g>
	</g>
	
		<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 2293.7637 3340.9824)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUFF PLACKET</text>
	<text transform="matrix(0 -1 1.0736 0 2297.4658 3127.3926)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
</g>
<g>
	<rect x="2104.508" y="3022.436" fill="none" stroke="#000000" stroke-miterlimit="10" width="68.598" height="404.25"/>
	<rect x="2084.926" y="3022.436" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="103.617" height="433.273"/>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="2151.078" y1="3069.252" x2="2151.078" y2="3395.467"/>
			<g>
				<path fill="#231F20" d="M2151.078,3052.145c-2.986,8.05-8.083,18.037-13.48,24.229l13.48-4.876l13.479,4.876
					C2159.158,3070.182,2154.062,3060.194,2151.078,3052.145z"/>
			</g>
			<g>
				<path fill="#231F20" d="M2151.078,3412.574c-2.986-8.05-8.083-18.038-13.48-24.229l13.48,4.876l13.479-4.876
					C2159.158,3394.536,2154.062,3404.524,2151.078,3412.574z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1.0736 0 2136.7344 3100.1348)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	
		<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 2138.8066 3383.7246)" fill="#010101" font-family="'Calibri'" font-size="28.3465">UNDER CUFF PLACKET</text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1542.665" y1="3449.553" x2="2304.637" y2="2687.582"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M2167.205,2524.934c26.096,40.42,137.432,162.648,137.432,162.648"/>
	
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1846.656" y1="2686.276" x2="2166.57" y2="2524.3"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1842.728,2687.013c19.294,47.694-118.743,181.131-118.743,181.131"
		/>
	
		<text transform="matrix(0.7071 -0.7071 0.7071 0.7071 1932.1357 3042.1846)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XB</text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2136.734" y1="2446.755" x2="1796.865" y2="2615.73"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2166.57" y1="2524.3" x2="2136.734" y2="2446.755"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1842.17,2687.57c-13.992-36.603-45.305-71.84-45.305-71.84"/>
	
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1707.983" y1="2853.981" x2="1936.791" y2="3082.789"/>
	<text transform="matrix(0.7071 -0.7071 0.7071 0.7071 1810.0918 2938.7383)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C </tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="1560.297" y1="3100.178" x2="1767.071" y2="3100.186"/>
			<g>
				<path fill="#231F20" d="M1543.189,3100.177c8.049,2.987,18.037,8.084,24.228,13.481l-4.876-13.48l4.877-13.479
					C1561.227,3092.098,1551.239,3097.193,1543.189,3100.177z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1784.179,3100.186c-8.05,2.986-18.038,8.083-24.229,13.48l4.877-13.48l-4.876-13.479
					C1766.142,3092.105,1776.129,3097.201,1784.179,3100.186z"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="1663.68" y1="2996.794" x2="1663.688" y2="3203.568"/>
			<g>
				<path fill="#231F20" d="M1663.68,2979.687c-2.986,8.051-8.082,18.039-13.48,24.229l13.48-4.876l13.479,4.875
					C1671.761,2997.725,1666.664,2987.737,1663.68,2979.687z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1663.688,3220.676c-2.987-8.051-8.084-18.038-13.482-24.229l13.482,4.875l13.478-4.876
					C1671.768,3202.637,1666.672,3212.625,1663.688,3220.676z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1545.506" y1="3477.61" x2="2332.693" y2="2690.422"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2147.147" y1="2411.014" x2="1762.531" y2="2608.632"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1823.228,2697.327c-20.901-44.154-60.104-89.288-60.104-89.288"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M2189.035,2514.655c52.668,72.697,143.834,175.943,143.834,175.943"
		/>
	<text transform="matrix(0 -1 1 0 1547.7305 3264.7373)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK YOKE</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
	<path fill="none" stroke="#ED1C24" stroke-miterlimit="10" d="M1821.833,2695.933c10.88,36.529-113.335,157.486-113.335,157.486"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="2190.458" y1="2516.077" x2="2147.147" y2="2411.014"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1379.999,3312.104c40.42,26.096,162.648,137.432,162.648,137.432"/>
	
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1541.341" y1="2991.556" x2="1379.365" y2="3311.471"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1542.078,2987.627c47.694,19.294,181.129-118.743,181.129-118.743"
		/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1301.82" y1="3281.633" x2="1470.795" y2="2941.765"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1379.365" y1="3311.471" x2="1301.82" y2="3281.633"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1542.636,2987.069c-36.603-13.992-71.841-45.305-71.841-45.305"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1266.079" y1="3292.047" x2="1463.696" y2="2907.431"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1552.393,2968.127c-44.154-20.901-89.288-60.104-89.288-60.104"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1369.721,3333.936c72.697,52.668,175.943,143.833,175.943,143.833"
		/>
	<path fill="none" stroke="#ED1C24" stroke-miterlimit="10" d="M1550.998,2966.732c36.528,10.88,157.487-113.335,157.487-113.335"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1371.143" y1="3335.357" x2="1266.079" y2="3292.047"/>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2,2" x1="2193.288" y1="100.078" x2="2193.288" y2="2272.586"/>
	<rect x="2101.554" y="100.078" fill="none" stroke="#000000" stroke-miterlimit="10" width="181.848" height="2172.508"/>
	<rect x="2077.054" y="78.285" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="232.41" height="2248.844"/>
	<g>
		<g>
			
				<line fill="none" stroke="#231F20" stroke-width="2.8346" stroke-miterlimit="10" x1="2151.753" y1="785.146" x2="2151.753" y2="1755.563"/>
			<g>
				<path fill="#231F20" d="M2151.753,768.038c-2.987,8.049-8.083,18.037-13.481,24.229l13.481-4.877l13.479,4.877
					C2159.833,786.075,2154.737,776.087,2151.753,768.038z"/>
			</g>
			<g>
				<path fill="#231F20" d="M2151.753,1772.671c-2.987-8.051-8.083-18.039-13.481-24.229l13.481,4.875l13.479-4.875
					C2159.833,1754.632,2154.737,1764.62,2151.753,1772.671z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 2142.917 1699.6372)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">Front placket </tspan><tspan x="158.507" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465" letter-spacing="11">	</tspan><tspan x="176.399" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465" letter-spacing="169">	</tspan><tspan x="352.799" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">Cut 2</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">Shirt dress</tspan></text>
	<text transform="matrix(0 -1 1 0 2182.3945 1010.96)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(0 -1 1.0736 0 2142.917 1204.1367)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
</g>
<g>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1188.918" y1="1722.287" x2="1694.146" y2="1722.287"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1670.298" y1="1382.607" x2="1670.298" y2="2253.182"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1668.988" y1="642.644" x2="1627.553" y2="1111.279"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1627.553" y1="1110.506" x2="1670.298" y2="1397.279"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1424.42" y1="95.824" x2="1668.988" y2="642.644"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1505.023" y1="276.039" x2="1343.156" y2="322.868"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1279.387" y1="193.356" x2="1343.922" y2="323.423"/>
	<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1343.922,323.423c108.858,263.249-109.767,269.775-109.767,269.775"
		/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1234.155" y1="593.198" x2="1327.05" y2="1110.506"/>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1303.816" y1="1110.506" x2="1655.695" y2="1110.506"/>
	<text transform="matrix(0.9913 0 0 1 1260.6665 1698.6533)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(0.9913 0 0 1 1279.3867 642.9658)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
	<text transform="matrix(0.9913 0 0 1 1365.5078 1095.9053)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1279.387" y1="193.356" x2="1425.297" y2="95.824"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1136.327" y1="2253.182" x2="1694.146" y2="2253.182"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1228.558" y1="1586.779" x2="1162.188" y2="2253.182"/>
	<g>
		<g>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,505.514c-5.371,0-9.716-4.383-9.716-9.801
				s4.345-9.801,9.716-9.801c5.366,0,9.715,4.383,9.715,9.801S1502.985,505.514,1497.619,505.514z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1505.715,495.713c0-4.52-3.624-8.164-8.096-8.164
				c-4.473,0-8.098,3.645-8.098,8.164c0,4.516,3.625,8.164,8.098,8.164C1502.091,503.877,1505.715,500.229,1505.715,495.713z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,502.248c-3.582,0-6.475-2.926-6.475-6.535
				s2.893-6.535,6.475-6.535c3.581,0,6.474,2.926,6.474,6.535S1501.2,502.248,1497.619,502.248z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1502.475,495.713c0-2.707-2.172-4.902-4.855-4.902
				c-2.688,0-4.859,2.195-4.859,4.902s2.172,4.898,4.859,4.898C1500.303,500.611,1502.475,498.42,1502.475,495.713z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,498.975c-1.789,0-3.241-1.453-3.241-3.262
				s1.452-3.266,3.241-3.266s3.236,1.457,3.236,3.266S1499.408,498.975,1497.619,498.975z"/>
			<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1499.233,495.713c0-0.898-0.72-1.637-1.614-1.637
				c-0.898,0-1.619,0.738-1.619,1.637s0.721,1.637,1.619,1.637C1498.514,497.35,1499.233,496.611,1499.233,495.713z"/>
		</g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1497.619" y2="505.514"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1506.857" y2="498.736"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1503.33" y2="487.787"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1491.907" y2="487.787"/>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1488.376" y2="498.736"/>
		</g>
	</g>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1327.41,1111.279c-49.986,117.801-98.853,475.5-98.853,475.5"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1694.146" y1="1382.607" x2="1694.146" y2="2303.33"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1685.78" y1="642.966" x2="1651.072" y2="1106.889"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1651.072" y1="1110.506" x2="1694.146" y2="1382.607"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1431.78" y1="66.339" x2="1685.78" y2="642.966"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1254.232" y1="186.535" x2="1327.275" y2="329.006"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1327.275,329.006c109.017,241.918-113.495,250.666-113.495,250.666"
		/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1213.78" y1="579.672" x2="1303.816" y2="1110.506"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1254.232" y1="186.535" x2="1431.78" y2="66.339"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1131.281" y1="2303.33" x2="1694.146" y2="2303.33"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1200.585" y1="1604.643" x2="1131.281" y2="2303.33"/>
	<path fill="none" stroke="#EE2E2C" stroke-miterlimit="10" d="M1303.816,1106.111c-52.196,123.504-103.231,498.531-103.231,498.531
		"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="1484.266" y1="1033.568" x2="1484.266" y2="2139.996"/>
			<g>
				<path d="M1470.002,1051.746c0,0.469,0.232,0.927,0.656,1.198c0.658,0.421,1.537,0.226,1.957-0.435l11.65-18.294l11.65,18.294
					c0.42,0.66,1.299,0.855,1.957,0.435c0.659-0.421,0.85-1.303,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
					s-0.936,0.248-1.196,0.656l-12.846,20.17C1470.074,1051.222,1470.002,1051.486,1470.002,1051.746
					C1470.002,1052.215,1470.002,1051.486,1470.002,1051.746z"/>
			</g>
			<g>
				<path d="M1470.002,2121.818c0-0.469,0.232-0.927,0.656-1.198c0.658-0.421,1.537-0.226,1.957,0.435l11.65,18.294l11.65-18.294
					c0.42-0.66,1.299-0.855,1.957-0.435c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.846-20.17C1470.074,2122.343,1470.002,2122.078,1470.002,2121.818
					C1470.002,2121.35,1470.002,2122.078,1470.002,2121.818z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1.0088 1 0 1509.7793 1302.7041)" fill="#9A9899" font-family="'Calibri'" font-size="23.7906">BCSizing ©</text>
	<text transform="matrix(0 -1.0088 1.0736 0 1466.0254 2107.541)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.0991">SIDE FRONT</tspan><tspan x="133.425" y="0" font-family="'Calibri'" font-size="28.0991"> </tspan></text>
	<text transform="matrix(0 -1.0088 1.0736 0 1470.6484 1495.8809)" font-family="'Calibri'" font-size="28.0991">MRUK12B - MRUS8B - MREU38B</text>
	<text transform="matrix(0 -1.0088 1.0736 0 1509.7812 2107.541)" font-family="'Calibri'" font-size="28.0991">SHIRT DRESS</text>
	<text transform="matrix(4.489659e-11 -1.0088 1 4.529184e-11 1470.6484 1689.7266)" font-family="'Calibri'" font-size="28.0991">CUT 2</text>
	<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1244.471" y1="649.278" x2="1668.988" y2="642.644"/>
</g>
<g>
	<text transform="matrix(0 -1 1.0736 0 525.7939 3403.4512)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="665.553" y1="3963.682" x2="665.553" y2="2303.125"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="172.661" y1="2688.346" x2="1133.319" y2="2688.346"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="270.888" y1="3255.101" x2="1035.797" y2="3255.101"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="185.525" y1="2759.768" x2="1121.325" y2="2759.768"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="653.175" y1="2689.069" x2="653.175" y2="3963.682"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="2.8347" stroke-miterlimit="10" x1="539.652" y1="2824.23" x2="539.652" y2="3832.775"/>
			<g>
				<path d="M525.39,2842.405c0,0.468,0.232,0.927,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.648-18.291l11.648,18.291
					c0.421,0.66,1.298,0.855,1.958,0.435c0.659-0.421,0.85-1.302,0.435-1.957l-12.845-20.167c-0.26-0.409-0.711-0.656-1.196-0.656
					s-0.936,0.247-1.196,0.656l-12.845,20.167C525.462,2841.881,525.39,2842.146,525.39,2842.405
					C525.39,2842.873,525.39,2842.146,525.39,2842.405z"/>
			</g>
			<g>
				<path d="M525.39,3814.6c0-0.468,0.232-0.926,0.656-1.197c0.659-0.421,1.537-0.226,1.958,0.435l11.648,18.291l11.648-18.291
					c0.421-0.66,1.298-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.845,20.168c-0.26,0.408-0.711,0.656-1.196,0.656
					s-0.936-0.248-1.196-0.656l-12.845-20.168C525.462,3815.124,525.39,3814.86,525.39,3814.6
					C525.39,3814.132,525.39,3814.86,525.39,3814.6z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 523.3726 3259.8906)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUSA8B - MREU38B</text>
	<text transform="matrix(0 -1 1 0 568.252 2997.1992)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 525.7939 3783.8047)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
	<text transform="matrix(0 -1 1 0 566.3931 3784.5156)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="172.661" y1="2687.652" x2="270.888" y2="3255.101"/>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1132.624" y1="2689.004" x2="1034.687" y2="3256.212"/>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="382.806" y1="3964.974" x2="921.322" y2="3964.974"/>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="382.807" y1="3964.974" x2="269.777" y2="3256.212"/>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="921.322" y1="3964.974" x2="1034.687" y2="3256.212"/>
		<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M664.442,2320.509
			c-205.771,0.237-291.784,302.799-492.835,368.083"/>
		<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M664.442,2320.509
			c169.653,2.516,271.505,330.511,468.137,368.672"/>
	</g>
	<text transform="matrix(1 0 0 1 792.147 3239.0723)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
	<text transform="matrix(1 0 0 1 792.147 2743.0117)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="502.647" y1="3567.729" x2="502.647" y2="3961.982"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="473.245" y1="3567.729" x2="546.745" y2="3567.729"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="566.347" y1="3837.479" x2="566.347" y2="3961.982"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="600.647" y1="3837.479" x2="600.647" y2="3961.982"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="631.468" y1="3837.479" x2="631.468" y2="3961.982"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="573.694" y1="3848.963" x2="592.476" y2="3871.529"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="573.694" y1="3877.248" x2="592.476" y2="3899.732"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="573.694" y1="3908.279" x2="592.476" y2="3927.061"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="608.808" y1="3927.061" x2="626.565" y2="3908.279"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="608.808" y1="3899.732" x2="626.565" y2="3882.146"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="608.808" y1="3868.26" x2="626.565" y2="3853.564"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="152.06" y1="2680.513" x2="254.683" y2="3255.717"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="1154.976" y1="2681.864" x2="1052.656" y2="3256.828"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="371.607" y1="3980.59" x2="934.22" y2="3980.59"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="371.607" y1="3980.59" x2="253.522" y2="3256.828"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="934.22" y1="3980.59" x2="1052.656" y2="3256.828"/>
	<path fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" d="M665.846,2303.125
		c-214.979,0.243-304.84,310.517-514.887,377.465"/>
	<path fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" d="M663.833,2303.122
		c177.991,2.575,284.847,338.396,491.143,377.468"/>
</g>
</svg>
`,
    },
    {
      _id: '132r566123',
      name: 'SHIRT DRESS PATTERN EXTRACTION',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2551.18px" height="5102.359px" viewBox="0 0 2551.18 5102.359" enable-background="new 0 0 2551.18 5102.359"
	 xml:space="preserve">
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1279.387" y1="2448.025" x2="1573.348" y2="2448.025"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1573.348" y1="2448.025" x2="1564.754" y2="2738.757"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1277.281" y1="2448.025" x2="1277.281" y2="2728.956"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1277.281" y1="2728.956" x2="1421.02" y2="2797.558"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1421.02" y1="2797.558" x2="1564.754" y2="2738.757"/>
<text transform="matrix(1 0 0 1 1373.7637 2509.7466)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">FRONT POCKET</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="1455.809" y1="2628.09" x2="1455.809" y2="2725.481"/>
		<g>
			<path fill="#231F20" d="M1455.809,2610.982c-2.986,8.051-8.082,18.038-13.48,24.229l13.48-4.875l13.479,4.875
				C1463.889,2629.021,1458.793,2619.033,1455.809,2610.982z"/>
		</g>
		<g>
			<path fill="#231F20" d="M1455.809,2742.589c-2.986-8.049-8.082-18.037-13.48-24.229l13.48,4.877l13.479-4.877
				C1463.889,2724.552,1458.793,2734.54,1455.809,2742.589z"/>
		</g>
	</g>
</g>
<rect x="369.422" y="4049.215" fill="none" stroke="#000000" stroke-miterlimit="10" width="565.555" height="161.758"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="883.527" y1="4052.787" x2="883.527" y2="4207.4"/>
		<g>
			<circle cx="883.527" cy="4052.975" r="3.76"/>
		</g>
		<g>
			<circle cx="883.527" cy="4207.213" r="3.76"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="738.93" y1="4070.328" x2="738.93" y2="4189.863"/>
		<g>
			<path fill="#231F20" d="M738.93,4064.293c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
				C741.78,4070.656,739.982,4067.133,738.93,4064.293z"/>
		</g>
		<g>
			<path fill="#231F20" d="M738.93,4195.898c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
				C741.78,4189.535,739.982,4193.059,738.93,4195.898z"/>
		</g>
	</g>
</g>
<text transform="matrix(1 0 0 1 571.0566 4103.5078)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUFF</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3938.054" x2="2005.985" y2="3938.054"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3938.054" x2="2438.849" y2="3910.284"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2391.666" y1="3913.382" x2="2390.477" y2="3901.381"/>
		<g>
			<circle cx="2390.495" cy="3901.568" r="3.76"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3847.558" x2="2005.985" y2="3938.054"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3847.405" x2="2005.985" y2="3847.405"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2005.985" y1="3847.405" x2="2358.813" y2="3822.081"/>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2358.813,3822.081c75.949-2.449,80.035,88.203,80.035,88.203"/>
<text transform="matrix(1 0 0 1 1762.8877 3875.9619)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2379.67" y1="3822.032" x2="2381.678" y2="3835.704"/>
		<g>
			<circle cx="2381.651" cy="3835.518" r="3.76"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.773" y1="3938.206" x2="1075.91" y2="3910.437"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1119.104" y1="3913.468" x2="1123.434" y2="3901.342"/>
		<g>
			<circle cx="1123.37" cy="3901.519" r="3.76"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.773" y1="3847.558" x2="1155.945" y2="3822.233"/>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1155.945,3822.233c-75.949-2.449-80.035,88.203-80.035,88.203"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1135.089" y1="3822.233" x2="1133.082" y2="3835.857"/>
		<g>
			<circle cx="1133.109" cy="3835.671" r="3.76"/>
		</g>
	</g>
</g>
<g>
	<g>
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1836.492" y1="3863.035" x2="1836.492" y2="3925.965"/>
		<g>
			<path fill="#231F20" d="M1836.492,3857c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
				C1839.343,3863.363,1837.545,3859.84,1836.492,3857z"/>
		</g>
		<g>
			<path fill="#231F20" d="M1836.492,3932c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
				C1839.343,3925.637,1837.545,3929.16,1836.492,3932z"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1758.427" y1="3847.558" x2="1758.427" y2="3938.206"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1508.548" y1="3847.405" x2="1508.548" y2="3938.206"/>
<text transform="matrix(1 0 0 1 1414.8008 3888.6289)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR STAND</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2    SHIRT DRESS</tspan></text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3557.26" x2="1779.562" y2="3694.367"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3557.26" x2="2445.965" y2="3520.51"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2445.965" y1="3520.51" x2="2410.852" y2="3715.697"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2410.852" y1="3715.697" x2="2142.164" y2="3709.162"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2142.164" y1="3709.162" x2="1779.562" y2="3694.033"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2029.773" y1="3690.085" x2="2029.424" y2="3702.219"/>
		<g>
			<circle cx="2029.768" cy="3690.272" r="3.76"/>
		</g>
	</g>
</g>
<text transform="matrix(1 0 0 1 1784.332 3617.9746)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
<g>
	<g>
		<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1932.678" y1="3566.048" x2="1932.678" y2="3685.579"/>
		<g>
			<path fill="#231F20" d="M1932.678,3560.013c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
				C1935.528,3566.376,1933.73,3562.853,1932.678,3560.013z"/>
		</g>
		<g>
			<path fill="#231F20" d="M1932.678,3691.614c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
				C1935.528,3685.251,1933.73,3688.774,1932.678,3691.614z"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1779.562" y1="3557.26" x2="1111.387" y2="3521.721"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1111.387" y1="3521.721" x2="1146.5" y2="3716.908"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1146.5" y1="3716.908" x2="1415.188" y2="3710.373"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1415.188" y1="3710.373" x2="1779.562" y2="3694.033"/>
<g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1527.749" y1="3695.361" x2="1526.784" y2="3705.343"/>
		<g>
			<circle cx="1527.731" cy="3695.549" r="3.76"/>
		</g>
	</g>
</g>
<text transform="matrix(1 0 0 1 1548.6885 3592.8857)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR FALL</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1721.495" y1="356.711" x2="2017.74" y2="356.711"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.709" y1="754.172" x2="2017.74" y2="754.172"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.94" y1="1834.749" x2="2017.74" y2="1834.749"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.94" y1="1505" x2="1778.94" y2="2365.644"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1778.709" y1="754.392" x2="1822.062" y2="1223.745"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1822.062" y1="1222.968" x2="1778.94" y2="1509.741"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1691.713" y1="159.151" x2="1778.709" y2="754.392"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1822.062" y1="1222.968" x2="2017.74" y2="1222.968"/>
<text transform="matrix(1 0 0 1 1955.0996 1804.1221)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<text transform="matrix(1 0 0 1 1984.3633 745.5059)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
<text transform="matrix(1 0 0 1 1938.3613 1202.707)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
<text transform="matrix(1 0 0 1 1984.3633 350.9512)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XF</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2017.74" y1="190.136" x2="2017.74" y2="2365.644"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1692.113" y1="161.881" x2="1884.088" y2="93.332"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1778.94" y1="2365.644" x2="2017.74" y2="2365.644"/>
<text transform="matrix(1 0 0 1 1992.8262 946.6553)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
<g>
	<g>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,617.976c-5.418,0-9.801-4.383-9.801-9.801
			c0-5.414,4.383-9.797,9.801-9.797s9.801,4.383,9.801,9.797C1910.604,613.593,1906.222,617.976,1900.804,617.976z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1908.972,608.175c0-4.516-3.656-8.164-8.168-8.164
			s-8.168,3.648-8.168,8.164c0,4.52,3.656,8.164,8.168,8.164S1908.972,612.694,1908.972,608.175z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,614.714c-3.613,0-6.531-2.93-6.531-6.539
			c0-3.605,2.918-6.535,6.531-6.535s6.531,2.93,6.531,6.535C1907.335,611.784,1904.417,614.714,1900.804,614.714z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1905.706,608.175c0-2.707-2.191-4.898-4.902-4.898
			c-2.707,0-4.898,2.191-4.898,4.898c0,2.711,2.191,4.902,4.898,4.902C1903.515,613.077,1905.706,610.886,1905.706,608.175z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1900.804,611.44c-1.805,0-3.266-1.457-3.266-3.266
			s1.461-3.262,3.266-3.262s3.27,1.453,3.27,3.262S1902.608,611.44,1900.804,611.44z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1902.437,608.175c0-0.898-0.727-1.637-1.633-1.637
			c-0.902,0-1.633,0.738-1.633,1.637c0,0.902,0.73,1.637,1.633,1.637C1901.71,609.812,1902.437,609.077,1902.437,608.175z"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1900.804" y2="617.976"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1910.124" y2="611.202"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1906.565" y2="600.253"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1895.042" y2="600.253"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1900.804" y1="608.175" x2="1891.483" y2="611.202"/>
	</g>
</g>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1882.878,91.145c45.818,96.354,134.862,98.991,134.862,98.991"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="1906.935" y1="1156.02" x2="1906.935" y2="2262.447"/>
		<g>
			<path d="M1892.671,1174.197c0,0.469,0.232,0.927,0.656,1.197c0.659,0.422,1.536,0.227,1.957-0.434l11.65-18.294l11.65,18.294
				c0.421,0.66,1.298,0.855,1.957,0.434c0.659-0.42,0.85-1.302,0.435-1.957l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.846,20.17C1892.743,1173.673,1892.671,1173.938,1892.671,1174.197
				C1892.671,1174.666,1892.671,1173.938,1892.671,1174.197z"/>
		</g>
		<g>
			<path d="M1892.671,2244.27c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.536-0.226,1.957,0.435l11.65,18.294l11.65-18.294
				c0.421-0.66,1.298-0.855,1.957-0.435s0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.846-20.17C1892.743,2244.794,1892.671,2244.529,1892.671,2244.27
				C1892.671,2243.801,1892.671,2244.529,1892.671,2244.27z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 1932.6768 1424.4648)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<text transform="matrix(0 -1 1.0736 0 1888.5361 2229.3018)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">CENTRE FRONT</tspan><tspan x="172.94" y="0" font-family="'Calibri'" font-size="28.3465"> </tspan></text>
<text transform="matrix(0 -1 1.0736 0 1893.1992 1617.6416)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(0 -1 1.0736 0 1932.6777 2229.3018)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
<text transform="matrix(0 -1 1 0 1893.2002 1792.6938)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="208.352" y1="121.512" x2="496.735" y2="121.512"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="208.352" y1="121.512" x2="208.352" y2="2174.215"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="462.151" y1="1430.477" x2="462.151" y2="2174.215"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="462.151" y1="591.821" x2="422.893" y2="1032.313"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="422.893" y1="1032.313" x2="462.151" y2="1430.477"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="208.393" y1="1641.447" x2="462.198" y2="1644.854"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="208.352" y1="1031.54" x2="422.893" y2="1031.54"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="208.352" y1="591.821" x2="462.151" y2="591.821"/>
<text transform="matrix(0.8463 0 0 1 222.3823 576.8086)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
<text transform="matrix(0.8463 0 0 1 222.3823 1018.6387)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
<text transform="matrix(0.8463 0 0 1 222.3823 1628.6821)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<text transform="matrix(0.8463 0 0 1 222.3823 731.9785)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="208.352" y1="2174.215" x2="462.151" y2="2174.215"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M496.735,121.512c-18.619,104.129-34.584,470.309-34.584,470.309"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="354.565" y1="973.073" x2="354.565" y2="2028.713"/>
		<g>
			<path d="M340.301,991.25c0,0.467,0.232,0.926,0.656,1.197c0.659,0.42,1.537,0.225,1.958-0.436l11.65-18.293l11.65,18.293
				c0.421,0.66,1.298,0.855,1.958,0.436c0.659-0.421,0.85-1.303,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.846,20.17C340.374,990.725,340.301,990.99,340.301,991.25
				C340.301,991.717,340.301,990.99,340.301,991.25z"/>
		</g>
		<g>
			<path d="M340.301,2010.536c0-0.469,0.232-0.927,0.656-1.198c0.659-0.421,1.537-0.226,1.958,0.435l11.65,18.294l11.65-18.294
				c0.421-0.66,1.298-0.855,1.958-0.435s0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.846-20.17C340.374,2011.06,340.301,2010.795,340.301,2010.536
				C340.301,2010.067,340.301,2010.795,340.301,2010.536z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1.1816 1 0 376.3501 1159.3013)" fill="#9A9899" font-family="'Calibri'" font-size="20.3118">BCSizing ©</text>
<text transform="matrix(0 -1.1816 1.0736 0 338.9917 1997.7368)"><tspan x="0" y="0" font-family="'Calibri'" font-size="23.9904">CENTRE B</tspan><tspan x="93.168" y="0" font-family="'Calibri'" font-size="23.9904">A</tspan><tspan x="106.881" y="0" font-family="'Calibri'" font-size="23.9904">CK </tspan></text>
<text transform="matrix(0 -1.1816 1.0736 0 342.9395 1386.0767)" font-family="'Calibri'" font-size="23.9904">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(0 -1.1816 1.0736 0 376.3496 1997.7368)" font-family="'Calibri'" font-size="23.9904">SHIRT DRESS</text>
<text transform="matrix(0 -1.1816 1 0 342.9399 1594.8423)" font-family="'Calibri'" font-size="23.9904">CUT 2</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="576.199" y1="127.32" x2="774.047" y2="127.32"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="542.113" y1="1436.281" x2="542.113" y2="2180.02"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="916.961" y1="461.32" x2="887.238" y2="1038.117"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M775.559,127.32c0,0-81.637,350.57,141.402,334"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="542.766" y1="597.625" x2="589.152" y2="1038.117"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="589.152" y1="1038.117" x2="542.766" y2="1436.281"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="541" y1="1649.125" x2="995" y2="1649.125"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="589.152" y1="1037.344" x2="887.238" y2="1037.344"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="542.113" y1="597.625" x2="909.661" y2="597.625"/>
<text transform="matrix(1 0 0 1 862.6138 584.3125)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
<text transform="matrix(1 0 0 1 823.9561 1024.8047)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
<text transform="matrix(1 0 0 1 935.1914 1623.459)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="542.113" y1="2180.02" x2="1045.793" y2="2180.02"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="983.145" y1="1513.621" x2="1045.793" y2="2180.738"/>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M887.238,1038.117c60.836,165.164,95.906,475.504,95.906,475.504"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M582.977,127.32c-22,104.125-40.863,470.305-40.863,470.305"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="739.9" y1="1005.865" x2="739.9" y2="2061.507"/>
		<g>
			<path d="M725.636,1024.043c0,0.469,0.232,0.927,0.656,1.197c0.659,0.422,1.537,0.227,1.958-0.434l11.65-18.294l11.65,18.294
				c0.421,0.66,1.299,0.855,1.958,0.434c0.659-0.42,0.85-1.302,0.435-1.957l-12.846-20.17c-0.26-0.408-0.711-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.846,20.17C725.708,1023.519,725.636,1023.783,725.636,1024.043
				C725.636,1024.512,725.636,1023.783,725.636,1024.043z"/>
		</g>
		<g>
			<path d="M725.636,2043.329c0-0.467,0.232-0.926,0.656-1.197c0.659-0.42,1.537-0.226,1.958,0.436l11.65,18.293l11.65-18.293
				c0.421-0.661,1.299-0.855,1.958-0.436c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.26,0.408-0.711,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.846-20.17C725.708,2043.854,725.636,2043.59,725.636,2043.329
				C725.636,2042.862,725.636,2043.59,725.636,2043.329z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 765.6411 1172.3672)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<text transform="matrix(0 -1 1.0736 0 721.498 2028.3604)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">SIDE B</tspan><tspan x="71.744" y="0" font-family="'Calibri'" font-size="28.3465">A</tspan><tspan x="87.947" y="0" font-family="'Calibri'" font-size="28.3465">CK </tspan></text>
<text transform="matrix(0 -1 1.0736 0 726.1636 1416.7002)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(0 -1 1.0736 0 765.6401 2028.3604)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
<text transform="matrix(0 -1 1 0 726.1631 1623.4595)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<rect x="2248.764" y="2925.325" fill="none" stroke="#000000" stroke-miterlimit="10" width="115.152" height="481.234"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2248.764" y1="3002.31" x2="2363.916" y2="3002.31"/>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="2304.635" y1="3040.241" x2="2304.635" y2="3374.25"/>
		<g>
			<path fill="#231F20" d="M2304.635,3023.134c-2.986,8.05-8.082,18.037-13.48,24.229l13.48-4.876l13.479,4.876
				C2312.715,3041.171,2307.619,3031.184,2304.635,3023.134z"/>
		</g>
		<g>
			<path fill="#231F20" d="M2304.635,3391.357c-2.986-8.05-8.082-18.037-13.48-24.229l13.48,4.876l13.479-4.876
				C2312.715,3373.32,2307.619,3383.308,2304.635,3391.357z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 2293.7637 3340.9824)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUFF PLACKET</text>
<text transform="matrix(0 -1 1.0736 0 2297.4658 3127.3926)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<rect x="2104.508" y="3022.436" fill="none" stroke="#000000" stroke-miterlimit="10" width="68.598" height="404.25"/>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="2151.078" y1="3069.252" x2="2151.078" y2="3395.467"/>
		<g>
			<path fill="#231F20" d="M2151.078,3052.145c-2.986,8.05-8.083,18.037-13.48,24.229l13.48-4.876l13.479,4.876
				C2159.158,3070.182,2154.062,3060.194,2151.078,3052.145z"/>
		</g>
		<g>
			<path fill="#231F20" d="M2151.078,3412.574c-2.986-8.05-8.083-18.038-13.48-24.229l13.48,4.876l13.479-4.876
				C2159.158,3394.536,2154.062,3404.524,2151.078,3412.574z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1.0736 0 2136.7344 3100.1348)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<text transform="matrix(0 -1 1 0 2138.8066 3383.7246)" fill="#010101" font-family="'Calibri'" font-size="28.3465">UNDER CUFF PLACKET</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1542.665" y1="3449.553" x2="2304.637" y2="2687.582"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M2167.205,2524.934c26.096,40.42,137.432,162.648,137.432,162.648"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1846.656" y1="2686.276" x2="2166.57" y2="2524.3"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1842.728,2687.013c19.294,47.694-118.743,181.131-118.743,181.131"/>
<text transform="matrix(0.7071 -0.7071 0.7071 0.7071 1932.1934 3042.1709)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XB</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2136.734" y1="2446.755" x2="1796.865" y2="2615.73"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2166.57" y1="2524.3" x2="2136.734" y2="2446.755"/>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1842.17,2687.57c-13.992-36.603-45.305-71.84-45.305-71.84"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1723.047" y1="2869.045" x2="1923.11" y2="3069.108"/>
<text transform="matrix(0.7071 -0.7071 0.7071 0.7071 1810.1465 2938.7266)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C </tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="1560.297" y1="3100.178" x2="1767.071" y2="3100.186"/>
		<g>
			<path fill="#231F20" d="M1543.189,3100.177c8.049,2.987,18.037,8.084,24.228,13.481l-4.876-13.48l4.877-13.479
				C1561.227,3092.098,1551.239,3097.193,1543.189,3100.177z"/>
		</g>
		<g>
			<path fill="#231F20" d="M1784.179,3100.186c-8.05,2.986-18.038,8.083-24.229,13.48l4.877-13.48l-4.876-13.479
				C1766.142,3092.105,1776.129,3097.201,1784.179,3100.186z"/>
		</g>
	</g>
</g>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="1663.68" y1="2996.794" x2="1663.688" y2="3203.568"/>
		<g>
			<path fill="#231F20" d="M1663.68,2979.687c-2.986,8.051-8.082,18.039-13.48,24.229l13.48-4.876l13.479,4.875
				C1671.761,2997.725,1666.664,2987.737,1663.68,2979.687z"/>
		</g>
		<g>
			<path fill="#231F20" d="M1663.688,3220.676c-2.987-8.051-8.084-18.038-13.482-24.229l13.482,4.875l13.478-4.876
				C1671.768,3202.637,1666.672,3212.625,1663.688,3220.676z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 1547.666 3264.8428)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK YOKE</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</tspan></text>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1379.999,3312.104c40.42,26.096,162.648,137.432,162.648,137.432"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1541.341" y1="2991.556" x2="1379.365" y2="3311.471"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1542.078,2987.627c47.694,19.294,181.129-118.743,181.129-118.743"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1301.82" y1="3281.633" x2="1470.795" y2="2941.765"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1379.365" y1="3311.471" x2="1301.82" y2="3281.633"/>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1542.636,2987.069c-36.603-13.992-71.841-45.305-71.841-45.305"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2,2" x1="2193.288" y1="100.078" x2="2193.288" y2="2272.586"/>
<rect x="2101.554" y="100.078" fill="none" stroke="#000000" stroke-miterlimit="10" width="181.848" height="2172.508"/>
<g>
	<g>
		
			<line fill="none" stroke="#231F20" stroke-width="2.8347" stroke-miterlimit="10" x1="2151.753" y1="785.146" x2="2151.753" y2="1755.563"/>
		<g>
			<path fill="#231F20" d="M2151.753,768.038c-2.987,8.049-8.083,18.037-13.481,24.229l13.481-4.877l13.479,4.877
				C2159.833,786.075,2154.737,776.087,2151.753,768.038z"/>
		</g>
		<g>
			<path fill="#231F20" d="M2151.753,1772.671c-2.987-8.051-8.083-18.039-13.481-24.229l13.481,4.875l13.479-4.875
				C2159.833,1754.632,2154.737,1764.62,2151.753,1772.671z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 2142.917 1699.6372)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">Front placket </tspan><tspan x="158.507" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465" letter-spacing="11">	</tspan><tspan x="176.399" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465" letter-spacing="169">	</tspan><tspan x="352.799" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">Cut 2</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">Shirt dress</tspan></text>
<text transform="matrix(0 -1 1 0 2182.3945 1010.96)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<text transform="matrix(0 -1 1.0736 0 2142.917 1204.1367)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUS8B - MREU38B</text>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1214.498" y1="1722.287" x2="1670.298" y2="1722.287"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1670.298" y1="1397.279" x2="1670.298" y2="2253.182"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1668.988" y1="642.644" x2="1627.553" y2="1111.279"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1627.553" y1="1110.506" x2="1670.298" y2="1397.279"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1424.42" y1="95.824" x2="1668.988" y2="642.644"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1505.023" y1="276.039" x2="1343.156" y2="322.868"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1279.387" y1="193.356" x2="1343.922" y2="323.423"/>
<path fill="none" stroke="#231F20" stroke-miterlimit="10" d="M1343.922,323.423c108.858,263.249-109.767,269.775-109.767,269.775"
	/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1234.155" y1="593.198" x2="1327.05" y2="1110.506"/>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1327.41" y1="1110.506" x2="1627.553" y2="1110.506"/>
<text transform="matrix(0.9913 0 0 1 1260.6665 1698.6533)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<text transform="matrix(0.9913 0 0 1 1279.3867 642.9658)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
<text transform="matrix(0.9913 0 0 1 1365.5078 1095.9053)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1279.387" y1="193.356" x2="1425.297" y2="95.824"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1162.188" y1="2253.182" x2="1670.298" y2="2253.182"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1228.558" y1="1586.779" x2="1162.188" y2="2253.182"/>
<g>
	<g>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,505.514c-5.371,0-9.716-4.383-9.716-9.801
			s4.345-9.801,9.716-9.801c5.366,0,9.715,4.383,9.715,9.801S1502.985,505.514,1497.619,505.514z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1505.715,495.713c0-4.52-3.624-8.164-8.096-8.164
			c-4.473,0-8.098,3.645-8.098,8.164c0,4.516,3.625,8.164,8.098,8.164C1502.091,503.877,1505.715,500.229,1505.715,495.713z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,502.248c-3.582,0-6.475-2.926-6.475-6.535
			s2.893-6.535,6.475-6.535c3.581,0,6.474,2.926,6.474,6.535S1501.2,502.248,1497.619,502.248z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1502.475,495.713c0-2.707-2.172-4.902-4.855-4.902
			c-2.688,0-4.859,2.195-4.859,4.902s2.172,4.898,4.859,4.898C1500.303,500.611,1502.475,498.42,1502.475,495.713z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1497.619,498.975c-1.789,0-3.241-1.453-3.241-3.262
			s1.452-3.266,3.241-3.266s3.236,1.457,3.236,3.266S1499.408,498.975,1497.619,498.975z"/>
		<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1499.233,495.713c0-0.898-0.72-1.637-1.614-1.637
			c-0.898,0-1.619,0.738-1.619,1.637s0.721,1.637,1.619,1.637C1498.514,497.35,1499.233,496.611,1499.233,495.713z"/>
	</g>
	<g>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1497.619" y2="505.514"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1506.857" y2="498.736"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1503.33" y2="487.787"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1491.907" y2="487.787"/>
		<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1497.619" y1="495.713" x2="1488.376" y2="498.736"/>
	</g>
</g>
<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1327.41,1111.279c-49.986,117.801-98.853,475.5-98.853,475.5"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="1484.266" y1="1033.568" x2="1484.266" y2="2139.996"/>
		<g>
			<path d="M1470.002,1051.746c0,0.469,0.232,0.927,0.656,1.198c0.658,0.421,1.537,0.226,1.957-0.435l11.65-18.294l11.65,18.294
				c0.42,0.66,1.299,0.855,1.957,0.435c0.659-0.421,0.85-1.303,0.435-1.958l-12.846-20.17c-0.261-0.408-0.712-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.846,20.17C1470.074,1051.222,1470.002,1051.486,1470.002,1051.746
				C1470.002,1052.215,1470.002,1051.486,1470.002,1051.746z"/>
		</g>
		<g>
			<path d="M1470.002,2121.818c0-0.469,0.232-0.927,0.656-1.198c0.658-0.421,1.537-0.226,1.957,0.435l11.65,18.294l11.65-18.294
				c0.42-0.66,1.299-0.855,1.957-0.435c0.659,0.421,0.85,1.303,0.435,1.958l-12.846,20.17c-0.261,0.408-0.712,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.846-20.17C1470.074,2122.343,1470.002,2122.078,1470.002,2121.818
				C1470.002,2121.35,1470.002,2122.078,1470.002,2121.818z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1.0088 1 0 1509.7188 1302.7041)" fill="#9A9899" font-family="'Calibri'" font-size="23.7906">BCSizing ©</text>
<text transform="matrix(0 -1.0088 1.0735 0 1465.9648 2107.541)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.0991">SIDE FRONT</tspan><tspan x="133.425" y="0" font-family="'Calibri'" font-size="28.0991"> </tspan></text>
<text transform="matrix(0 -1.0088 1.0735 0 1470.5879 1495.8809)" font-family="'Calibri'" font-size="28.0991">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(0 -1.0088 1.0735 0 1509.7207 2107.541)" font-family="'Calibri'" font-size="28.0991">SHIRT DRESS</text>
<text transform="matrix(0 -1.0088 1 0 1470.5879 1689.7266)" font-family="'Calibri'" font-size="28.0991">CUT 2</text>
<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1244.471" y1="649.278" x2="1668.988" y2="642.644"/>
<text transform="matrix(0 -1 1.0736 0 525.7939 3403.4512)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="665.553" y1="3963.682" x2="665.553" y2="2320.509"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="172.661" y1="2688.346" x2="1133.319" y2="2688.346"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="270.888" y1="3255.101" x2="1035.797" y2="3255.101"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="185.525" y1="2759.768" x2="1121.325" y2="2759.768"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="653.175" y1="2689.069" x2="653.175" y2="3963.682"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.8347" stroke-miterlimit="10" x1="539.652" y1="2824.23" x2="539.652" y2="3832.775"/>
		<g>
			<path d="M525.39,2842.405c0,0.468,0.232,0.927,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.648-18.291l11.648,18.291
				c0.421,0.66,1.298,0.855,1.958,0.435c0.659-0.421,0.85-1.302,0.435-1.957l-12.845-20.167c-0.26-0.409-0.711-0.656-1.196-0.656
				s-0.936,0.247-1.196,0.656l-12.845,20.167C525.462,2841.881,525.39,2842.146,525.39,2842.405
				C525.39,2842.873,525.39,2842.146,525.39,2842.405z"/>
		</g>
		<g>
			<path d="M525.39,3814.6c0-0.468,0.232-0.926,0.656-1.197c0.659-0.421,1.537-0.226,1.958,0.435l11.648,18.291l11.648-18.291
				c0.421-0.66,1.298-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.845,20.168c-0.26,0.408-0.711,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.845-20.168C525.462,3815.124,525.39,3814.86,525.39,3814.6
				C525.39,3814.132,525.39,3814.86,525.39,3814.6z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 523.3726 3259.8906)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUSA8B - MREU38B</text>
<text transform="matrix(0 -1 1 0 568.252 2997.1992)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 525.7939 3783.8047)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
<text transform="matrix(0 -1 1 0 566.3931 3784.5156)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="172.661" y1="2687.652" x2="270.888" y2="3255.101"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1132.624" y1="2689.004" x2="1034.687" y2="3256.212"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="382.806" y1="3964.974" x2="921.322" y2="3964.974"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="382.807" y1="3964.974" x2="269.777" y2="3256.212"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="921.322" y1="3964.974" x2="1034.687" y2="3256.212"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M664.442,2320.509
		c-205.771,0.237-291.784,302.799-492.835,368.083"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M664.442,2320.509
		c169.653,2.516,271.505,330.511,468.137,368.672"/>
</g>
<text transform="matrix(1 0 0 1 792.147 3239.0723)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
<text transform="matrix(1 0 0 1 792.147 2743.0117)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="502.647" y1="3572.168" x2="502.647" y2="3961.982"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="486" y1="3572.168" x2="518" y2="3572.168"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="566.347" y1="3837.479" x2="566.347" y2="3961.982"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="600.647" y1="3837.479" x2="600.647" y2="3961.982"/>
<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="631.468" y1="3837.479" x2="631.468" y2="3961.982"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="569.255" y1="3853.402" x2="588.036" y2="3875.969"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="573.694" y1="3877.248" x2="592.476" y2="3899.732"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="573.694" y1="3908.279" x2="592.476" y2="3927.061"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="608.808" y1="3927.061" x2="626.565" y2="3908.279"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="608.808" y1="3899.732" x2="626.565" y2="3882.146"/>
<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="604.368" y1="3872.699" x2="622.126" y2="3858.004"/>
</svg>
`,
    },
    {
      _id: '12980983',
      name: 'SHIRT DRESS PLAN',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2551.18px" height="3401.58px" viewBox="0 0 2551.18 3401.58" enable-background="new 0 0 2551.18 3401.58"
	 xml:space="preserve">
<g>
	<text transform="matrix(1.0506 0 0 1 292.7417 735.835)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XB</text>
	<text transform="matrix(1.0506 0 0 1 293.145 1358.1553)" fill="#010101" font-family="'Calibri'" font-size="28.3465">UB</text>
	<text transform="matrix(1.0506 0 0 1 293.145 1611.6191)" fill="#010101" font-family="'Calibri'" font-size="24">WL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="284.683" y1="1621.014" x2="908.872" y2="1621.014"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="284.229" y1="742.357" x2="823.423" y2="742.357"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="568.072" y1="1152.083" x2="610.626" y2="1621.145"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="568.072" y1="1152.083" x2="525.519" y2="1621.102"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M841.701,530.168
		c-14.551,72.674-18.277,212.188-18.277,212.188"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M823.253,742.228
		c-11.076,358.365,65.25,349.567,100.867,352.882"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="908.873" y1="1621.211" x2="924.121" y2="1095.11"/>
	<text transform="matrix(1.0506 0 0 1 291.0498 2216.3809)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(1 0 0 1 293.8994 1146.1045)" font-family="'Calibri'" font-size="28.3465">BL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="284.675" y1="1152.125" x2="922.479" y2="1152.125"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M497.208,416.042
		c-13.904,46.434-212.231,42.387-212.231,42.387"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="497.208" y1="416.042" x2="841.701" y2="530.168"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="525.519" y1="1621.102" x2="568.072" y2="2032.999"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="610.625" y1="1621.143" x2="568.071" y2="2032.12"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="284.675" y1="2230.44" x2="1002.479" y2="2230.44"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="568.072" y1="1152.083" x2="568.072" y2="2230.44"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="284.675" y1="458.244" x2="284.675" y2="2230.636"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="284.676" y1="1363.599" x2="916.497" y2="1363.599"/>
	
		<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="748.788" y1="1192.058" x2="748.788" y2="2167.978"/>
	<path d="M734.526,1210.233c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.536,0.226,1.957-0.434l11.649-18.291l11.649,18.291
		c0.42,0.66,1.298,0.855,1.957,0.434c0.658-0.421,0.849-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.196-0.656
		c-0.485,0-0.936,0.248-1.196,0.656l-12.845,20.168C734.598,1209.708,734.526,1209.974,734.526,1210.233
		C734.526,1210.702,734.526,1209.974,734.526,1210.233"/>
	<path d="M734.526,2149.802c0-0.467,0.233-0.926,0.656-1.195c0.659-0.422,1.536-0.227,1.957,0.434l11.649,18.291l11.649-18.291
		c0.42-0.66,1.298-0.855,1.957-0.434c0.658,0.42,0.849,1.301,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.654-1.196,0.654
		c-0.485,0-0.936-0.246-1.196-0.654l-12.845-20.168C734.598,2150.327,734.526,2150.063,734.526,2149.802
		C734.526,2149.335,734.526,2150.063,734.526,2149.802"/>
	<text transform="matrix(0 -1 1 0 774.5293 1326.5859)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
	<text transform="matrix(0 -1 1.0736 0 730.3872 2131.4238)"><tspan x="0" y="0" font-family="'Calibri'" font-size="22.3555">B</tspan><tspan x="11.959" y="0" font-family="'Calibri'" font-size="22.3555">A</tspan><tspan x="24.738" y="0" font-family="'Calibri'" font-size="22.3555">CK </tspan></text>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M908.872,1621.014
		c92.178,322.127,84.357,609.311,84.357,609.311"/>
	<text transform="matrix(1 0 0 1 291.0498 918.6689)" font-family="'Calibri'" font-size="28.3465">C</text>
	<text transform="matrix(1 0 0 1 291.0498 961.8691)" font-family="'Calibri'" font-size="28.3465">B</text>
	<text transform="matrix(0 -1 1.0736 0 735.0518 1519.7627)" font-family="'Calibri'" font-size="22.3555">MRUK12B - MRUS8B - MREU38B</text>
	<text transform="matrix(0 -1 1.0736 0 774.5288 2131.4238)" font-family="'Calibri'" font-size="22.3555">SHIRT DRESS</text>
	
		<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="285.229" y1="468.407" x2="285.229" y2="3337.517"/>
	
		<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="993.093" y1="2230.44" x2="993.093" y2="3337.517"/>
	
		<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="285.229" y1="3337.517" x2="994.093" y2="3337.517"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="285.229" y1="2762.099" x2="1053.792" y2="2762.099"/>
	
		<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="989.294" y1="2095.696" x2="1053.792" y2="2762.868"/>
	<text transform="matrix(1 0 0 1 763.0474 363.4814)" fill="#010101" font-family="'Calibri'" font-size="28.3465">FRONT</text>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="841.701" y1="373.878" x2="790.812" y2="456.174"/>
			<g>
				<path d="M787.638,461.307c0.597-2.97,0.921-6.912,0.45-9.771l3.141,3.964l4.949,1.038
					C793.409,457.394,790.027,459.445,787.638,461.307z"/>
			</g>
		</g>
	</g>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="2" x1="710.523" y1="395.526" x2="668.803" y2="471.315"/>
	<path fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" d="M497.654,415.335
		c16.154-40.258,18.515-82.914,18.515-82.914"/>
	<line fill="none" stroke="#ED1C24" stroke-miterlimit="10" x1="875.436" y1="453.341" x2="841.701" y2="530.168"/>
	
		<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="497.654" y1="415.335" x2="841.701" y2="530.168"/>
	<line fill="none" stroke="#ED1C24" stroke-miterlimit="10" x1="515.628" y1="332.506" x2="875.436" y2="453.341"/>
	<text transform="matrix(1 0 0 1 293.8994 3318.3047)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
</g>
<line fill="none" stroke="#000000" stroke-width="2.835" stroke-miterlimit="10" x1="1421.262" y1="1200.14" x2="1421.262" y2="2170.2"/>
<path d="M1406.999,1218.315c0,0.468,0.233,0.926,0.656,1.197c0.659,0.421,1.537,0.226,1.957-0.434l11.649-18.291l11.648,18.291
	c0.42,0.66,1.298,0.855,1.957,0.434c0.658-0.421,0.85-1.302,0.434-1.957l-12.844-20.168c-0.26-0.408-0.712-0.656-1.195-0.656
	c-0.485,0-0.937,0.248-1.196,0.656l-12.845,20.168C1407.071,1217.791,1406.999,1218.056,1406.999,1218.315
	C1406.999,1218.783,1406.999,1218.056,1406.999,1218.315"/>
<path d="M1406.999,2152.024c0-0.468,0.233-0.926,0.656-1.197c0.659-0.421,1.537-0.226,1.957,0.435l11.649,18.291l11.648-18.291
	c0.42-0.66,1.298-0.855,1.957-0.435c0.658,0.421,0.85,1.302,0.434,1.957l-12.844,20.168c-0.26,0.408-0.712,0.656-1.195,0.656
	c-0.485,0-0.937-0.248-1.196-0.656l-12.845-20.168C1407.071,2152.549,1406.999,2152.284,1406.999,2152.024
	C1406.999,2151.557,1406.999,2152.284,1406.999,2152.024"/>
<text transform="matrix(0 -1 1 0 1409.4873 2124.2539)"><tspan x="0" y="0" font-family="'Calibri'" font-size="24">F</tspan><tspan x="11.027" y="0" font-family="'Calibri'" font-size="24">R</tspan><tspan x="23.843" y="0" font-family="'Calibri'" font-size="24">ONT</tspan></text>
<text transform="matrix(1.0506 0 0 1 1867.8643 1146.3071)" fill="#010101" font-family="'Calibri'" font-size="28.3465">BL</text>
<text transform="matrix(1.0506 0 0 1 1856.8506 1617.019)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
<text transform="matrix(1.0506 0 0 1 1867.8643 749.4434)" fill="#010101" font-family="'Calibri'" font-size="28.3465">XF</text>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1275.916" y1="1622.259" x2="1944.585" y2="1622.259"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1615.615" y1="1154.462" x2="1944.585" y2="1154.462"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1516.426" y1="476.282" x2="1616.15" y2="1154.617"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1616.15" y1="1154.377" x2="1658.392" y2="1622.201"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1615.908" y1="1154.337" x2="1573.599" y2="1622.38"/>
<text transform="matrix(1 0 0 1.0358 1863.5732 2223.4688)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1335.342" y1="528.704" x2="1615.907" y2="1154.784"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1615.785" y1="1364.918" x2="1944.585" y2="1364.918"/>
<text transform="matrix(1.0506 0 0 1 1863.5732 1358.9067)" fill="#010101" font-family="'Calibri'" font-size="28.3465">UB</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1275.916" y1="1622.25" x2="1180.783" y2="1105.017"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1290.127,833.182
	c102.514,256.292-84.986,267.579-109.345,271.835"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1658.385" y1="1622.207" x2="1616.025" y2="1920.914"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1573.6" y1="1622.334" x2="1615.896" y2="1921.014"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1615.896" y1="1154.242" x2="1615.896" y2="2231.843"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1191.098" y1="1161.096" x2="1616.15" y2="1154.377"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1335.768" y1="528.488" x2="1187.895" y2="631.658"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1451.65" y1="787.857" x2="1289.783" y2="833.406"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1188.074,631.242
	c0,0,92.69,178.95,102.084,202.163"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1686.902" y1="416.742" x2="1516.033" y2="476.419"/>
<text transform="matrix(0 -1 1 0 1446.8779 1343.667)" fill="#9A9899" font-family="'Calibri'" font-size="24">BCSizing ©</text>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1557.342" y1="756.782" x2="1944.585" y2="756.782"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.567,0.567" d="
	M1616.197,1365.784c-117.714,0-213.14-95.197-213.14-212.626c0-117.429,95.426-212.626,213.14-212.626
	c117.711,0,213.135,95.197,213.135,212.626C1829.332,1270.587,1733.908,1365.784,1616.197,1365.784z"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1275.972,1622.331
	c-92.71,322.193-84.845,609.437-84.845,609.437"/>
<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1229.229" y1="1368.562" x2="1615.785" y2="1364.918"/>
<text transform="matrix(1 0 0 1 1880.4482 932.0415)" font-family="'Calibri'" font-size="28.3465">C</text>
<text transform="matrix(1 0 0 1 1880.4482 968.2417)" font-family="'Calibri'" font-size="28.3465">F</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1686.902,417.497
	c53.938,183.024,212.659,175.801,212.659,175.801"/>
<text transform="matrix(0 -1 1.0736 0 1403.6211 1533.876)" font-family="'Calibri'" font-size="22.3555">MRUK12B - MRUS8B - MREU38B</text>
<text transform="matrix(0 -1 1.0736 0 1451.127 2124.2559)" font-family="'Calibri'" font-size="22.3555">SHIRT DRESS</text>
<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="1180.135" y1="2232.084" x2="1944.585" y2="2232.084"/>
<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="1899.628" y1="593.298" x2="1899.628" y2="3337.119"/>
<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="1190.962" y1="2231.769" x2="1190.962" y2="3337.212"/>
<line fill="none" stroke="#231F20" stroke-width="0.7087" stroke-miterlimit="10" x1="1192.766" y1="3337.119" x2="1899.628" y2="3337.119"/>
<text transform="matrix(1 0 0 1 1863.5703 3318.3047)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1944.585" y1="593.298" x2="1944.585" y2="2762.979"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1854.647" y1="587.987" x2="1854.647" y2="2762.979"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1127.066" y1="2762.979" x2="1944.585" y2="2762.979"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1195.119" y1="2096.577" x2="1127.065" y2="2762.979"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1441.727" y1="973.708" x2="1737.789" y2="973.708"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1737.789" y1="973.708" x2="1729.195" y2="1264.439"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1441.727" y1="973.708" x2="1441.727" y2="1254.638"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1441.727" y1="1254.638" x2="1585.457" y2="1323.24"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1585.457" y1="1323.24" x2="1729.195" y2="1264.439"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" x1="1529.021" y1="561.952" x2="1720.962" y2="493.418"/>
<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="1371.047" y1="607.642" x2="1226.014" y2="705.174"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1371.043" y1="516.022" x2="1319.586" y2="570.686"/>
		<g>
			<path d="M1316.654,573.8c0.836-1.977,1.619-4.668,1.697-6.721l1.619,3.198l3.289,1.422
				C1321.216,571.901,1318.577,572.846,1316.654,573.8z"/>
		</g>
	</g>
</g>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1421.259" y1="476.419" x2="1545.54" y2="504.448"/>
		<g>
			<path d="M1549.712,505.389c-2.128,0.286-4.844,0.979-6.65,1.955l1.931-3.02l-0.447-3.555
				C1545.758,502.426,1547.913,504.219,1549.712,505.389z"/>
		</g>
	</g>
</g>
<line fill="none" stroke="#ED1C24" stroke-width="0.7087" stroke-miterlimit="10" x1="1899.562" y1="593.298" x2="1944.585" y2="593.298"/>
<text transform="matrix(1 0 0 1 1371.0439 516.022)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">MOVE TO </tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK YOKE</tspan></text>
<line fill="none" stroke="#EE2E2C" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="2,2" x1="1877.385" y1="593.298" x2="1877.385" y2="2762.979"/>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1444.463" y1="383.305" x2="1941.9" y2="383.305"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1941.9" y1="383.305" x2="2374.764" y2="355.535"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2327.574" y1="358.571" x2="2326.392" y2="346.631"/>
			<g>
				<circle cx="2326.41" cy="346.819" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1941.9" y1="292.215" x2="1941.9" y2="383.457"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1444.463" y1="292.656" x2="1941.9" y2="292.656"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1941.9" y1="292.656" x2="2294.729" y2="267.332"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M2294.729,267.332c75.949-2.449,80.035,88.203,80.035,88.203"/>
	<text transform="matrix(1 0 0 1 1698.8027 333.8799)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2315.585" y1="268.671" x2="2317.682" y2="285.943"/>
			<g>
				<circle cx="2317.659" cy="285.757" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1444.688" y1="383.457" x2="1011.825" y2="355.688"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1058.34" y1="358.782" x2="1060.575" y2="346.675"/>
			<g>
				<circle cx="1060.541" cy="346.86" r="3.76"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1444.688" y1="292.809" x2="1091.86" y2="267.484"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1091.86,267.484c-75.949-2.449-80.035,88.203-80.035,88.203"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1071.004" y1="268.808" x2="1069.039" y2="281.114"/>
			<g>
				<circle cx="1069.069" cy="280.929" r="3.76"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="1805.971" y1="309.774" x2="1805.971" y2="370.371"/>
			<g>
				<path fill="#231F20" d="M1805.971,303.739c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C1808.821,310.103,1807.023,306.579,1805.971,303.739z"/>
			</g>
			<g>
				<path fill="#231F20" d="M1805.971,376.406c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C1808.821,370.042,1807.023,373.566,1805.971,376.406z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1694.342" y1="292.656" x2="1694.342" y2="383.305"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1444.463" y1="292.656" x2="1444.463" y2="383.305"/>
	<text transform="matrix(1 0 0 1 1350.7158 333.8799)" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR STAND</text>
</g>
<g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1699.689" y1="91.77" x2="1699.689" y2="228.806"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1699.689" y1="92.033" x2="2366.092" y2="55.283"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2366.092" y1="55.283" x2="2330.979" y2="250.47"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2330.979" y1="250.47" x2="2062.291" y2="243.935"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2062.291" y1="243.935" x2="1699.689" y2="228.806"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1950.459" y1="223.413" x2="1950.182" y2="240.271"/>
			<g>
				<circle cx="1950.456" cy="223.601" r="3.76"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 1704.459 152.7476)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<g>
		<g>
			<line fill="none" stroke="#231F20" stroke-miterlimit="10" x1="2129.068" y1="98.08" x2="2129.068" y2="217.611"/>
			<g>
				<path fill="#231F20" d="M2129.068,92.045c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C2131.919,98.408,2130.121,94.885,2129.068,92.045z"/>
			</g>
			<g>
				<path fill="#231F20" d="M2129.068,223.646c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C2131.919,217.283,2130.121,220.807,2129.068,223.646z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1699.689" y1="92.033" x2="1031.514" y2="56.494"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1031.514" y1="56.494" x2="1066.627" y2="251.681"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1066.627" y1="251.681" x2="1335.314" y2="245.146"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1335.314" y1="245.146" x2="1699.689" y2="228.806"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1448.373" y1="225.202" x2="1447.42" y2="240.482"/>
			<g>
				<circle cx="1448.362" cy="225.39" r="3.76"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 1468.8154 127.6587)" fill="#010101" font-family="'Calibri'" font-size="28.3465">COLLAR FALL</text>
</g>
</svg>
`,
    },
    {
      _id: '17678723',
      name: 'SHIRT DRESS PLAN SLEEVE',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="1729.13px" height="2369.76px" viewBox="0 0 1729.13 2369.76" enable-background="new 0 0 1729.13 2369.76"
	 xml:space="preserve">
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="822" y1="2003.331" x2="822" y2="359.047"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="329.107" y1="727.995" x2="1289.766" y2="727.995"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="427.335" y1="1294.75" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="341.972" y1="799.417" x2="1277.771" y2="799.417"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="329.107" y1="727.302" x2="427.335" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1290.182" y1="727.542" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="540.363" y1="2003.512" x2="1078.88" y2="2003.512"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="540.364" y1="2003.512" x2="427.335" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1078.88" y1="2003.512" x2="1192.244" y2="1294.75"/>
<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="809.622" y1="728.719" x2="809.622" y2="2003.331"/>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="2.8347" stroke-miterlimit="10" x1="696.099" y1="863.879" x2="696.099" y2="1872.425"/>
		<g>
			<path d="M681.837,882.055c0,0.468,0.232,0.926,0.656,1.197c0.659,0.421,1.537,0.226,1.958-0.435l11.648-18.291l11.648,18.291
				c0.421,0.66,1.298,0.855,1.958,0.435c0.659-0.42,0.85-1.302,0.435-1.957l-12.845-20.167c-0.26-0.409-0.711-0.656-1.196-0.656
				s-0.936,0.248-1.196,0.656l-12.845,20.167C681.909,881.53,681.837,881.795,681.837,882.055
				C681.837,882.523,681.837,881.795,681.837,882.055z"/>
		</g>
		<g>
			<path d="M681.837,1854.249c0-0.468,0.232-0.926,0.656-1.197c0.659-0.421,1.537-0.226,1.958,0.435l11.648,18.291l11.648-18.291
				c0.421-0.66,1.298-0.855,1.958-0.435c0.659,0.421,0.85,1.303,0.435,1.957l-12.845,20.168c-0.26,0.408-0.711,0.656-1.196,0.656
				s-0.936-0.248-1.196-0.656l-12.845-20.168C681.909,1854.773,681.837,1854.51,681.837,1854.249
				C681.837,1853.781,681.837,1854.51,681.837,1854.249z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 679.8193 1299.5391)" font-family="'Calibri'" font-size="28.3465">MRUK12B - MRUSA8B - MREU38B</text>
<text transform="matrix(0 -1 1 0 724.6987 1036.8486)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 682.2407 1823.4521)" font-family="'Calibri'" font-size="28.3465">SLEEVE</text>
<text transform="matrix(0 -1 1 0 722.8398 1824.1641)" font-family="'Calibri'" font-size="28.3465">SHIRT DRESS</text>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822,359.047
	c-205.771,0.238-291.784,302.799-492.835,368.083"/>
<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M822,359.047
	c169.653,2.516,271.505,330.511,468.137,368.672"/>
<text transform="matrix(1 0 0 1 948.5938 1278.7217)" font-family="'Calibri'" font-size="28.3465">ELBOW</text>
<text transform="matrix(1 0 0 1 948.5938 782.6616)" font-family="'Calibri'" font-size="28.3465">BICEP</text>
<g>
	<rect x="540.363" y="2032.171" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="565.559" height="161.758"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1054.473" y1="2032.171" x2="1054.473" y2="2193.929"/>
</g>
<g>
	<rect x="1172.422" y="1701.929" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="115.148" height="481.234"/>
	<rect x="1314.52" y="1778.913" fill="none" stroke="#EE2E2C" stroke-miterlimit="10" width="68.602" height="404.25"/>
	<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="1172.422" y1="1778.913" x2="1287.57" y2="1778.913"/>
</g>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="659.094" y1="1607.378" x2="659.094" y2="2001.632"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="629.692" y1="1607.378" x2="703.192" y2="1607.378"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="722.793" y1="1877.128" x2="722.793" y2="2001.632"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="757.094" y1="1877.128" x2="757.094" y2="2001.632"/>
<line fill="none" stroke="#EE2E2C" stroke-miterlimit="10" x1="787.915" y1="1877.128" x2="787.915" y2="2001.632"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="730.141" y1="1888.612" x2="748.922" y2="1911.179"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="730.141" y1="1916.897" x2="748.922" y2="1939.382"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="730.141" y1="1947.929" x2="748.922" y2="1966.71"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="765.254" y1="1966.71" x2="783.012" y2="1947.929"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="765.254" y1="1939.382" x2="783.012" y2="1921.796"/>
<line fill="none" stroke="#EE2E2C" stroke-width="0.5" stroke-miterlimit="10" x1="765.254" y1="1907.909" x2="783.012" y2="1893.214"/>
</svg>
`,
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(fileTabs[0].file);

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
