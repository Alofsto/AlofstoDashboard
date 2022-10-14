var OFmenu = document.createElement('div');
OFmenu.id='OFmenu'
OFmenu.innnerHTML='
      <img id="OFlogo" src="https://raw.githubusercontent.com/ItsFoxDev/AlofstoDashboard/main/dashboard.png">
      <button id="AddEmbedButton" onclick="addOfEmbed(); addXbutton();" class="ofbutton embedbutton">Embed</button>
      <button class="ofbutton revpassbutton" onclick="revealPasswords()">Reveal passwords</button>
      <button class="ofbutton titlebutton" onclick="changeTitle()">Change page title</button>
      <button class="ofbutton editbutton" onclick="editPage()">Toggle edit mode</button>
      <button class="ofbutton loadtime" onclick="loadTime()">Page load time</button>
      <button class="ofbutton autoclickbutton" onclick="autoClicker()">Autoclicker</button>
      <!-- <button class="ofbutton autoscrollbutton" onclick="autoScroll();">Autoscroller</button> -->
      <hr class="divider">
      <button class="ofbutton authorbutton" onclick="window.open('https://sites.google.com/view/foxdev/');">Made by FoxDev</button>
      
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
        #OFmenu{position:fixed !important;width:10em;background:rgba(255, 255, 255, 0.84);backdrop-filter:blur(20px);left:10px;top:10px;padding:10px;padding-bottom:7px;border-radius:10px}
        #OFlogo{width:90%;height:auto;margin-bottom:10px !important}
        .ofbutton{margin-bottom:3px; font-size:0.8em;font-family:Poppins;border-radius:7px;width:100%;background:rgba(255, 255, 255, 0.84);border:none;height:2em;text-align:left;background-repeat: no-repeat;background-size: 1.4em;background-position: 0.2em center;text-indent: 1.7em;}
        .embedbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/maximize.svg");}
        .revpassbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/key.svg")}
        .titlebutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/type.svg")}
        .loadtime{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/timer.svg")}
        .editbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/pencil.svg")}
        .autoclickbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mouse-pointer-2.svg")}
        .authorbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/user.svg")}
        .autoscrollbutton{background-image: url("https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/mouse.svg")}
        hr.divider{border-top: 1px solid #ffffff;border-radius: 5px;margin-block-start: 0px;margin-block-end: 3px;}
      </style>
';
document.body.appendChild(OFmenu);
