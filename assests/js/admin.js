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