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
      name: 'SHIRT DRESS PLAN',
      isOpen: false,
      file: ` <?xml version="1.0" encoding="utf-8"?>
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
      _id: '1223433',
      name: 'MRUK12 TROUSER BLOCK',
      isOpen: false,
      file: `<?xml version="1.0" encoding="utf-8"?>
<!-- Generator: Adobe Illustrator 15.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="2267.72px" height="3401.58px" viewBox="0 0 2267.72 3401.58" enable-background="new 0 0 2267.72 3401.58"
	 xml:space="preserve">
<g>
	<text transform="matrix(1.0506 0 0 1 1878.9727 311.6758)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1600.776" y1="278.785" x2="1926.726" y2="278.785"/>
	<text transform="matrix(1 0 0 1.0358 1893.2412 876.6045)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1303.037,246.419
		c94.032,24.443,297.738,32.348,297.738,32.348"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1926.727" y1="278.785" x2="1926.727" y2="888.188"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1927.051" y1="888.188" x2="1218.935" y2="888.188"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1303.418,246.323
		c-78.179,233.613-84.483,642.402-84.483,642.402"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1643.399" y1="278.719" x2="1643.399" y2="888.354"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1685.841" y1="278.552" x2="1643.481" y2="577.952"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1601.056" y1="278.678" x2="1643.353" y2="578.051"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M2038.165,1099.802
		c-166.439,289.146-188.893,738.058-188.893,738.058"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" stroke-dasharray="0.85,0.85" x1="1994.693" y1="1185.634" x2="1224.648" y2="1185.639"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1926.85,888.336
		c3.824,182.433,111.314,211.466,111.314,211.466"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1296.713" y1="1837.858" x2="1339.238" y2="3170.033"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="2038.165" y1="1099.802" x2="1218.289" y2="1099.806"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1218.935" y1="888.725" x2="1218.935" y2="1099.806"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1296.713" y1="1837.858" x2="1849.273" y2="1837.858"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1311.875" y1="2263.186" x2="1833.293" y2="2263.186"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1833.293" y1="2263.186" x2="1806.745" y2="3170.033"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1849.273" y1="1837.858" x2="1833.293" y2="2263.186"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1218.935,1099.806
		c18.237,316.886,77.777,738.053,77.777,738.053"/>
	<text transform="matrix(1 0 0 1.0358 1761.5645 2251.7783)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CALF</text>
	<text transform="matrix(1 0 0 1.0358 1810.4678 1826.6904)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	
		<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="1504.395" y1="1224.414" x2="1504.395" y2="2238.46"/>
	<path d="M1497.264,1233.502c0,0.234,0.116,0.463,0.328,0.599c0.329,0.21,0.768,0.112,0.979-0.218l5.824-9.145l5.824,9.145
		c0.211,0.33,0.649,0.428,0.979,0.218c0.329-0.211,0.425-0.652,0.217-0.979l-6.422-10.084c-0.13-0.204-0.356-0.328-0.599-0.328
		s-0.468,0.124-0.598,0.328l-6.422,10.084C1497.3,1233.24,1497.264,1233.372,1497.264,1233.502
		C1497.264,1233.736,1497.264,1233.372,1497.264,1233.502"/>
	<path d="M1497.264,2229.373c0-0.234,0.116-0.463,0.328-0.6c0.329-0.21,0.768-0.111,0.979,0.219l5.824,9.145l5.824-9.145
		c0.211-0.33,0.649-0.429,0.979-0.219c0.329,0.211,0.425,0.651,0.217,0.979l-6.422,10.084c-0.13,0.204-0.356,0.328-0.599,0.328
		s-0.468-0.124-0.598-0.328l-6.422-10.084C1497.3,2229.635,1497.264,2229.503,1497.264,2229.373
		C1497.264,2229.139,1497.264,2229.503,1497.264,2229.373"/>
	<text transform="matrix(0 -1 1 0 1536.8975 1373.9033)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
	<text transform="matrix(0 -1 1 0 1490.6113 2207.4551)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">F</tspan><tspan x="13.024" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="28.161" y="0" font-family="'Calibri'" font-size="28.3465">ONT T</tspan><tspan x="99.263" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="114.399" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="211.938" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="225.494" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
	<text transform="matrix(0 -1 1 0 1490.6113 1582.248)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
	<text transform="matrix(1 0 0 1.0358 1908.4062 1089.3564)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1339.238" y1="3170.395" x2="1806.745" y2="3170.395"/>
</g>
<g>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="371.958" y1="888.909" x2="1117.937" y2="888.909"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="826.258" y1="226.076" x2="504.454" y2="174.257"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1125.357,241.456
		c-96.723,9.184-299.095-15.397-299.095-15.397"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="504.454" y1="174.257" x2="421.211" y2="691.214"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="742.106" y1="213.222" x2="718.502" y2="626.251"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="825.785" y1="226.871" x2="718.608" y2="626.406"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="784.052" y1="219.977" x2="676.264" y2="889.371"/>
	<text transform="matrix(1 0 0 1.0358 420.9951 881.668)" fill="#010101" font-family="'Calibri'" font-size="28.3465">HL</text>
	<text transform="matrix(1 0 0 1.0358 448.9858 1830.2197)" fill="#010101" font-family="'Calibri'" font-size="28.3465">KL</text>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M184.176,1113.479
		c219.353,284.012,248.943,724.957,248.943,724.957"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" stroke-dasharray="0.85,0.85" x1="233.827" y1="1186.356" x2="1103.482" y2="1186.36"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1070.898" y1="1838.436" x2="1028.762" y2="3170.755"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="215.624" y1="1100.523" x2="1106.712" y2="1100.527"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1106.066,1100.527
		c-8.246,316.824-35.169,737.908-35.169,737.908"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="433.118" y1="1838.436" x2="1070.898" y2="1838.436"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="448.983" y1="2263.908" x2="1055.851" y2="2263.908"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="448.983" y1="2263.908" x2="475.56" y2="3170.756"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="433.118" y1="1838.436" x2="448.983" y2="2263.908"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M420.998,691.18
		c-60.511,392.235-236.822,422.298-236.822,422.298"/>
	
		<line fill="none" stroke="#000000" stroke-width="1.417" stroke-miterlimit="10" x1="834.873" y1="1220.917" x2="834.873" y2="2234.963"/>
	<path d="M827.742,1230.005c0,0.234,0.116,0.463,0.328,0.6c0.329,0.21,0.768,0.112,0.979-0.218l5.824-9.145l5.824,9.145
		c0.211,0.33,0.649,0.428,0.979,0.218c0.329-0.211,0.425-0.651,0.217-0.979l-6.422-10.084c-0.13-0.204-0.356-0.328-0.598-0.328
		c-0.242,0-0.468,0.124-0.598,0.328l-6.422,10.084C827.778,1229.743,827.742,1229.875,827.742,1230.005
		C827.742,1230.239,827.742,1229.875,827.742,1230.005"/>
	<path d="M827.742,2225.876c0-0.234,0.116-0.463,0.328-0.6c0.329-0.21,0.768-0.111,0.979,0.219l5.824,9.145l5.824-9.145
		c0.211-0.33,0.649-0.429,0.979-0.219c0.329,0.211,0.425,0.652,0.217,0.979l-6.422,10.084c-0.13,0.204-0.356,0.328-0.598,0.328
		c-0.242,0-0.468-0.124-0.598-0.328l-6.422-10.084C827.778,2226.138,827.742,2226.006,827.742,2225.876
		C827.742,2225.642,827.742,2226.006,827.742,2225.876"/>
	<text transform="matrix(0 -1 1 0 867.373 1370.4053)" fill="#9A9899" font-family="'Calibri'" font-size="28.3465">BCSizing ©</text>
	
		<text transform="matrix(1.0399 0.1495 -0.1423 0.9898 513.7051 200.1729)" fill="#010101" font-family="'Calibri'" font-size="28.3465">WL</text>
	<text transform="matrix(0 -1 1 0 821.084 2203.957)"><tspan x="0" y="0" font-family="'Calibri'" font-size="28.3465">B</tspan><tspan x="15.164" y="0" font-family="'Calibri'" font-size="28.3465">A</tspan><tspan x="31.367" y="0" font-family="'Calibri'" font-size="28.3465">CK T</tspan><tspan x="81.43" y="0" font-family="'Calibri'" font-size="28.3465">R</tspan><tspan x="96.566" y="0" font-family="'Calibri'" font-size="28.3465">OUSER L</tspan><tspan x="194.104" y="0" font-family="'Calibri'" font-size="28.3465">E</tspan><tspan x="207.66" y="0" font-family="'Calibri'" font-size="28.3465">G</tspan></text>
	<text transform="matrix(1 0 0 1.0358 407.251 1091.1709)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CL</text>
	<text transform="matrix(1 0 0 1.0358 462.2598 2252.0273)" fill="#010101" font-family="'Calibri'" font-size="28.3465">CALF</text>
	<text transform="matrix(0 -1 1 0 821.0869 1570.749)" font-family="'Calibri'" font-size="28.3465">MRUK12 - MRUS8 - MREU38</text>
	<text transform="matrix(0.9808 0.1947 -0.1947 0.9808 473.6245 457.6982)" font-family="'MyriadPro-Regular'" font-size="35.9999">C</text>
	<text transform="matrix(0.9808 0.1947 -0.1947 0.9808 465.2114 500.0703)" font-family="'MyriadPro-Regular'" font-size="35.9999">B</text>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="1117.937" y1="888.909" x2="1106.066" y2="1100.527"/>
	<path fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" d="M1125.357,241.456
		c33.607,216.603-7.422,647.454-7.422,647.454"/>
	
		<line fill="none" stroke="#000000" stroke-width="0.709" stroke-miterlimit="10" x1="475.56" y1="3171.117" x2="1028.762" y2="3171.117"/>
</g>
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
