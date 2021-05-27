// sticky navbar
var navbar = document.querySelector(".navbar");
var sticky = navbar.offsetTop;
window.onscroll = function () {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("stickyNav")
    } else {
        navbar.classList.remove("stickyNav");
    }
};

// dropdown items
let items = document.querySelectorAll(".item");
let drops = document.querySelectorAll(".drop");
let icons = document.querySelectorAll(".icon");
for (let i = 0; i < items.length; i++) {
    const element = items[i];
    element.addEventListener("click", function () {
        let selected = document.querySelector(".show");
        let clicked = document.querySelector(".click");
        let icon = document.querySelector(".bi-arrow-up-circle-fill")
        if (selected !== null && this.classList[this.classList.length - 1] !== "show") {
            selected.classList.remove("show");
            clicked.classList.remove("click");
            icon.classList.replace("bi-arrow-up-circle-fill", "bi-arrow-down-circle");
            icons[i].classList.replace("bi-arrow-down-circle", "bi-arrow-up-circle-fill");
            element.classList.add("show");
            drops[i].classList.add("click");
        } else if (this.classList[this.classList.length - 1] == "show") {
            element.classList.remove("show");
            drops[i].classList.remove("click");
            icons[i].classList.replace("bi-arrow-up-circle-fill", "bi-arrow-down-circle");

        } else {
            element.classList.add("show");
            drops[i].classList.add("click");
            icons[i].classList.replace("bi-arrow-down-circle", "bi-arrow-up-circle-fill");
        }
    });
};


// filter staff 
let buttons = document.querySelectorAll(".button"); // buttons
let staff =document.querySelectorAll(".list .staff");

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener("click", function(){
        let select = document.querySelector(".selected");
        console.log(select);
        select.classList.remove("selected");
        this.classList.add("selected");
        for (let j = 0; j < staff.length; j++) {
           const staffmember = staff[j];
           if(button.classList[0] == "all"){
            staffmember.classList.remove("clear");
           }
           
           if(!staffmember.classList.contains(button.classList[0])){
            staffmember.classList.add("clear");
           }else{
            staffmember.classList.remove("clear");
           }
       }
       
    });
};


window.addEventListener("load", function(){
    let loader = document.querySelector(".loader");
    console.log(loader);
    loader.classList.add("hidden");
});