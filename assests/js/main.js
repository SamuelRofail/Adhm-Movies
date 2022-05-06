function showmenu(){
    var menu = document.getElementById("sidemenu");
    if (menu.classList.contains("active")){
        menu.classList.remove("active");
        menu.style.left = "-100%";

    }
    else {
        menu.classList.add("active");
        menu.style.left = "0%";
    }
}
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


