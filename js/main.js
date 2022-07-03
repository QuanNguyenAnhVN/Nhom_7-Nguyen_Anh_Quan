const homeTab = document.getElementById("home");
const aboutTab = document.getElementById("about");
const portfolioTab = document.getElementById("portfolio");
const contactTab = document.getElementById("contact");
const allTab = document.querySelectorAll("#home, #about, #portfolio, #contact");

const navHome = document.getElementById("nav_home");
const navAbout = document.getElementById("nav_about");
const navPortfolio = document.getElementById("nav_portfolio");
const navBlog = document.getElementById("nav_blog");
const navContact = document.getElementById("nav_contact");

// Navbar Selection ----------------------------------------------
document.getElementById("nav_home").addEventListener("click",moveHome);
document.getElementById("nav_about").addEventListener("click",moveAbout);
document.getElementById("nav_portfolio").addEventListener("click",movePortfolio);
document.getElementById("nav_blog").addEventListener("click",moveBlog);
document.getElementById("nav_contact").addEventListener("click",moveContact);

function moveHome() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == homeTab) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }
}

function moveAbout() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == aboutTab) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }

}

function movePortfolio() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == portfolioTab) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }

}

function moveContact() {
    for (let i = 0; i < allTab.length; i++) {
        if (allTab[i] == contactTab) {
            allTab[i].style.display = "grid";
        } else allTab[i].style.display = "none";
    }
}




// Portfolio Selection ------------------------------------------
