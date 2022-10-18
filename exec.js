var OFmenu = document.createElement('div');
OFmenu.id='OFmenu';
OFmenu.setAttribute('style', 'position:fixed !important;width:10em;background:rgba(255, 255, 255, 0.84);backdrop-filter:blur(20px);left:10px;top:10px;padding:10px;padding-bottom:7px;border-radius:10px;z-index:9999999998')
document.body.appendChild(OFmenu);
function createOfButton(title, lucideID, setOnClick){
  var createOfButton=document.createElement('button');
  createOfButton.setAttribute("class", "ofbutton");
  createOfButton.setAttribute("onClick", setOnClick);
  createOfButton.style='z-index:9999999999;margin-bottom:3px; font-size:0.8em;font-family:Poppins;border-radius:7px;width:100%;background:rgba(255, 255, 255, 0.84);border:none;height:2em;text-align:left;background-repeat: no-repeat;background-size: 1.4em;background-position: 0.2em center;text-indent: 1.7em;background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/' + lucideID + '.svg")'
  createOfButton.innerHTML=title;
  OFmenu.appendChild(createOfButton);
}
var PoppinsFont = document.createElement('style');
PoppinsFont.innerHTML='@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap");'
OFmenu.appendChild(PoppinsFont);

var OFimg = document.createElement('img');
OFimg.src='https://raw.githubusercontent.com/Alofsto/AlofstoDashboard/main/img/dashboard.png';
OFimg.style='width:90%;height:auto;margin-bottom:10px !important';
OFmenu.appendChild(OFimg);

createOfButton('Embed', 'maximize', "var ofembed = document.createElement('iframe'); ofembed.id = 'ofEmbed'; ofembed.src=prompt('What site do you want to visit?', 'https://');ofembed.style='top:5%;left:5%;right:5%;bottom:5%;position:fixed;width:90%;height:90%;z-index:50000;boxShadow:rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px'; document.body.appendChild(ofembed);var closebutton = document.createElement('button');closebutton.id='closeOfEmbed';closebutton.style = 'position:fixed;right:2.5%;top:2.5%;z-index:50001;border:none;border-radius:10px;background-color:#ffffff;position:absolute;background-repeat:no-repeat;background-size:25px;background-position:center;width:30px;height:30px;background-image:url(https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/x.svg)';closebutton.onclick = function() {var rem = document.getElementById('ofEmbed'); rem.remove(); this.remove();};document.body.appendChild(closebutton);");
createOfButton('Reveal Passwords', 'key', "var s,F,j,f,i;s='';F=document.forms;for(j=0;j<F.length;++j){f=F[j];for(i=0;i<f.length;++i){if(f[i].type.toLowerCase()=='password')s+=f[i].value+'n';}}if(s)alert('Passwords on this page:nn'+s);else alert('There are no passwords in forms on this page.');");
createOfButton('Change page title', 'type', "newtitle=prompt('Enter the new page title','');document.querySelector('title').textContent = newtitle;");
createOfButton('Toggle page edit', 'pencil', "document.body.contentEditable=(document.body.contentEditable !== 'true' ? 'true' : 'false');");
createOfButton('Page load time', 'timer', 'const t=window.performance&&performance.timing;if(!t){return}const loadTime=(t.loadEventEnd-t.navigationStart)/1000;alert(`This page took ${loadTime} seconds to load.`)')
createOfButton('Autoclicker', 'mouse', "var DELAY = 1;var autoClickerStyleElement = document.createElement('style');autoClickerStyleElement.innerHTML='*{cursor: crosshair !important;}';document.body.appendChild(autoClickerStyleElement);function addClicker(e) {if(!e.isTrusted) {return;}if(e.target.classList.contains('auto-clicker-target')) {e.target.classList.remove('auto-clicker-target');} else {e.target.classList.add('auto-clicker-target');}document.body.removeChild(autoClickerStyleElement);document.body.removeEventListener('click', addClicker);e.preventDefault();autoClick(e.target);}function autoClick(element) {if(element.classList.contains('auto-clicker-target')) {element.click();setTimeout(function(){autoClick(element);}, DELAY);}}document.body.addEventListener('click', addClicker, 0);")
var divide = document.createElement('hr');divide.style='border-top: 1px solid #ffffff;border-radius: 5px;margin-block-start: 0px;margin-block-end: 3px';OFmenu.appendChild(divide);
createOfButton('Made by FoxDev', 'user', "window.open('https://sites.google.com/view/foxdev/');")
