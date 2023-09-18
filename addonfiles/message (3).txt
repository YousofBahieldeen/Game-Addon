let Fuel = false
let fuel_amount = 1000;
let max_fuel = 55000;
let hundred = 100;
let fuel_precent = 0;
var timer;
const fuel_taken = 1;
let checkEngine = 0;
var close1;
var close2;
var close3;
var isFuelDumping = false;
var fuelTake = 0.3;
// time to add some sounds
let announcement_sound = new Audio("https://raw.githubusercontent.com/YousofBahieldeen/GeoFS-Sounds/main/airplane-ding-dong-sound-effect.mp3");
// YOU BETTER BUTTER YOUR LANDING
let landing_butter = new Audio("https://raw.githubusercontent.com/YousofBahieldeen/GeoFS-Sounds/main/butter-by-swiss001-(decent-version)-made-with-Voicemod-technology.mp3");
let fuel_warn = new Audio("https://raw.githubusercontent.com/YousofBahieldeen/GeoFS-Sounds/main/emergency-alarm-with-reverb-29431.mp3");



function butter(){
    if (landing_butter.paused){
    landing_butter.play();
    }else {
      landing_butter.pause();
    }
}

if (geofs.aircraft.instance.parts.engine1.thrust = 120000){
      checkEngine += 1;
}
function announcement(){
    announcement_sound.play();
}

if (geofs.aircraft.instance.parts.engine2.thrust = 120000){
    checkEngine += 1;
        
}

function closeEngineOne(){
    audio.playShutdown(); 
    geofs.aircraft.instance.parts.engine1.thrust = 0;
    if (fuelTake == 0.25){
        fuelTake = 0;
    }else {
        fuelTake = 0.25;
    }
    closeEngineTwo = true;

}


function startEngineOne(){
    audio.playStartup();
    geofs.aircraft.instance.parts.engine1.thrust = 120000;
    takefuel();
    if (fuelTake == 0){
        fuelTake = 0.25;
    }else {
        if (fuelTake == 0.25){
            fuelTake = 0.3;
        }
    }
}


function startEngineTwo(){
    audio.playStartup();
    geofs.aircraft.instance.parts.engine2.thrust = 120000;
    
}
function closeEngineTwo(){
    audio.playShutdown();
    geofs.aircraft.instance.parts.engine2.thrust = 0;
    if (fuelTake == 0.25){
        fuelTake = 0;
    }else {
        fuelTake = 0.25;
    }
    closeEngineOne = true;
}
if (geofs.aircraft.instance.parts.engine2.thrust = 0){

}
function closeBoth(){
    audio.playShutdown();
    geofs.aircraft.instance.parts.engine2.thrust = 0;
    geofs.aircraft.instance.parts.engine1.thrust = 0;
    audio.volume = 0;
    closeBoth = true;
    clearInterval(timer);
}

function engineStartCheck1(){
    if (fuel_amount > 0){
        audio.playStartup();
        geofs.aircraft.instance.parts.engine1.thrust = 120000;
        takefuel();
        if (fuelTake == 0){
            fuelTake = 0.25;
        }else {
            if (fuelTake == 0.25){
                fuelTake = 0.3;
            }
    }
    }else {
        ui.notification.show("Out Of Fuel!")
    }
}
function warn(){
  fuel_warn.play();
}
function engineStartCheck2(){
    if (fuel_amount > 0){
        audio.playStartup();
        geofs.aircraft.instance.parts.engine2.thrust = 120000;
        takefuel();
        if (fuelTake == 0){
            fuelTake = 0.25;
        }else {
            if (fuelTake == 0.25){
                fuelTake = 0.3;
            }
    }
    }else {
        ui.notification.show("Out Of Fuel!")
    }
    
}

(function(){
    checkEngineClose = setInterval(() => {
        if (closeBoth == true){
            mute = setInterval(() => {
                audio.mute();
            }, 10);
        }else {
            if(closeEngineOne == true && closeEngineTwo == true){
                mute = setInterval(() => {
                    audio.mute();
                }, 10);
            }else {
                clearInterval(mute)
            }
        }
    }, 20);
})
// Time to add a fuel system
// I have to say this works pretty well

function fuelAdd(showPounds){
    if (fuel_amount >= max_fuel || fuel_amount >= 54000){
        console.log("You have reached the max fuel a plane could take!");
        ui.notification.show("You have reached the max fuel a plane could take!");
    }else {
        if (geofs.animation.values.altitude <= 200){
            function showPounds(){
            document.getElementById("show_pre").innerText = "Fuel Amount: "+Math.round((100 * fuel_amount) / max_fuel) + "%";
            }
            showPounds();
            fuel_amount += 1000;

            Fuel = true;
            console.log(fuel_amount);
            function takefuel(){
                (function(){
                    var sec = 0;
                    timer = setInterval(() => {

                    if (fuel_amount == 0 || fuel_amount < 1 && fuel_amount > 0.9) {
                        closeBoth();
                        fuel_amount = 0;
                        showPounds();
                        fuel_warn.play();
                        clearInterval(timer);
                    } else {
                        // Low Fuel Warning 
                        if (fuel_amount <= 7000 && fuel_amount >= 6950) {
                        fuel_warn.play();
                        warning();
                        }
                        fuel_amount -= fuelTake;
                        showPounds();
                    }
                    sec++;
                    }, 1000)
                })()
            }
            takefuel();
        }else {
            if (geofs.animation.values.altitude >= 200){
                document.getElementById("fuel_button").style.display = 'none';
            }
        }
    }
}



// This panel was made by NVB9 go check him out 
// https://www.github.com/NVB9ALT
// It was modified by Yousof

let a320panel = document.createElement("div");
a320panel.innerHTML = '<ul class="geofs-list geofs-toggle-panel geofs-autoland-list geofs-preferences" data-noblur="true" data-onshow="{geofs.initializePreferencesPanel()}" data-onhide="{geofs.savePreferencesPanel()}"><style>#MainDIV {position: absolute;left: 0px;top: 0px;background-color: white;border: 5px solid #000000;text-align: center;padding: 0px 10px 10px 10px;}#DIVtitle {color: black;font-family: monospace;font-weight: bold;font-size: 20px;}p {color: black;font-family: monospace;font-weight: bold;}.button {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: black;background-color: #ffc107;border: none;border-radius: 1px;box-shadow: 0 0px #999;}.button2 {display: inline-block}.button:hover {background-color: #536dfe}.button:active {opacity: 0.6;}.button3 {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: #536dfe;border: none;border-radius: 1px;box-shadow: 0 0px #999;}.button4 {display: inline-block;padding: 3px 24px;font-size: 15px;cursor: pointer;text-align: center;text-decoration: none;outline: none;color: #fff;background-color: red;border: none;border-radius: 1px;box-shadow: 0 0px #999;}</style><div id="MainDIV"><p id="DIVtitle">Plane Panel</p><p>Engines:</p><button class="button", id="leftstart" onclick="engineStartCheck1()">Start Engine One</button><button class = "button" id="rightstart" onclick="engineStartCheck2()">Start Engine Two</button><button onclick="closeEngineOne()" class = "button">Stop Engine One</button><button onclick="closeEngineTwo()" class = "button">Stop Engine Two</button><p>Fuel Systems:</p><button class = "button" id="show_pre">Fuel Amount: 0%</button><button class = "button" onclick = "fuelAdd()" id="fuel_button">Add Fuel</button><p>Sound Effects:</p><button class = "button" id="PFDtoggle" onclick = "announcement()">Passenger Ding</button><button class = "button" id="PFDtoggle" onclick = "butter()">Butter Song</button><p>Other:</p><button class = "button" id="dumpFuel" onclick = "warning()">Comming Soon</button></div></ul>'

let sidePanel = document.getElementsByClassName("geofs-ui-left")[0]
document.getElementsByClassName("geofs-ui-left")[0].appendChild(a320panel)

// Toggle Button Code
let buttonDiv = document.createElement("div");
buttonDiv.innerHTML = '<button class="mdl-button mdl-js-button geofs-f-standard-ui geofs-mediumScreenOnly" data-toggle-panel=".geofs-autoland-list" data-tooltip-classname="mdl-tooltip--top" id="landButton" tabindex="0" data-upgraded=",MaterialButton">GeoFS Plane Panel</button>'
document.body.appendChild(buttonDiv);
document.getElementsByClassName("geofs-ui-bottom")[0].appendChild(buttonDiv);
let element = document.getElementById("landButton");
document.getElementsByClassName("geofs-ui-bottom")[0].insertBefore(element, buttonDiv);



