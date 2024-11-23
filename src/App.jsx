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
    {
      _id: '1767872323',
      name: 'Jeans Pattern1',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2267.72px" height="3401.58px" viewBox="0 0 2267.72 3401.58" enable-background="new 0 0 2267.72 3401.58"
	 xml:space="preserve">
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="394.399" y1="916.511" x2="1148.243" y2="916.511"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="855.48" y1="253.097" x2="532.056" y2="201.236"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1156.086,268.493
		c-97.207,9.191-300.605-15.412-300.605-15.412"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="532.056" y1="201.236" x2="447.329" y2="725.215"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="770.906" y1="240.234" x2="747.183" y2="653.622"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="855.005" y1="253.896" x2="747.284" y2="653.781"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="813.065" y1="246.997" x2="704.768" y2="916.721"/>
	<text transform="matrix(1.055 0 0 1 551.1343 273.375)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<text transform="matrix(0.9695 0 0 1 420.9551 906.4004)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(0.9695 0 0 1 503.0078 1856.5664)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M200.043,1128.237
		c229.369,289.368,260.32,738.632,260.32,738.632"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="260.065" y1="1214.217" x2="1134.103" y2="1214.221"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1101.353" y1="1866.869" x2="1059.007" y2="3200.344"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="200.043" y1="1128.311" x2="1137.343" y2="1128.315"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1136.704,1128.315
		c-8.291,317.1-35.352,738.554-35.352,738.554"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="460.363" y1="1866.869" x2="1101.353" y2="1866.869"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="476.302" y1="2292.701" x2="1086.235" y2="2292.701"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="503.017" y1="3200.344" x2="1058.695" y2="3200.344"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="476.302" y1="2292.701" x2="503.017" y2="3200.344"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1160.561" y1="705.049" x2="1136.704" y2="1128.315"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="460.363" y1="1866.869" x2="476.302" y2="2292.701"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M448.182,718.61
		c-63.246,380.538-247.508,409.705-247.508,409.705"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1156.433,268.338
		c27.738,182.024,4.093,436.878,4.093,436.878"/>
	<text transform="matrix(0.9566 0.1501 -0.1451 0.9894 489.8823 531.105)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="513.387" y1="313.905" x2="764.917" y2="352.445"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M825.362,365.72
		c166.54,18.27,342.885,6.813,342.885,6.813"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="490.15" y1="425.496" x2="759.987" y2="462.896"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M795.751,469.217
		c273.49,19.351,372.441,0,372.441,0"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="490.808" y1="1866.869" x2="531.405" y2="3198.475"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1057.014" y1="1866.869" x2="1021.984" y2="3200.15"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1148.243" y1="916.511" x2="1057.014" y2="1866.869"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M200.043,1128.237
		c287.91,353.477,290.765,738.632,290.765,738.632"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1167.749" y1="567.914" x2="451.851" y2="697.243"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="555.261" y1="743.643" x2="929.069" y2="704.901"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="929.069" y1="704.901" x2="998.289" y2="1037.456"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="998.289" y1="1037.456" x2="780.934" y2="1154.619"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="780.934" y1="1154.619" x2="543.925" y2="1087.925"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="543.925" y1="1087.925" x2="555.261" y2="743.643"/>
	<text transform="matrix(0.9963 0 0 1 387.4146 1112.3799)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="800.898" y1="1376.895" x2="800.898" y2="2688.525"/>
			<g>
				<path d="M793.769,1385.981c0,0.234,0.116,0.463,0.328,0.598c0.329,0.21,0.768,0.113,0.978-0.217l5.823-9.144l5.823,9.144
					c0.21,0.33,0.649,0.427,0.978,0.217c0.33-0.21,0.425-0.651,0.217-0.978l-6.421-10.082c-0.13-0.204-0.355-0.328-0.598-0.328
					s-0.468,0.124-0.598,0.328l-6.421,10.082C793.805,1385.719,793.769,1385.851,793.769,1385.981
					C793.769,1386.215,793.769,1385.851,793.769,1385.981z"/>
			</g>
			<g>
				<path d="M793.769,2679.44c0-0.234,0.116-0.463,0.328-0.599c0.329-0.211,0.768-0.113,0.978,0.217l5.823,9.144l5.823-9.144
					c0.21-0.33,0.649-0.428,0.978-0.217c0.33,0.21,0.425,0.65,0.217,0.979l-6.421,10.081c-0.13,0.204-0.355,0.328-0.598,0.328
					s-0.468-0.124-0.598-0.328l-6.421-10.081C793.805,2679.702,793.769,2679.57,793.769,2679.44
					C793.769,2679.206,793.769,2679.57,793.769,2679.44z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 833.3984 1524.6797)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 781.2695 2617.7188)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">B</tspan><tspan x="15.164" y="0" font-family="'Calibri'" font-size="28.3465">A</tspan><tspan x="31.367" y="0" font-family="'Calibri'" font-size="28.3465">CK T</tspan><tspan x="81.43" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="96.566" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="194.104" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="207.66" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
	<text transform="matrix(0 -1 1 0 787.1123 1725.0225)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
	<text transform="matrix(0 -1 1 0 833.3984 2617.7188)" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<g>
	<text transform="matrix(1.0546 0 0 1 1920.1133 345.4912)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1641.87" y1="308.437" x2="1968.922" y2="308.437"/>
	<text transform="matrix(0.9691 0 0 1 1933.6582 909.3682)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1343.133,276.085
		c94.347,24.432,298.737,32.333,298.737,32.333"/>
	<text transform="matrix(0.9691 0 0 1 1805.4453 1850.5596)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1968.922" y1="308.437" x2="1968.922" y2="917.582"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1969.244" y1="917.582" x2="1258.751" y2="917.582"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1343.518,275.984
		c-78.445,233.514-84.767,642.136-84.767,642.136"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1684.639" y1="308.367" x2="1684.639" y2="917.749"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1727.221" y1="308.204" x2="1684.721" y2="607.475"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1642.154" y1="308.324" x2="1684.592" y2="607.576"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M2080.73,1129.108
		c-166.999,289.022-189.527,737.747-189.527,737.747"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="2037.115" y1="1214.904" x2="1264.481" y2="1214.908"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1969.042,917.729
		c3.837,182.359,111.688,211.379,111.688,211.379"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1336.792" y1="1866.855" x2="1379.456" y2="3198.475"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2080.73" y1="1129.108" x2="1258.102" y2="1129.112"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1258.751" y1="918.121" x2="1258.751" y2="1129.112"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1336.792" y1="1866.855" x2="1891.203" y2="1866.855"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1352.005" y1="2292.004" x2="1875.17" y2="2292.004"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1379.456" y1="3198.475" x2="1848.535" y2="3198.475"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1875.17" y1="2292.004" x2="1848.535" y2="3198.475"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1891.203" y1="1866.855" x2="1875.17" y2="2292.004"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1258.751,1129.112
		c18.3,316.754,78.041,737.743,78.041,737.743"/>
	<text transform="matrix(0.9959 0 0 1 1933.6562 1113.8579)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1319.064,380.042
		c129.93,37.63,339.484,43.897,339.484,43.897"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1300.307,474.974
		c123.69,40.217,371.223,42.925,371.223,42.925"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1671.529" y1="517.899" x2="2030.272" y2="517.899"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1710.74" y1="424.241" x2="2030.272" y2="424.241"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1968.385" y1="839.385" x2="2030.272" y2="839.385"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2030.272" y1="839.385" x2="2030.272" y2="424.241"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1913.689" y1="517.899" x2="1913.689" y2="788.954"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1913.689,788.954
		c-1.812,41.43,54.695,50.431,54.695,50.431"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1605.155" y1="515.815" x2="1605.155" y2="722.772"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1605.155" y1="722.772" x2="1268.646" y2="718.987"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1319.064,480.54
		c-27.96,67.368-39.545,124.875-39.545,124.875"/>
	
		<rect x="1425.797" y="598.04" fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" width="207.171" height="245.85"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1371.047" y1="1866.855" x2="1409.838" y2="3198.475"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1849.371" y1="1861.417" x2="1815.237" y2="3198.475"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1258.751,917.582
		c-13.525,245.427,112.296,950.612,112.296,950.612"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M2076.901,1139.264
		c-214.619,313.419-227.79,727.592-227.79,727.592"/>
	<text transform="matrix(1.0038 0 0 1 1927.5039 633.7314)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1686.454" y1="985.275" x2="1258.751" y2="985.275"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1686.454" y1="515.815" x2="1686.454" y2="987.529"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="1607.152" y1="1390.91" x2="1607.152" y2="2702.54"/>
			<g>
				<path d="M1600.023,1399.996c0,0.234,0.115,0.463,0.328,0.598c0.328,0.21,0.768,0.113,0.978-0.217l5.823-9.144l5.823,9.144
					c0.21,0.33,0.649,0.427,0.978,0.217c0.33-0.21,0.426-0.651,0.218-0.978l-6.421-10.082c-0.13-0.204-0.355-0.328-0.598-0.328
					s-0.468,0.124-0.598,0.328l-6.421,10.082C1600.059,1399.733,1600.023,1399.865,1600.023,1399.996
					C1600.023,1400.229,1600.023,1399.865,1600.023,1399.996z"/>
			</g>
			<g>
				<path d="M1600.023,2693.455c0-0.234,0.115-0.463,0.328-0.599c0.328-0.211,0.768-0.113,0.978,0.217l5.823,9.144l5.823-9.144
					c0.21-0.33,0.649-0.428,0.978-0.217c0.33,0.21,0.426,0.65,0.218,0.979l-6.421,10.081c-0.13,0.204-0.355,0.328-0.598,0.328
					s-0.468-0.124-0.598-0.328l-6.421-10.081C1600.059,2693.717,1600.023,2693.585,1600.023,2693.455
					C1600.023,2693.221,1600.023,2693.585,1600.023,2693.455z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1639.6523 1538.6943)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 1587.5234 2631.7344)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">FRONT</tspan><tspan x="78.02" y="0" font-family="'Calibri'" font-size="28.3465"> T</tspan><tspan x="98.242" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="113.377" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="210.914" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="224.473" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
	<text transform="matrix(0 -1 1 0 1593.3662 1739.0381)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
	<text transform="matrix(0 -1 1 0 1639.6523 2631.7324)" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
</svg>
`,
    },
    {
      _id: '176787asdf2323',
      name: 'Jeans Pattern2',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
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
`,
    },
    {
      _id: '1767323872323',
      name: 'Jeans Pattern3',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2267.72px" height="3401.58px" viewBox="0 0 2267.72 3401.58" enable-background="new 0 0 2267.72 3401.58"
	 xml:space="preserve">
<g>
	<rect x="1893.418" y="635.901" fill="none" stroke="#000000" stroke-miterlimit="10" width="207.012" height="245.949"/>
	<rect x="1869.586" y="576.53" fill="none" stroke="#ED2224" stroke-miterlimit="10" width="251.5" height="328.609"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2064.676" y1="669.518" x2="2064.676" y2="833.273"/>
			<g>
				<path d="M2064.676,665.241c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C2066.695,669.75,2065.422,667.254,2064.676,665.241z"/>
			</g>
			<g>
				<path d="M2064.676,837.55c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C2066.695,833.041,2065.422,835.537,2064.676,837.55z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0.9947 0 0 1 1916.8047 726.3164)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">COIN</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">POCKET</tspan><tspan x="0" y="68.032" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 1</tspan></text>
</g>
<g>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="2058.355" y1="2699.94" x2="2058.355" y2="2360.909"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1982.133" y1="2360.909" x2="1982.133" y2="2650.144"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1982.355,2650.144c12.047,60.922,76,49.797,76,49.797"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2037.93" y1="2699.94" x2="2037.93" y2="2382.464"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1982.133" y1="2382.464" x2="2037.93" y2="2382.464"/>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="1979.008" y1="2360.909" x2="2058.355" y2="2360.909"/>
	<text transform="matrix(0 -1 1 0 2010.0312 2619.2207)" fill="#010101" font-family="'Calibri'" font-size="26.6457">FLY FRONT CUT 1</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="2017.969" y1="2439.493" x2="2017.969" y2="2642.497"/>
			<g>
				<path d="M2017.969,2436.476c-0.527,1.42-1.426,3.182-2.378,4.273l2.378-0.859l2.377,0.859
					C2019.395,2439.657,2018.495,2437.896,2017.969,2436.476z"/>
			</g>
			<g>
				<path d="M2017.969,2645.515c-0.527-1.42-1.426-3.182-2.378-4.273l2.378,0.859l2.377-0.859
					C2019.395,2642.333,2018.495,2644.095,2017.969,2645.515z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1839.098,2823.89
		c119.688,37.93,359.164,40.477,359.164,40.477"/>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2111.754" y1="2837.315" x2="2111.754" y2="2866.428"/>
			<g>
				<circle cx="2111.754" cy="2866.24" r="3.76"/>
			</g>
		</g>
	</g>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1792.487" y1="3068.644" x2="1764.047" y2="3065.151"/>
			<g>
				<circle cx="1792.355" cy="3068.627" r="2.664"/>
			</g>
		</g>
	</g>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1841.215,2825.702
		c-60.215,74.59-72.93,497.805-72.93,497.805"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1824.715,2798.718
		c133.418,39.551,400.402,42.211,400.402,42.211"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1824.715,2798.718
		c-66.195,82.441-80.176,550.16-80.176,550.16"/>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1961.832,2958.731c-7.391,0-13.367-5.786-13.367-12.935
				c0-7.145,5.977-12.933,13.367-12.933s13.355,5.788,13.355,12.933C1975.188,2952.945,1969.223,2958.731,1961.832,2958.731z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1972.961,2945.797c0-5.961-4.98-10.774-11.129-10.774
				c-6.152,0-11.137,4.813-11.137,10.774c0,5.963,4.984,10.773,11.137,10.773C1967.98,2956.57,1972.961,2951.76,1972.961,2945.797z"
				/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1961.832,2954.427c-4.922,0-8.906-3.868-8.906-8.63
				c0-4.76,3.984-8.623,8.906-8.623c4.926,0,8.898,3.863,8.898,8.623C1970.73,2950.559,1966.758,2954.427,1961.832,2954.427z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1968.516,2945.797c0-3.573-2.984-6.467-6.684-6.467
				c-3.691,0-6.684,2.894-6.684,6.467c0,3.572,2.992,6.465,6.684,6.465C1965.531,2952.262,1968.516,2949.369,1968.516,2945.797z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1961.832,2950.104c-2.453,0-4.453-1.917-4.453-4.307
				c0-2.385,2-4.305,4.453-4.305c2.449,0,4.453,1.92,4.453,4.305C1966.285,2948.187,1964.281,2950.104,1961.832,2950.104z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M1964.055,2945.797c0-1.189-0.992-2.16-2.223-2.16
				c-1.238,0-2.23,0.971-2.23,2.16c0,1.188,0.992,2.164,2.23,2.164C1963.062,2947.961,1964.055,2946.985,1964.055,2945.797z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1961.832" y1="2945.797" x2="1961.832" y2="2958.731"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1961.832" y1="2945.797" x2="1974.531" y2="2949.787"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1961.832" y1="2945.797" x2="1969.68" y2="2935.342"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1961.832" y1="2945.797" x2="1953.977" y2="2935.342"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="1961.832" y1="2945.797" x2="1949.133" y2="2949.787"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2157.746,2960.893c-7.391,0-13.363-5.785-13.363-12.936
				c0-7.148,5.973-12.935,13.363-12.935c7.375,0,13.352,5.786,13.352,12.935C2171.098,2955.107,2165.121,2960.893,2157.746,2960.893
				z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2168.875,2947.957c0-5.96-4.98-10.773-11.129-10.773
				c-6.152,0-11.133,4.813-11.133,10.773c0,5.964,4.98,10.774,11.133,10.774C2163.895,2958.731,2168.875,2953.921,2168.875,2947.957
				z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2157.746,2956.585c-4.926,0-8.914-3.862-8.914-8.628
				c0-4.759,3.988-8.627,8.914-8.627c4.922,0,8.898,3.868,8.898,8.627C2166.645,2952.723,2162.668,2956.585,2157.746,2956.585z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2164.414,2947.957c0-3.575-2.98-6.465-6.668-6.465
				c-3.691,0-6.684,2.89-6.684,6.465c0,3.577,2.992,6.47,6.684,6.47C2161.434,2954.427,2164.414,2951.534,2164.414,2947.957z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2157.746,2952.262c-2.461,0-4.465-1.917-4.465-4.305
				c0-2.387,2.004-4.305,4.465-4.305c2.449,0,4.449,1.918,4.449,4.305C2162.195,2950.345,2160.195,2952.262,2157.746,2952.262z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M2159.965,2947.957c0-1.186-0.996-2.16-2.219-2.16
				c-1.242,0-2.23,0.975-2.23,2.16c0,1.189,0.988,2.162,2.23,2.162C2158.969,2950.119,2159.965,2949.146,2159.965,2947.957z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2157.746" y1="2947.957" x2="2157.746" y2="2960.893"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2157.746" y1="2947.957" x2="2170.445" y2="2951.952"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2157.746" y1="2947.957" x2="2165.594" y2="2937.5"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2157.746" y1="2947.957" x2="2149.895" y2="2937.5"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="2157.746" y1="2947.957" x2="2145.031" y2="2951.952"/>
		</g>
	</g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1768.992" y1="3323.507" x2="2199.254" y2="3323.507"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1744.539" y1="3348.878" x2="2224.617" y2="3348.878"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2199.254" y1="3323.444" x2="2199.254" y2="2864.202"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2224.617" y1="3348.878" x2="2224.617" y2="2837.315"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1886.371" y1="2865.053" x2="1886.371" y2="3306.148"/>
			<g>
				<path d="M1882.806,2869.598c0,0.116,0.058,0.23,0.164,0.299c0.165,0.105,0.384,0.057,0.489-0.108l2.912-4.573l2.912,4.573
					c0.105,0.165,0.324,0.214,0.489,0.108s0.213-0.326,0.108-0.489l-3.211-5.042c-0.064-0.102-0.178-0.164-0.299-0.164
					s-0.234,0.062-0.299,0.164l-3.211,5.042C1882.823,2869.466,1882.806,2869.532,1882.806,2869.598
					C1882.806,2869.714,1882.806,2869.532,1882.806,2869.598z"/>
			</g>
			<g>
				<path d="M1882.806,3301.604c0-0.116,0.058-0.23,0.164-0.299c0.165-0.105,0.384-0.057,0.489,0.108l2.912,4.573l2.912-4.573
					c0.105-0.165,0.324-0.214,0.489-0.108s0.213,0.326,0.108,0.489l-3.211,5.042c-0.064,0.102-0.178,0.164-0.299,0.164
					s-0.234-0.062-0.299-0.164l-3.211-5.042C1882.823,3301.735,1882.806,3301.669,1882.806,3301.604
					C1882.806,3301.487,1882.806,3301.669,1882.806,3301.604z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1923.4512 3025.0684)" fill="#999798" font-family="'Calibri'" font-size="28.5775">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 1869.584 3280.4941)"><tspan x="0" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">POCKET BACK  </tspan><tspan x="171.793" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465" letter-spacing="3">	</tspan><tspan x="181.465" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	<text transform="matrix(0 -1 1 0 1934.8633 3233.8691)" fill="#010101" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<g>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2103.834" y1="1860.979" x2="2103.834" y2="2066.222"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2103.834" y1="2064.776" x2="1782.061" y2="2061.046"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2084.607" y1="1836.198" x2="2084.607" y2="2038.624"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2084.607" y1="2038.718" x2="1765.076" y2="2034.991"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1782.061" y1="2061.046" x2="1765.076" y2="2314.647"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1765.076" y1="2034.94" x2="1741.654" y2="2339.632"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1763.424" y1="2316.312" x2="2193.686" y2="2316.312"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="1738.967" y1="2341.675" x2="2219.049" y2="2341.675"/>
	<line fill="none" stroke="#3A53A4" stroke-miterlimit="10" x1="2193.686" y1="2316.245" x2="2193.686" y2="1860.979"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2219.049" y1="2341.675" x2="2219.049" y2="1836.198"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2103.834" y1="1860.979" x2="2193.686" y2="1860.979"/>
	
		<line fill="none" stroke="#3A53A4" stroke-width="0.7087" stroke-miterlimit="10" x1="2084.607" y1="1836.198" x2="2219.049" y2="1836.198"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2129.908" y1="1917.909" x2="2129.908" y2="2311.167"/>
			<g>
				<path d="M2126.343,1922.453c0,0.117,0.058,0.231,0.164,0.3c0.165,0.105,0.384,0.057,0.489-0.108l2.912-4.573l2.912,4.573
					c0.105,0.165,0.324,0.214,0.489,0.108s0.213-0.326,0.108-0.489l-3.211-5.042c-0.064-0.103-0.178-0.164-0.299-0.164
					s-0.234,0.062-0.299,0.164l-3.211,5.042C2126.361,1922.322,2126.343,1922.389,2126.343,1922.453
					C2126.343,1922.57,2126.343,1922.389,2126.343,1922.453z"/>
			</g>
			<g>
				<path d="M2126.343,2306.622c0-0.116,0.058-0.23,0.164-0.299c0.165-0.105,0.384-0.057,0.489,0.108l2.912,4.573l2.912-4.573
					c0.105-0.165,0.324-0.214,0.489-0.108s0.213,0.326,0.108,0.489l-3.211,5.042c-0.064,0.102-0.178,0.164-0.299,0.164
					s-0.234-0.062-0.299-0.164l-3.211-5.042C2126.361,2306.754,2126.343,2306.688,2126.343,2306.622
					C2126.343,2306.506,2126.343,2306.688,2126.343,2306.622z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 2177.377 2105.709)" fill="#999798" font-family="'Calibri'" font-size="28.5775">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 2010.2539 2272.5625)"><tspan x="0" y="0" fill="#231F20" font-family="'Calibri'" font-size="28.3465">POCKET </tspan><tspan x="0" y="34.016" fill="#231F20" font-family="'Calibri'" font-size="28.3465">LINING  </tspan><tspan x="93.495" y="34.016" fill="#231F20" font-family="'Calibri'" font-size="28.3465" letter-spacing="8">	</tspan><tspan x="0" y="68.031" fill="#231F20" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	<text transform="matrix(0 -1 1 0 2177.377 2246.4434)" fill="#010101" font-family="'Calibri'" font-size="28.3465">JEANS</text>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="790.889" y1="364.06" x2="791.643" y2="458.372"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M218.369,214.688
		c110.59,84.715,310,152.09,310,152.09"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="515.521" y1="460.575" x2="791.643" y2="458.372"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="528.369" y1="366.778" x2="790.889" y2="364.685"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="220.389" y1="214.978" x2="174.322" y2="300.517"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M211.826,180.11
		C326.971,270.806,535.6,341.81,535.6,341.81"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M141.654,305.649
		c111.352,98.387,369.566,178.699,369.566,178.699"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="511.221" y1="484.349" x2="816.217" y2="481.919"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="535.6" y1="341.81" x2="815.076" y2="339.579"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="815.076" y1="338.989" x2="816.217" y2="481.329"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="211.768" y1="180.274" x2="141.463" y2="305.997"/>
	<text transform="matrix(1.0149 -0.0081 0.008 1 521.8779 406.2817)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">RIGHT FRONT</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">WAISTBAND</tspan></text>
	<text transform="matrix(1.0149 -0.0081 0.008 1 763.7588 406.2769)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0.001" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M174.322,299.243
		c105.434,80.238,342.59,161.332,342.59,161.332"/>
	<text transform="matrix(1 0 0 1 376.1787 389.7148)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="511.221" y1="351.891" x2="511.221" y2="478.173"/>
			<g>
				<path d="M511.221,347.614c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C513.241,352.124,511.967,349.627,511.221,347.614z"/>
			</g>
			<g>
				<path d="M511.221,482.45c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C513.241,477.941,511.967,480.438,511.221,482.45z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<text transform="matrix(1 0 0 1 458.8213 554.8223)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">LEFT FRONT</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">WAISTBAND</tspan></text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="2" x1="702.506" y1="498.413" x2="703.627" y2="638.483"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M130.166,371.839
		c113.91,83.719,317.863,152.172,317.863,152.172"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="427.322" y1="617.729" x2="765.084" y2="615.034"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="447.6" y1="523.866" x2="764.994" y2="521.331"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="132.186" y1="372.136" x2="86.123" y2="457.671"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M123.619,337.261
		C238.771,427.956,447.396,498.96,447.396,498.96"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M53.455,462.804
		c111.344,98.387,369.57,178.699,369.57,178.699"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="423.025" y1="641.503" x2="793.115" y2="638.546"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="447.396" y1="498.96" x2="791.975" y2="496.206"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="791.975" y1="496.144" x2="793.115" y2="638.483"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="123.564" y1="337.425" x2="53.455" y2="462.804"/>
	<text transform="matrix(1.0149 -0.0081 0.008 1 673.291 554.894)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0.001" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M86.123,457.671
		c105.113,79.367,341.199,160.059,341.199,160.059"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="765.088" y1="615.034" x2="765.088" y2="521.214"/>
	<text transform="matrix(1 0 0 1 287.9775 546.8691)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="423.025" y1="505.303" x2="423.025" y2="631.589"/>
			<g>
				<path d="M423.025,501.026c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C425.046,505.536,423.771,503.039,423.025,501.026z"/>
			</g>
			<g>
				<path d="M423.025,635.866c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C425.046,631.357,423.771,633.854,423.025,635.866z"/>
			</g>
		</g>
	</g>
</g>
<g>
	<rect x="1789.707" y="2385.476" fill="none" stroke="#000000" stroke-miterlimit="10" width="120.797" height="317.477"/>
	
		<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2" x1="1849.586" y1="2385.476" x2="1850.102" y2="2702.952"/>
	<rect x="1768.375" y="2365.03" fill="none" stroke="#ED2224" stroke-miterlimit="10" width="164.195" height="360.16"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.5" stroke-miterlimit="10" x1="1878.625" y1="2442.317" x2="1878.625" y2="2645.321"/>
			<g>
				<path d="M1878.625,2439.3c-0.527,1.42-1.426,3.182-2.378,4.273l2.378-0.859l2.377,0.859
					C1880.051,2442.481,1879.151,2440.72,1878.625,2439.3z"/>
			</g>
			<g>
				<path d="M1878.625,2648.339c-0.527-1.42-1.426-3.182-2.378-4.273l2.378,0.859l2.377-0.859
					C1880.051,2645.157,1879.151,2646.919,1878.625,2648.339z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(0 -1 1 0 1835.5977 2645.0176)" fill="#010101" font-family="'Calibri'" font-size="26.6457">FLY BACK CUT 1</text>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1155.078" y1="335.992" x2="1154.98" y2="613.434"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1154.98" y1="613.434" x2="1439.5" y2="513.191"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1422.715" y1="331.348" x2="1155.078" y2="335.992"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1420.383,332.09
		c267.91-74.898,355.922-126.988,355.922-126.988"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1809.293" y1="298.883" x2="1439.5" y2="513.188"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1776.305" y1="205.102" x2="1809.293" y2="298.883"/>
	<text transform="matrix(0.9643 0.0155 -0.0048 1 1170.1455 467.8633)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.015" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1244.82" y1="366.312" x2="1244.82" y2="559.54"/>
			<g>
				<path d="M1244.82,362.035c-0.746,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C1246.84,366.544,1245.566,364.048,1244.82,362.035z"/>
			</g>
			<g>
				<path d="M1244.82,563.816c-0.746-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C1246.84,559.307,1245.566,561.804,1244.82,563.816z"/>
			</g>
		</g>
	</g>
	<text transform="matrix(1 0 0 1 1261.334 451.1533)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK YOKE</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1127.637" y1="307.855" x2="1127.523" y2="651.297"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1127.523" y1="651.297" x2="1446.371" y2="534.773"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1422.715" y1="301.871" x2="1127.637" y2="307.855"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1423.02,302.73
		c179.066-50.551,227.629-66.605,362.754-129.074"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1838.062" y1="307.855" x2="1446.371" y2="534.773"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1785.77" y1="171.133" x2="1838.062" y2="307.855"/>
</g>
<g>
	<g>
		<g>
			<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="2077.49" y1="1506.088" x2="2077.49" y2="1735.482"/>
			<g>
				<path d="M2077.49,1500.053c-1.054,2.84-2.852,6.363-4.756,8.547l4.756-1.72l4.755,1.72
					C2080.341,1506.416,2078.543,1502.893,2077.49,1500.053z"/>
			</g>
			<g>
				<path d="M2077.49,1741.518c-1.054-2.84-2.852-6.363-4.756-8.547l4.756,1.72l4.755-1.72
					C2080.341,1735.154,2078.543,1738.678,2077.49,1741.518z"/>
			</g>
		</g>
	</g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2174.521" y1="1477.748" x2="2201.463" y2="1742.475"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2201.463" y1="1742.475" x2="2016.557" y2="1814.143"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2016.557" y1="1814.143" x2="1831.736" y2="1741.123"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1831.736" y1="1741.123" x2="1870.58" y2="1474.463"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2187.994" y1="1432.439" x2="2225.826" y2="1749.635"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2225.826" y1="1749.635" x2="2022.307" y2="1833.896"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2022.307" y1="1833.896" x2="1811.646" y2="1754.873"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1811.537" y1="1754.865" x2="1857.635" y2="1434.475"/>
	<text transform="matrix(1 0 0 1 1914.0957 1596.8291)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">POCKET</tspan><tspan x="0" y="68.031" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="2189.213" y1="1432.439" x2="1857.635" y2="1432.439"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="2175.201" y1="1474.463" x2="1870.58" y2="1474.463"/>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-miterlimit="10" stroke-dasharray="2" x1="972.805" y1="135.948" x2="973.293" y2="292.218"/>
	<text transform="matrix(0.8913 0.0251 0.0028 1 944.2671 201.4346)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="-0.001" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">B</tspan></text>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1563.051" y1="56.765" x2="1595.047" y2="153.757"/>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="1576.488" y1="27.749" x2="1629.219" y2="167.362"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1246.883,267.917c173.227-33.453,347.898-114.969,347.898-114.969"
		/>
	<path fill="none" stroke="#ED2224" stroke-miterlimit="10" d="M1246.477,292.218c188.895-42.148,382.902-126.527,382.902-126.527"
		/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M1232.543,157.198c154.254-28.832,331.84-101.406,331.84-101.406"/>
	<path fill="none" stroke="#ED2224" stroke-miterlimit="10" d="M1228.555,134.722c161.336-31.734,347.941-106.938,347.941-106.938"
		/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1072.266" y1="168.729" x2="1072.266" y2="256.964"/>
			<g>
				<path d="M1072.266,164.452c-0.747,2.013-2.021,4.509-3.37,6.057l3.37-1.219l3.369,1.219
					C1074.287,168.961,1073.012,166.465,1072.266,164.452z"/>
			</g>
			<g>
				<path d="M1072.266,261.241c-0.747-2.013-2.021-4.509-3.37-6.057l3.37,1.219l3.369-1.219
					C1074.287,256.732,1073.012,259.229,1072.266,261.241z"/>
			</g>
		</g>
	</g>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="1246.883" y1="292.218" x2="700.407" y2="292.218"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="1246.883" y1="267.905" x2="700.407" y2="267.905"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="382.239" y1="55.526" x2="350.243" y2="152.519"/>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="368.797" y1="26.519" x2="316.071" y2="166.124"/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M701.379,266.675c-174.754-33.328-350.871-114.961-350.871-114.961"
		/>
	<path fill="none" stroke="#ED2224" stroke-miterlimit="10" d="M703.375,292.218c-191.152-42.531-387.465-127.766-387.465-127.766"
		/>
	<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M712.747,157.515c-153.648-31.371-332-102.477-332-102.477"/>
	<path fill="none" stroke="#ED2224" stroke-miterlimit="10" d="M716.735,134.722C555.879,100.976,368.661,26.933,368.661,26.933"/>
	<line fill="none" stroke="#ED2224" stroke-miterlimit="10" x1="711.833" y1="134.722" x2="1228.555" y2="134.722"/>
	<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="711.833" y1="157.198" x2="1232.543" y2="157.198"/>
	<text transform="matrix(1 0 0 1 659.9014 201.6172)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">BACK WAISTBAND</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">CUT 2</tspan></text>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="262.219" y1="991.71" x2="1018.402" y2="991.71"/>
	<text transform="matrix(0.9655 0 0 1 288.8657 981.5254)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(0.9655 0 0 1 371.1724 1938.5996)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="127.469" y1="1291.585" x2="989.301" y2="1291.585"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="67.266" y1="1205.046" x2="998.004" y2="1205.058"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="358.926" y1="1948.979" x2="926.887" y2="1948.979"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="371.172" y1="2377.909" x2="915.359" y2="2377.909"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="399.652" y1="3292.151" x2="891.75" y2="3292.151"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M319.848,770.847
		c-64.375,403.293-251.953,434.211-251.953,434.211"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="358.926" y1="1948.979" x2="399.652" y2="3290.269"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="926.887" y1="1948.979" x2="891.754" y2="3291.956"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1018.402" y1="991.71" x2="926.887" y2="1948.979"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M67.266,1204.976
		c288.797,356.051,291.66,744.004,291.66,744.004"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1037.969" y1="640.581" x2="319.848" y2="770.847"/>
	<text transform="matrix(0.9922 0 0 1 255.2192 1189.002)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1037.969,640.581
		c-1.648,101.848-19.566,351.129-19.566,351.129"/>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M792.016,802.226c-6.141,0-11.105-5.852-11.105-13.082
				c0-7.234,4.965-13.086,11.105-13.086s11.102,5.852,11.102,13.086C803.117,796.374,798.156,802.226,792.016,802.226z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M801.27,789.144c0-6.031-4.141-10.902-9.254-10.902
				s-9.254,4.871-9.254,10.902s4.141,10.895,9.254,10.895S801.27,795.175,801.27,789.144z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M792.016,797.87c-4.09,0-7.402-3.91-7.402-8.727
				c0-4.82,3.312-8.73,7.402-8.73c4.094,0,7.398,3.91,7.398,8.73C799.414,793.96,796.109,797.87,792.016,797.87z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M797.57,789.144c0-3.617-2.48-6.547-5.555-6.547
				c-3.066,0-5.555,2.93-5.555,6.547s2.488,6.539,5.555,6.539C795.09,795.683,797.57,792.761,797.57,789.144z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M792.016,793.499c-2.039,0-3.699-1.941-3.699-4.355
				s1.66-4.359,3.699-4.359s3.699,1.945,3.699,4.359S794.055,793.499,792.016,793.499z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M793.867,789.144c0-1.203-0.828-2.184-1.852-2.184
				c-1.027,0-1.855,0.98-1.855,2.184c0,1.199,0.828,2.184,1.855,2.184C793.039,791.327,793.867,790.343,793.867,789.144z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="792.016" y1="789.144" x2="792.016" y2="802.226"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="792.016" y1="789.144" x2="802.574" y2="793.183"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="792.016" y1="789.144" x2="798.543" y2="778.565"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="792.016" y1="789.144" x2="785.488" y2="778.565"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="792.016" y1="789.144" x2="781.461" y2="793.183"/>
		</g>
	</g>
	<g>
		<g>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M423.586,830.671c-6.145,0-11.109-5.855-11.109-13.082
				c0-7.23,4.965-13.086,11.109-13.086c6.141,0,11.098,5.855,11.098,13.086C434.684,824.815,429.727,830.671,423.586,830.671z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M432.836,817.589c0-6.027-4.137-10.902-9.25-10.902
				s-9.254,4.875-9.254,10.902c0,6.035,4.141,10.898,9.254,10.898S432.836,823.624,432.836,817.589z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M423.586,826.312c-4.098,0-7.41-3.91-7.41-8.723
				c0-4.816,3.312-8.727,7.41-8.727c4.094,0,7.398,3.91,7.398,8.727C430.984,822.401,427.68,826.312,423.586,826.312z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M429.137,817.589c0-3.613-2.477-6.543-5.551-6.543
				c-3.066,0-5.555,2.93-5.555,6.543s2.488,6.539,5.555,6.539C426.66,824.128,429.137,821.202,429.137,817.589z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M423.586,821.944c-2.039,0-3.699-1.938-3.699-4.355
				s1.66-4.359,3.699-4.359c2.035,0,3.699,1.941,3.699,4.359S425.621,821.944,423.586,821.944z"/>
			<path fill="none" stroke="#010101" stroke-miterlimit="10" d="M425.43,817.589c0-1.199-0.828-2.188-1.844-2.188
				c-1.031,0-1.855,0.988-1.855,2.188c0,1.195,0.824,2.188,1.855,2.188C424.602,819.776,425.43,818.784,425.43,817.589z"/>
		</g>
		<g>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="423.586" y1="817.589" x2="423.586" y2="830.671"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="423.586" y1="817.589" x2="434.141" y2="821.628"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="423.586" y1="817.589" x2="430.109" y2="807.007"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="423.586" y1="817.589" x2="417.059" y2="807.007"/>
			<line fill="none" stroke="#010101" stroke-miterlimit="10" x1="423.586" y1="817.589" x2="413.027" y2="821.628"/>
		</g>
	</g>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="373.254" y1="3367.093" x2="916.578" y2="3367.093"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M296.973,740.835
		C235.875,1169.542,11,1193.19,11,1193.19"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="327.84" y1="1948.573" x2="373.254" y2="3365.202"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="955.758" y1="1948.979" x2="916.578" y2="3365.753"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1046.625" y1="991.71" x2="955.758" y2="1948.979"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M14.188,1193.19
		c310.578,360.547,313.652,753.41,313.652,753.41"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1063.152" y1="607.104" x2="296.973" y2="740.835"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1063.152,604.624
		c-1.395,112.277-16.527,387.086-16.527,387.086"/>
</g>
<g>
	<text transform="matrix(0.9655 0 0 1 1761.3613 982.4551)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(0.9655 0 0 1 1647.4746 1942.9023)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1814.812" y1="587.632" x2="1814.812" y2="990.737"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1815.137" y1="990.737" x2="1101.25" y2="990.737"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" stroke-dasharray="0.8504" x1="1871.051" y1="1290.612" x2="1117.848" y2="1290.612"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1814.934,990.886
		c3.855,183.926,112.223,213.188,112.223,213.188"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1927.156" y1="1204.073" x2="1110.09" y2="1204.085"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1214.406" y1="1948.151" x2="1694.434" y2="1948.151"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1226.68" y1="2376.944" x2="1683.434" y2="2376.944"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1253.062" y1="3291.187" x2="1660.395" y2="3291.187"/>
	<text transform="matrix(0.9922 0 0 1 1779.3789 1199.8872)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1449.305" y1="587.632" x2="1814.812" y2="587.632"/>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1808.198" y1="911.87" x2="1838.754" y2="911.87"/>
			<g>
				<circle cx="1808.331" cy="911.87" r="2.665"/>
			</g>
		</g>
	</g>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1449.305" y1="585.53" x2="1449.305" y2="794.257"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1449.316" y1="794.257" x2="1111.191" y2="790.444"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1214.086" y1="1948.151" x2="1253.062" y2="3291.187"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1694.688" y1="1942.671" x2="1660.395" y2="3291.187"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1101.25,990.737
		c-13.586,247.531,112.836,958.766,112.836,958.766"/>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1923.309,1201.687
		c-215.641,321.547-228.875,746.465-228.875,746.465"/>
	<text transform="matrix(1 0 0 1 1784.1641 759.2871)"><tspan x="0" y="0" fill="#010101" font-family="'Calibri'" font-size="28.3465">C</tspan><tspan x="0" y="34.016" fill="#010101" font-family="'Calibri'" font-size="28.3465">F</tspan></text>
	<g>
		<g>
			
				<line fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" x1="1107.559" y1="1059.007" x2="1077.273" y2="1059.007"/>
			<g>
				<circle cx="1107.426" cy="1059.007" r="2.665"/>
			</g>
		</g>
	</g>
	<path fill="none" stroke="#000000" stroke-width="0.7087" stroke-miterlimit="10" d="M1111.191,790.444
		c-13.469,76.902-9.941,200.293-9.941,200.293"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1233.84" y1="3366.128" x2="1680.156" y2="3366.128"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1838.754" y1="562.636" x2="1838.754" y2="990.737"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1838.754,990.737
		c3.957,177.422,115.152,205.652,115.152,205.652"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1425.164" y1="562.636" x2="1838.754" y2="562.636"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1425.156" y1="562.636" x2="1425.156" y2="766.78"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1425.156" y1="766.78" x2="1090.676" y2="762.968"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1191.137" y1="1947.124" x2="1233.84" y2="3365.065"/>
	
		<line fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" x1="1717.719" y1="1941.644" x2="1680.148" y2="3366.085"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1078.309,990.886
		c-13.594,247.227,112.828,957.59,112.828,957.59"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1953.906,1196.39
		c-222.793,323.395-236.469,750.734-236.469,750.734"/>
	<path fill="none" stroke="#ED2224" stroke-width="0.7087" stroke-miterlimit="10" d="M1090.676,759.245
		c-10.492,90.898-12.367,231.641-12.367,231.641"/>
</g>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="1450.293" y1="1472.048" x2="1450.293" y2="2783.679"/>
		<g>
			<path d="M1443.164,1481.134c0,0.234,0.115,0.463,0.328,0.598c0.328,0.21,0.768,0.113,0.978-0.217l5.823-9.144l5.823,9.144
				c0.21,0.33,0.649,0.427,0.978,0.217c0.33-0.21,0.426-0.651,0.218-0.978l-6.421-10.082c-0.13-0.204-0.355-0.328-0.598-0.328
				s-0.468,0.124-0.598,0.328l-6.421,10.082C1443.199,1480.872,1443.164,1481.004,1443.164,1481.134
				C1443.164,1481.368,1443.164,1481.004,1443.164,1481.134z"/>
		</g>
		<g>
			<path d="M1443.164,2774.595c0-0.234,0.115-0.463,0.328-0.6c0.328-0.211,0.768-0.113,0.978,0.217l5.823,9.145l5.823-9.145
				c0.21-0.33,0.649-0.428,0.978-0.217c0.33,0.211,0.426,0.65,0.218,0.979l-6.421,10.082c-0.13,0.203-0.355,0.328-0.598,0.328
				s-0.468-0.125-0.598-0.328l-6.421-10.082C1443.199,2774.856,1443.164,2774.724,1443.164,2774.595
				C1443.164,2774.36,1443.164,2774.724,1443.164,2774.595z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 1482.793 1619.834)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 1430.6641 2712.875)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">FRONT</tspan><tspan x="78.02" y="0" font-family="'Calibri'" font-size="28.3465"> T</tspan><tspan x="98.242" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="113.377" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="210.916" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="224.473" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
<text transform="matrix(0 -1 1 0 1436.5068 1820.1768)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
<text transform="matrix(0 -1 1 0 1482.793 2712.873)" font-family="'Calibri'" font-size="28.3465">JEANS</text>
<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 1443.2324 2181.0029)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
<g>
	<g>
		
			<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="658.895" y1="1485.382" x2="658.895" y2="2797.013"/>
		<g>
			<path d="M651.766,1494.468c0,0.234,0.115,0.463,0.328,0.598c0.328,0.21,0.768,0.113,0.978-0.217l5.823-9.144l5.823,9.144
				c0.21,0.33,0.649,0.427,0.978,0.217c0.33-0.21,0.426-0.651,0.218-0.978l-6.421-10.082c-0.13-0.204-0.355-0.328-0.598-0.328
				s-0.468,0.124-0.598,0.328l-6.421,10.082C651.801,1494.206,651.766,1494.337,651.766,1494.468
				C651.766,1494.702,651.766,1494.337,651.766,1494.468z"/>
		</g>
		<g>
			<path d="M651.766,2787.929c0-0.234,0.115-0.463,0.328-0.6c0.328-0.211,0.768-0.113,0.978,0.217l5.823,9.145l5.823-9.145
				c0.21-0.33,0.649-0.428,0.978-0.217c0.33,0.211,0.426,0.65,0.218,0.979l-6.421,10.082c-0.13,0.203-0.355,0.328-0.598,0.328
				s-0.468-0.125-0.598-0.328l-6.421-10.082C651.801,2788.19,651.766,2788.058,651.766,2787.929
				C651.766,2787.694,651.766,2788.058,651.766,2787.929z"/>
		</g>
	</g>
</g>
<text transform="matrix(0 -1 1 0 691.3955 1633.168)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
<text transform="matrix(0 -1 1 0 639.2666 2726.207)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">BACK</tspan><tspan x="60.641" y="0" font-family="'Calibri'" font-size="28.3465"> T</tspan><tspan x="80.863" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="95.999" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="193.537" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="207.095" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
<text transform="matrix(0 -1 1 0 645.1094 1833.5107)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
<text transform="matrix(0 -1 1 0 691.396 2726.2051)" font-family="'Calibri'" font-size="28.3465">JEANS</text>
<text transform="matrix(4.489659e-11 -1 1 4.489659e-11 651.835 2194.335)" font-family="'Calibri'" font-size="28.3465">CUT 2</text>
</svg>
`,
    },
    //test
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
