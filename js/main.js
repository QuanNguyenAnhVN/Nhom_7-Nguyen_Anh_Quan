nav_home = document.getElementsByClassName("home");
home = document.getElementById("home");
about = document.getElementById("about");
portfolio = document.getElementById("portfolio");
contact = document.getElementById("contact");
All_nav = document.querySelectorAll("#home, #about, #portfolio, #contact");
// Navbar Selection ----------------------------------------------
function moveHome() {
   for (let i=0; i <All_nav.length;i++){
        if(All_nav[i] == home){
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
   }
}

function moveAbout() {
    for (let i=0; i <All_nav.length;i++){
        if(All_nav[i] == about){
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
   }

}

function movePortfolio() {
    for (let i=0; i <All_nav.length;i++){
        if(All_nav[i] == portfolio){
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
   }
    
}

function moveContact() {
    for (let i=0; i <All_nav.length;i++){
        if(All_nav[i] == contact){
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
   }
}



// Portfolio Selection ------------------------------------------
const Poland = document.querySelectorAll('#p2, #p3');
const France = document.querySelectorAll('#p1, #p4');
const Belgium = document.querySelectorAll('#p5, #p6');
const Denmark = document.querySelectorAll('#p7, #p8');
const All = document.querySelectorAll('#p1, #p2, #p3, #p4, #p5, #p6 , #p7, #p8');

function select_0(){
    for (let i = 0; i < All.length; i++) {
        All[i].style.display = "block";
    }
}

function select_1(){
    for(let i = 0; i < All.length; i++){
        for(let n = 0;n < Poland.length;n++){
            if (All[i] != Poland[n]){
                All[i].style.display = "none";
            } else All[i].style.display = "block";
        }
    }
}

function select_2(){
    
}

function select_3(){
   
}

function select_4(){
   
}




