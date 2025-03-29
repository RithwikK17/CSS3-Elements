let togglerBtn = document.querySelector(".toggler-btn")
let menuItems = document.querySelector(".menu-items")

togglerBtn.addEventListener("click", function(){
    menuItems.classList.toggle("active-menu")
})