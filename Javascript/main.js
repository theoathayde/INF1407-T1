onload = function(){
    this.document.getElementById("troca").addEventListener("click", change);
    this.document.getElementById("email").addEventListener("input", testa);
    
}


class Character{
    constructor(id, nick){
        this.id = id;
        this.nick = nick;
    }


}

function change(){
    var character = document.getElementById("char");
    character.src = array[parseInt(select.value)];
}



function testa(evento){
    var reg = /^\\[bcdfghjklmnpqrstvwxys]+\[([bcdfghjklmnpqrstvwxys]+\|)+[bcdfghjklmnpqrstvwxys]+\]$/;
    var word = evento.target.value;


    if(!word.toLowerCase().match(reg)){
        button.disabled = true;
        evento.target.style.color = "red";
    }
    else{
        evento.target.style.color = "black";
        button.disabled = false;
    }

}


function comeca(){
    center.style.display="none";
    div2.style.display="block";
    lista.push(new Character(select.value, nome.value));
    console.log(lista);
    if(lista[0].id == 1){
        start.onclick = animate;
        document.onkeydown = animate;
    }
    else{
        start.onclick = animate2;
        document.onkeydown = animate2;
    }
    
}

function animate(evento){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, charPos, 500, spriteWidth, spriteHeight);

    evento = evento || window.event;
    if(evento.keyCode == '37'){
        charPos-=5;
        if(gameFrame % 7 == 0){
            if(frameX >= 4 && frameX < 7){
                frameX++;
            }
            else{
                frameX=5;
            }
        }
        gameFrame++;
        

    }
    else if(evento.keyCode == '39'){
        charPos+=5;
        if(gameFrame % 7 == 0){
            if(frameX < 4){
                frameX++;
            }
            else{
                frameX=1;
            }
        }
        gameFrame++;
        
    }
  
}


function animate2(evento){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(playerImage2, frameX * spriteWidth2, 0, spriteWidth2, spriteHeight, charPos, 500, spriteWidth2, spriteHeight);

    evento = evento || window.event;
    if(evento.keyCode == '37'){
        charPos-=5;
        if(gameFrame % 7 == 0){
            if(frameX >= 3 && frameX < 6){
                frameX++;
            }
            else{
                frameX=4;
            }
        }
        gameFrame++;
        

    }
    else if(evento.keyCode == '39'){
        charPos+=5;
        if(gameFrame % 7 == 0){
            if(frameX < 3){
                frameX++;
            }
            else{
                frameX=1;
            }
        }
        gameFrame++;
        
    }
  
}

function chat(){
    if((inp.value).length <= 70){
        conversa.push(lista[0].nick+":"+" "+inp.value+"<br>");
    }
    else{
        console.log("Texto muito grande");
    }

    if(conversa.length > 20){
        conversa.shift();
    }
    output.innerHTML = conversa.join(' ');
}

//chat variables
var inp = document.getElementById("mensagem");
var clique = document.getElementById("envia").addEventListener("click", chat);
var output = document.getElementById("texto");
var conversa = [];

//divs
const center = document.getElementById("center");
const div2 = document.getElementById("segunda");


//animation
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;
const spriteWidth = 100;
const spriteHeight = 100;
const spriteWidth2 = 65;
var frameX = 0;
var gameFrame = 0;
const staggerFrames = 10;
var charPos = 0;


//animation images
const playerImage = new Image();
playerImage.src = 'images/personagem.png';
const playerImage2 = new Image();
playerImage2.src = 'images/enemymaior.png'



//user
var nome = document.getElementById("nickname");
var lista = [];
var array = ["images/enemy2.png", "images/personagemcolisao1.png"]
var select = document.querySelector("#personagem");



//game entering button
var button = document.getElementById("confirma");
button.disabled = true;
button.addEventListener("click", comeca);

//start player button
var start = document.getElementById("start");