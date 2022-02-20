


//Doc Menu Sidebar
let docMenu = document.querySelector("#hamburgerBttn-doc");
let sideBar = document.querySelector(".components-nav");
let toggleSideBar = document.querySelector(".components-nav-sidebar");

if (docMenu && sideBar) {
  docMenu.addEventListener("click", () => {
    sideBar.classList.toggle("components-nav-sidebar");
  });
}

// hide nav
function hideSideNavBar(){
  sideBar.classList.toggle("components-nav-sidebar");
}


//bolt Menu Sidebar
let boltMenu = document.querySelector("#hamburgerBttn-bolt");
let boltSideBar = document.querySelector(".nav-list");

if (boltMenu && boltSideBar) {
  boltMenu.addEventListener("click", () => {
    boltSideBar.classList.toggle("nav-list-sidebar");
  });
}


