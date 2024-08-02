class Figura{
    constructor(x,y,w,h,r,g,b){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    getX(){
        return this.x;
    }

    setX(x){
        this.x = x;
    }

    getY(){
        return this.y;
    }

    setY(y){
        this.y = y;
    }

    getW(){
        return this.w;
    }

    setW(W){
        this.w = W;
    }

    getH(){
        return this.h;
    }

    setH(h){
        this.h = h;
    }

    getR(){
        return this.r;
    }

    setR(x){
        this.r = x;
    }

    getG(){
        return this.g;
    }

    setG(x){
        this.g = x;
    }
    
    getB(){
        return this.b;
    }

    setB(b){
        this.b = b;
    }

    imprime(){
        console.log(this.getX());
        console.log(this.getY());
        console.log(this.getW());
        console.log(this.getH());
        console.log(this.getR());
        console.log(this.getG());
        console.log(this.getB());
    }

    dibuja(){
        var x = this.getX();
        var y = this.getY();
        var w = this.getW();
        var h = this.getH();
        var r = this.getR();
        var g = this.getG();
        var b = this.getB();
        var c = document.querySelector("canvas");
        var contexto = c.getContext("2d");
        var color = "RGB("+r+","+g+","+b+")"
        contexto.fillStyle = color;
        contexto.fillRect(x,y,w,h);
    }

    lienzoRandom(){
        R=getRandomInt(0,256);
        G=getRandomInt(0,256);
        B=getRandomInt(0,256);
        document.getElementById("txt1").setAttribute('value',R);
        document.getElementById("txt2").setAttribute('value',G);
        document.getElementById("txt3").setAttribute('value',B);
        document.getElementById("txt1").setAttribute("class","secreto");
        document.getElementById("txt2").setAttribute("class","secreto");
        document.getElementById("txt3").setAttribute("class","secreto");
        document.getElementById("txtE1").setAttribute("class","secreto");
        document.getElementById("txtE2").setAttribute("class","secreto");
        document.getElementById("txtE3").setAttribute("class","secreto");
        this.setR(R);
        this.setG(G);
        this.setB(B);
        this.dibuja();
    }

    colorearR(R){
        this.setR(R);
        this.dibuja();
    }
    colorearG(G){
        this.setG(G);
        this.dibuja();
    }
    colorearB(B){
        this.setB(B);
        this.dibuja();
    }
}

function LienzoRandom(){
    lienzo2.lienzoRandom();
}

function CalcularE(){
    var R = lienzo1.getR();
    var G = lienzo1.getG();
    var B = lienzo1.getB();
    var R2 = lienzo2.getR();
    var G2 = lienzo2.getG();
    var B2 = lienzo2.getB();
    var E = (Math.abs(R2-R)/255)*100
    var E2 = (Math.abs(G2-G)/255)*100
    var E3 = (Math.abs(B2-B)/255)*100
    E = E.toFixed(1)
    E2 = E2.toFixed(1)
    E3 = E3.toFixed(1)
    document.getElementById("txt1").setAttribute("class","revelar");
    document.getElementById("txt2").setAttribute("class","revelar");
    document.getElementById("txt3").setAttribute("class","revelar");
    document.getElementById("txtE1").setAttribute("class","revelar");
    document.getElementById("txtE3").setAttribute("class","revelar");
    document.getElementById("txtE2").setAttribute("class","revelar");
    document.getElementById("txtE1").setAttribute("value",E+"%")
    document.getElementById("txtE2").setAttribute("value",E2+"%")
    document.getElementById("txtE3").setAttribute("value",E3+"%")
}

function FondoB() {
    document.getElementById("b1").setAttribute("class","body2");
}

function FondoN() {
    document.getElementById("b1").setAttribute("class","body");
}

function Deslizador(){
    document.addEventListener("input", function(evt) {
    var input = evt.target;
        actualizarInput(input)
    });
    for( input of document.querySelectorAll("input[type=range]")){
        actualizarInput(input) 
    }
}

function actualizarInput(input){
    var v = 0;
    var label = input.parentElement.querySelector("label");
    label.innerHTML = input.value;
    var inputMin = input.getAttribute("min");
    var inputMax = input.getAttribute("max");
    var unidad = (inputMax - inputMin) / 100;
    input.style.setProperty("--value", (input.value - inputMin)/unidad);
    if(input.getAttribute("id")=="r1"){
        v = parseInt(input.value);
        R=v;
        lienzo1.colorearR(R);
    }
    if(input.getAttribute("id")=="r2"){
        v = parseInt(input.value);
        R=v;
        lienzo1.colorearG(R);
    }
    if(input.getAttribute("id")=="r3"){
        v = parseInt(input.value);
        R=v;
        lienzo1.colorearB(R);
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


'use strict';

R=getRandomInt(0,256);
G=getRandomInt(0,256);
B=getRandomInt(0,256);
document.getElementById("txt1").setAttribute('value',R);
document.getElementById("txt2").setAttribute('value',G);
document.getElementById("txt3").setAttribute('value',B);

var lienzo1 = new Figura(20,20,600,400,0,0,0);
var lienzo2 = new Figura(670,20,600,400,R,G,B);

lienzo1.dibuja();
lienzo2.dibuja();

Deslizador();
