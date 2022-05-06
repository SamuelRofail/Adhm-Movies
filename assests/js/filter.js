function openselect(num){
    var select = document.querySelectorAll("#select")[num];
    var menu = select.querySelectorAll("ul")[0];
    var list = menu.querySelectorAll("li");
    var listcount = list.length;
    var chosen = select.querySelector("#selected");
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
        menu.style.height = "50px";
        menu.style.opacity = "1";
        

    }
    else{
        menu.classList.add("active");
        menu.style.height = "calc(" + listcount * 50 + "px";
        menu.style.opacity = "1";

        for(let i = 1 ; i< list.length;i++){
            list[i].addEventListener("click", function(){
                list[0].innerHTML = list[i].innerHTML;

            })
            
        }
    }
    
}

let stars = document.querySelectorAll("#star");
for (let i = 0; i<stars.length;i++){
    stars[i].addEventListener("click",function(){
        let count = 0;
        while (count <= i){
            stars[count].getElementsByTagName("svg")[0].style.fill = "#ba1f47"
            count++;
        }
        while (count < stars.length){
            stars[count].getElementsByTagName("svg")[0].style.fill = "#e596a9"
            count++;
        }
    })

}


let survey = document.querySelectorAll("#survey")[0];
let checks = survey.querySelectorAll("input");
let divs = survey.querySelectorAll(".row");
for(let x = 0 ; x < divs.length; x++){

    divs[x].addEventListener("click",function(){
        checks[x].checked = true;
        for (let z = 0; z < divs.length; z++){
            if(divs[z].classList.contains("active")){
                divs[z].classList.remove("active")
            }
        }
        divs[x].classList.add("active");


    })
}



