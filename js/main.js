home = document.getElementById("home");
portfolio = document.getElementById("portfolio");
contact = document.getElementById("contact");

// Navbar Selection ----------------------------------------------
function moveHome() {
    home.style.display = "grid";
    portfolio.style.display = "none"
    contact.style.display = "none";
}

function movePortfolio() {
    portfolio.style.display = "grid"
    contact.style.display = "none";
    home.style.display = "none";
    
}

function moveContact() {
    contact.style.display = "grid";
    home.style.display = "none";
    portfolio.style.display = "none"
}



// Portfolio Selection ------------------------------------------
const Poland = document.querySelectorAll('#p2, #p3');
const France = document.querySelectorAll('#p1, #p4');
const Belgium = document.querySelectorAll('#p5, #p6');
const Denmark = document.querySelectorAll('#p7, #p8');

function select_0(){
    for (let i = 0; i < Poland.length; i++) {
        Poland[i].style.display = "block";
    }
    
    for (let i = 0; i < France.length; i++) {
        France[i].style.display = "block";
    }

    for (let i = 0; i < Belgium.length; i++) {
        Belgium[i].style.display = "block";
    }

    for (let i = 0; i < Denmark.length; i++) {
        Denmark[i].style.display = "block";
    }
}

function select_1(){
    for (let i = 0; i < Poland.length; i++) {
        Poland[i].style.display = "block";
    }

    for (let i = 0; i < France.length; i++) {
        France[i].style.display = "none";
    }

    for (let i = 0; i < Belgium.length; i++) {
        Belgium[i].style.display = "none";
    }

    for (let i = 0; i < Denmark.length; i++) {
        Denmark[i].style.display = "none";
    }
}

function select_2(){
    for (let i = 0; i < Poland.length; i++) {
        Poland[i].style.display = "none";
    }

    for (let i = 0; i < France.length; i++) {
        France[i].style.display = "block";
    }

    for (let i = 0; i < Belgium.length; i++) {
        Belgium[i].style.display = "none";
    }

    for (let i = 0; i < Denmark.length; i++) {
        Denmark[i].style.display = "none";
    }
}

function select_3(){
    for (let i = 0; i < Poland.length; i++) {
        Poland[i].style.display = "none";
    }

    for (let i = 0; i < France.length; i++) {
        France[i].style.display = "none";
    }

    for (let i = 0; i < Belgium.length; i++) {
        Belgium[i].style.display = "block";
    }

    for (let i = 0; i < Denmark.length; i++) {
        Denmark[i].style.display = "none";
    }
}

function select_4(){
    for (let i = 0; i < Poland.length; i++) {
        Poland[i].style.display = "none";
    }

    for (let i = 0; i < France.length; i++) {
        France[i].style.display = "none";
    }

    for (let i = 0; i < Belgium.length; i++) {
        Belgium[i].style.display = "none";
    }

    for (let i = 0; i < Denmark.length; i++) {
        Denmark[i].style.display = "block";
    }
}




