
var menu = document.getElementById("sidemenu");
var head = document.getElementById("header");
var total = document.querySelector(".afterside");
function showmenu(){
   
   
    menu.classList.add("active");
    menu.style.left = "0%";
    head.style.opacity = "0.3";
    console.log(total);
    total.style.opacity = "0.3";



}
function closemenu(){
    menu.classList.remove("active");
    menu.style.left = "-100%";
    head.style.opacity = "1";
    total.style.opacity = "1";

}

function movielike(){
    let cards = document.querySelectorAll("#card");
    var num = cards.length-1;
    var chosen = cards[num ];
    var nextcard = cards[num-1];
    chosen.classList.add("likeremove")
    setTimeout(next,200);
}
function dislike(){
    let cards = document.querySelectorAll("#card");
    var num = cards.length-1;
    var chosen = cards[num ];
    var nextcard = cards[num-1];
    chosen.classList.add("dislikeremove")    
    setTimeout(next,200);
}
function next(){
    let cards = document.querySelectorAll("#card");
    var num = cards.length-1;
    var chosen = cards[num ];
    var nextcard = cards[num-1];
    chosen.remove();
    num = num-1;
    if(num >= 0){
        nextcard.style.transform = "scale(1)";

    }
    
    

}

var y = 6;
var x =["b",1,2,5];
for(var i =0 ; i<x.length;i++){
    y+= x[i];
}
console.log(y);

window.addEventListener("load",()=>{
    let cards = document.querySelectorAll("#card");
    var num = cards.length-1;
    var chosen = cards[num];
    chosen.style.transform = "scale(1)";
    
})


let tabheader = document.getElementsByClassName("tab-header")[0];
let tabindicator = document.getElementsByClassName("tab-indicator")[0];
let tabbody = document.getElementsByClassName("tab-body")[0];
let tabsPane = tabheader.getElementsByTagName("div");
for (let i =0 ; i< tabsPane.length; i++){
    
    tabsPane[i].addEventListener("click" , function(){
        if(i==0){
           
        }
        else{
            tabheader.getElementsByClassName("active")[0].classList.remove("active");
            tabsPane[i].classList.add("active");
            tabbody.getElementsByClassName("active")[0].classList.remove("active");
            tabbody.getElementsByTagName("div")[i].classList.add("active");
    
            tabindicator.style.left = "calc(calc(100% / 3 ) *"+ i+ " )";
        }
    });
}



