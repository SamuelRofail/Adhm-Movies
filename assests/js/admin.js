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

let genre = document.querySelectorAll(".genreEdit");



function edit(){
    var inputs = document.querySelectorAll(".editing");

    var btns = document.querySelectorAll(".editor");
    for(var i =0 ; i< btns.length ; i++){
        btns[i].style.display = "block";
    }
    for(var x = 0 ; x< inputs.length; x++){
        inputs[x].removeAttribute("disabled");
        inputs[x].style.border = "1px solid #000";
    }
    for (let z =0 ; z< genre.length; z++){
        genre[z].style.cursor ="pointer";
    }
}

function addkind(){
    var newkind = window.prompt();
    var span = document.createElement("span");
    span.setAttribute("class", "badge bg-secondary text-light genreEdit");
    span.innerText = newkind;
    var genre = document.getElementById("movie-kind");
    genre.insertAdjacentElement("afterbegin", span);
}
function addgenre(){
    var newkind = window.prompt();
    var span = document.createElement("span");
    span.setAttribute("class", "badge bg-secondary text-light genreEdit");
    span.innerText = newkind;
    var genre = document.getElementById("movie-genre");
    genre.insertAdjacentElement("afterbegin", span);

    


}

function addrole(){
    var cast = document.getElementById("roles");
    console.log(cast);
    var e = document.createElement("div");
    e.setAttribute("class", "col-6")
    e.innerHTML = "<input type='text'  value='الدور:' class='editing'><input type='text'  value='actor name' class='editing'>";
    cast.insertAdjacentElement("beforeend", e);


}
for (let i =0 ; i< genre.length; i++){
    
    genre[i].addEventListener("click" , function(){
        if(genre[i].style.cursor == "pointer"){
            if(confirm("You will Remove a Genre") == true)
            genre[i].remove();
        }
        else{
            console.log(genre[i]);

        }
        
        

    });
}