let searchicon = document.querySelector(".icon-search svg")

let searchbar = document.querySelector(".searchbar")

searchicon.addEventListener("click" , 
()=>{
    searchbar.style.display = "flex";
})

function closesearch(e) {
    searchbar.style.display = "none";
}

/////////////////////////////////////////////////////
let closecutom = document.querySelector("#closecustomize")

$('.custmozebutton').click( function () {
    $('.custmozebutton').toggleClass('visable');
    $('.custmize').toggleClass("switch");
})

function closecustomize(e) {
    customize.style.display = "none" ;
    closecutom.style.display="none" ;
    custbutn.style.width= "7vw";
    customize.style
}

/////////////////////////////////////////////////
let secion = document.querySelector(".seccion")

let defaultbox = document.querySelector(".default-color")

let defult = document.querySelector(".defult")

let box1 = document.querySelector("#box1")

let box2 = document.querySelector("#box2")

let box3 = document.querySelector("#box3")

let box4 = document.querySelector("#box4")

let box5 = document.querySelector("#box5")

let box6 = document.querySelector("#box6")

let box7 = document.querySelector("#box7")

let box8 = document.querySelector("#box8")

let box9 = document.querySelector("#box9")

let box10 = document.querySelector("#box10")

defult.addEventListener("click" , ()=>{
    secion.style.background="#faedeb"; 
    defult.style.color ="rgba(0, 0, 0, 10%)";
})

defaultbox.addEventListener("click" , ()=>{
    secion.style.background="#faedeb"; 
    defaultbox.style.border="2px solid blue";
})

box1.addEventListener("click" , ()=>{
    secion.style.background="rgb(142, 67, 240)"; 
    box1.style.border="2px solid blue";
})

box2.addEventListener("click" , ()=>{
    secion.style.background="rgb(217, 7, 0)"; 
    box2.style.border="2px solid blue";
})

box3.addEventListener("click" , ()=>{
    secion.style.background="rgb(255, 106, 151)"; 
    box3.style.border="2px solid blue";
})

box4.addEventListener("click" , ()=>{
    secion.style.background="rgb(255, 122, 61)"; 
    box4.style.border="2px solid blue";
})

box5.addEventListener("click" , ()=>{
    secion.style.background="rgb(249, 195, 73)"; 
    box5.style.border="2px solid blue";
})

box6.addEventListener("click" , ()=>{
    secion.style.background="rgb(48, 199, 181)"; 
    box6.style.border="2px solid blue";
})

box7.addEventListener("click" , ()=>{
    secion.style.background="rgb(79, 86, 85)"; 
    box7.style.border="2px solid blue";
})

box8.addEventListener("click" , ()=>{
    secion.style.background="rgb(6, 117, 46)"; 
    box8.style.border="2px solid blue";
})

box9.addEventListener("click" , ()=>{
    secion.style.background="rgb(47, 193, 255)"; 
    box9.style.border="2px solid blue";
})

box10.addEventListener("click" , ()=>{
    secion.style.background="rgb(8, 74, 243)"; 
        box10.style.border="2px solid blue";    
})
//////////////////////////////////////////////////////////////////
let popp = document.querySelector(".popp")

let font1 = document.querySelector(".font1")

let font2 = document.querySelector(".font2")

let sp = document.querySelector(".sp")

popp.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "poppins" ;
})

font1.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "sigmar" ;
})

font2.addEventListener("click" , ()=>{
    document.body.style.fontFamily= "lora" ;
})
/////////////////////////////////////////////////
let inputDiv = document.querySelector(".input")
let input = document.querySelector(".input input")
let inputBtn = document.querySelector(".input button")
let hiden = document.querySelector(".hiden")


inputBtn.addEventListener("click" , ()=>{

        if (input.value != "" && input.value.includes("@") && input.value.includes(".")) {

            hiden.style.display = "flex"
            inputBtn.style.display = "none";
            inputDiv.innerHTML = "Thanks for signing up for the newsletter! We'll be in touch soon";
        }
    
    else{
        sp.style.display = "block";
    }
    
});