
function addOfEmbed() {
  var ofembed = document.createElement("iframe"); 
  ofembed.id = "ofEmbed"; 
  ofembed.src=prompt('What site do you want to visit?', 'https://');
  ofembed.style='top:5%;left:5%;right:5%;bottom:5%;position:fixed;width:90%;height:90%;z-index:50000;boxShadow:rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px'; 
  document.body.appendChild(ofembed);
}
function addXbutton() {
  var closebutton = document.createElement('button');
  closebutton.id='closeOfEmbed';
  closebutton.style = 'position:fixed;right:2.5%;top:2.5%;z-index:50001;border:none;border-radius:10px;background-color:#ffffff;position:absolute;background-repeat:no-repeat;background-size:25px;background-position:center;width:30px;height:30px;background-image:url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/x.svg")';
  //closebutton.onclick="alert('hi')
  closebutton.onclick = function() {var rem = document.getElementById('ofEmbed'); rem.remove(); this.remove();};
  document.body.appendChild(closebutton);
}
function changeTitle() {
  newtitle=prompt('Enter the new page title','');
  document.querySelector('title').textContent = newtitle;
}
function loadTime() {
  const t=window.performance&&performance.timing;if(!t){return}const loadTime=(t.loadEventEnd-t.navigationStart)/1000;
  alert(`This page took ${loadTime} seconds to load.`)
}
function editPage() {
  document.body.contentEditable=(document.body.contentEditable !== 'true' ? 'true' : 'false');
}
function revealPasswords() {
  var s,F,j,f,i;s='';
  F=document.forms;
  for(j=0;j<F.length;++j){f=F[j];
    for(i=0;i<f.length;++i){if(f[i].type.toLowerCase()=='password')s+=f[i].value+'n';}}
  if(s)alert('Passwords on this page:nn'+s);
  else alert('There are no passwords in forms on this page.');
}
/* function autoScroll(){
  alert('Controls:\n[-] Decrease speed\n[+] Increase speed\n[0] Pause scrolling\n[q] Quit autoscroll');
  var _ss_interval_pointer;_ss_speed=1;_ss_speed_pairs=[[0,0],[1,200.0],[1,120.0],[1,72.0],[1,43.2],[1,25.9],[2,31.0],[4,37.2],[8,44.8],[8,26.4],[16,32.0]];
  _ss_last_onkeypress = document.onkeypress;_ss_stop=function(){clearTimeout(_ss_interval_pointer)};
  _ss_start=function(){_ss_abs_speed=Math.abs(_ss_speed);_ss_direction=_ss_speed/_ss_abs_speed;
  _ss_speed_pair=_ss_speed_pairs[_ss_abs_speed];_ss_interval_pointer=setInterval(%27scrollBy(0,%27+_ss_direction*_ss_speed_pair[0]+%27);
  if((scrollY<=1)||(scrollY==document.height-innerHeight)) _ss_speed=0;%27,_ss_speed_pair[1]);};_ss_adj=function(q){_ss_speed+=q;
  if(Math.abs(_ss_speed)>=_ss_speed_pairs.length)_ss_speed=(_ss_speed_pairs.length-1)*(_ss_speed/Math.abs(_ss_speed))};_ss_quit=function(){_ss_stop();
  document.onkeypress=_ss_last_onkeypress;};document.onkeypress=function(e){if((e.charCode==113)||(e.keyCode==27)){_ss_quit();return;};if(e.charCode>=48&&e.charCode<=57)_ss_speed=e.charCode-48;
  else switch(e.charCode){case 95:_ss_adj(-2);case 45:_ss_adj(-1);break;case 43:_ss_adj(2);case 61:_ss_adj(1);break;};_ss_stop();_ss_start();};_ss_stop();_ss_start();
}; */
function removeOfEmbed() {
          var rem=document.getElementById('ofEmbed'); 
          rem.remove();
  this.remove();
}
function autoClicker() {
  var DELAY = 1;
  var autoClickerStyleElement = document.createElement('style');
  autoClickerStyleElement.innerHTML='*{cursor: crosshair !important;}';
  document.body.appendChild(autoClickerStyleElement);
  function addClicker(e) {
    if(!e.isTrusted) {
      return;
    }
    if(e.target.classList.contains('auto-clicker-target')) {
      e.target.classList.remove('auto-clicker-target');
    } else {
      e.target.classList.add('auto-clicker-target');
    }
    document.body.removeChild(autoClickerStyleElement);
    document.body.removeEventListener('click', addClicker);
    e.preventDefault();
    autoClick(e.target);
  }
  function autoClick(element) {
    if(element.classList.contains('auto-clicker-target')) {
      element.click();
      setTimeout(function(){
        autoClick(element);
      }, DELAY);
    }
  }
  document.body.addEventListener('click', addClicker, 0);
}
