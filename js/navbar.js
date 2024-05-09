const dropdowns = document.querySelectorAll(".dd");
const dropdownMenu = document.querySelectorAll("dropdown-menu");
const icons = document.querySelectorAll(".arrows-down");
const navToggler = document.querySelector(".navbar-toggler");
const navIcon = document.querySelector(".nav-icon");

// dropdowns.forEach((dd,index)=>{
//     dd.addEventListener("click",()=>{
//         icons.forEach((icon)=>{
//             icon.classList.remove("ri-arrow-up-s-line");
//             icon.classList.add("ri-arrow-down-s-line");
//         })
//         if(icons[index].classList.contains("ri-arrow-down-s-line")){
//             icons[index].classList.remove("ri-arrow-down-s-line");
//             icons[index].classList.add("ri-arrow-up-s-line");
//         }
//         else{
//             icons[index].classList.add("ri-arrow-down-s-line");
//             icons[index].classList.remove("ri-arrow-up-s-line");
//         }
//     })
// })

// document.addEventListener("click",(e)=>{
//     console.log(e.target.classList.contains("dd"))
//     if(!e.target.classList.contains("dd")){
//         icons.forEach((icon)=>{
//             icon.classList.add("ri-arrow-down-s-line");
//             icon.classList.remove("ri-arrow-up-s-line");
//         })
//     }
//     else{
//                 icons.forEach((icon)=>{
//                     if(icon.classList.contains("ri-arrow-up-s-line")){
//                         icon.classList.remove("ri-arrow-up-s-line");
//                     }
//                     icon.classList.add("ri-arrow-down-s-line");
//                 })
//                 let index = e.target.getAttribute("data-bs-index");
//                 if(icons[index].classList.contains("ri-arrow-up-s-line")){
//                     icons[index].classList.remove("ri-arrow-down-s-line");
//                     icons[index].classList.add("ri-arrow-up-s-line");
//                 }
//                 else{
//                     icons[index].classList.add("ri-arrow-down-s-line");
//                     icons[index].classList.remove("ri-arrow-up-s-line");
//                 }
//             }
// })

document.addEventListener("click", (e) => {
    // Check if the clicked element is not a dropdown or its associated icon
    if (!e.target.classList.contains("dd") && !e.target.classList.contains("arrows-down")) {
        icons.forEach((icon) => {
            icon.classList.add("ri-arrow-down-s-line");
            icon.classList.remove("ri-arrow-up-s-line");
        });
    } else if (e.target.classList.contains("dd")) { // If the clicked element is a dropdown
        icons.forEach((icon) => {
            icon.classList.add("ri-arrow-down-s-line");
            icon.classList.remove("ri-arrow-up-s-line");
        });

        let index = e.target.getAttribute("data-bs-index");
        if (icons[index].classList.contains("ri-arrow-up-s-line")) {
            icons[index].classList.remove("ri-arrow-up-s-line");
            icons[index].classList.add("ri-arrow-down-s-line");
        } else {
            icons[index].classList.add("ri-arrow-up-s-line");
            icons[index].classList.remove("ri-arrow-down-s-line");
        }
    }
});


navToggler.addEventListener("click",()=>{
    if(navIcon.classList.contains("closed")){
        navIcon.classList.remove("closed");
        navIcon.src = "../images/icons/close.png";
    }
    else{
        navIcon.classList.add("closed");
        navIcon.src = "../images/icons/Icon.png";
    }
})