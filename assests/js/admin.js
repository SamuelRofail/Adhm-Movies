function adminmenu(){
    var menu = document.getElementById("admin-menu");
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        menu.style.left = "-100%";
    }
    else{
        menu.classList.add("active");
        menu.style.left = "0";


    }
}


let tabheader = document.getElementsByClassName("movie-header")[0];
let tabindicator = document.getElementsByClassName("movie-indecator")[0];
let tabbody = document.getElementsByClassName("movie-tabs")[0];
let tabsPane = tabheader.getElementsByTagName("div");
for (let i =0 ; i< tabsPane.length; i++){
    
    tabsPane[i].addEventListener("click" , function(){
        tabheader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabbody.getElementsByClassName("active")[0].classList.remove("active");
        tabbody.getElementsByTagName("div")[i].classList.add("active");
        
        if(i == 0){
            tabindicator.style.left = "calc(100% / 2.85 )";
            document.getElementById("editbutton").style.display = "none"
        }
        else{
            tabindicator.style.left = "calc(calc(100% / 2 ) *"+ i+ " )";
            document.getElementById("editbutton").style.display = "block"

        }
        
    });
}







let genre = document.querySelectorAll(".genreEdit");



function edit(){
    var inputs = document.querySelectorAll(".editing");
    for(var x = 0 ; x< inputs.length; x++){
        inputs[x].removeAttribute("disabled");
        inputs[x].style.border = "3px solid #000";
    }
}


