nav_home = document.getElementsByClassName("home");
home = document.getElementById("home");
about = document.getElementById("about");
portfolio = document.getElementById("portfolio");
contact = document.getElementById("contact");
All_nav = document.querySelectorAll("#home, #about, #portfolio, #contact");
// Navbar Selection ----------------------------------------------
function moveHome() {
    for (let i = 0; i < All_nav.length; i++) {
        if (All_nav[i] == home) {
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
    }
}

function moveAbout() {
    for (let i = 0; i < All_nav.length; i++) {
        if (All_nav[i] == about) {
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
    }

}

function movePortfolio() {
    for (let i = 0; i < All_nav.length; i++) {
        if (All_nav[i] == portfolio) {
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
    }

}

function moveContact() {
    for (let i = 0; i < All_nav.length; i++) {
        if (All_nav[i] == contact) {
            All_nav[i].style.display = "grid";
        } else All_nav[i].style.display = "none";
    }
}


// Portfolio Selection ------------------------------------------
var Poland = document.querySelectorAll('#p2, #p3');
var France = document.querySelectorAll('#p1, #p4');
var Belgium = document.querySelectorAll('#p5, #p6');
var Denmark = document.querySelectorAll('#p7, #p8');
var All = document.querySelectorAll('#p1,#p2,#p3, #p4, #p5, #p6 , #p7, #p8');

function select_all() {
    for (let i = 0; i < All.length; i++) {
        All[i].style.display = "block";
    }
}

function poland() {
    for (let i = 0; i < All.length; i++) {
        const imageData = All[i].getAttribute('data-image');
        for (let n = 0; n < Poland.length; n++) {
            const imageDataShow = Poland[n].getAttribute('data-image');
            if (imageDataShow == imageData) {
                All[i].style.display = "block";
            } else{
                All[i].style.display = "none";
            }
        }
    }
}

    function france() {
        
        
    }

    function belgium() {

    }

    function denmark() {

    }




