const tabHome = document.getElementById("home");
const tabAbout = document.getElementById("about");
const tabPortfolio = document.getElementById("portfolio");
const tabContact = document.getElementById("contact");
const tabBlog = document.getElementById("blog");
const allTab = document.querySelectorAll("#home, #about, #portfolio,#blog ,#contact");

const navHome = document.getElementById("nav_home");
const navAbout = document.getElementById("nav_about");
const navPortfolio = document.getElementById("nav_portfolio");
const navBlog = document.getElementById("nav_blog");
const navContact = document.getElementById("nav_contact");

// Navbar Selection ----------------------------------------------
navHome.addEventListener("click",moveHome);
navAbout.addEventListener("click",moveAbout);
navPortfolio.addEventListener("click",movePortfolio);
navBlog.addEventListener("click",moveBlog);
navContact.addEventListener("click",moveContact);

function moveHome() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == tabHome) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }
}

function moveAbout() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == tabAbout) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }

}

function movePortfolio() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == tabPortfolio) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }

}

function moveBlog() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == tabBlog) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }

}

function moveContact() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == tabContact) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }
}




// Home Tab ----------------------------------------------
