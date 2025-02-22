let gameseq=[];
let userseq=[];

let GameStarted = false;
let levelcount = 0;

let buttons = ["btn1","btn2","btn3","btn4"]

let h3=document.querySelector("h3");
let h2=document.querySelector("h2");

document.addEventListener("keypress",function (){
    if(GameStarted == false){
        console.log("game is started");
        GameStarted = true;
        h2.innerText="Game Started!!"
        levelup();
    }
})
function levelup(){
    levelcount++;
    h3.innerText=`level ${levelcount}`

    //random colour generating
    let blink = Math.floor(Math.random()*3);
    let randomcolor = buttons[blink];
    let randombutton = document.querySelector(`.${randomcolor}`)
    flash(randombutton);
}

function flash(button){
    
    button.classList.add("flash");
    setTimeout(function (){
        button.classList.remove("flash");
    },100)
}

function userflash(button){
    
    button.classList.add("userflash");
    setTimeout(function (){
        button.classList.remove("userflash");
    },100)
}
function keypressbyuser(){
    let button = this;
    userflash(button);
}

let fourbuttons = document.querySelectorAll(".btn");
for(btn of fourbuttons){
    btn.addEventListener("click",keypressbyuser);
}