const dropdown = document.querySelector('.dropdown-items')
const list = document.querySelector('.toggle-tabs-list')
const selected_item = document.querySelector('.selected-item')

dropdown.addEventListener('click',()=>{
    list.classList.toggle('show')
})

// pop-up on hovering "?" sign for computers
const question_pc = document.querySelectorAll('.question-pc')
const question_pc_div = document.querySelectorAll('.question-pc-div')
question_pc.forEach((qp, index)=>{
    qp.addEventListener('mouseover',()=>{
    question_pc_div[index].style.display = 'flex';
    })
    qp.addEventListener('mouseout',()=>{
        question_pc_div[index].style.display = 'none';
        })
})


// pop-up on hovering "?" sign for mobiles
const question_m = document.querySelectorAll('.question-m')
const question_m_div = document.querySelectorAll('.question-m-div')
question_m.forEach((qm, index)=>{
    qm.addEventListener('click',()=>{
    question_m_div[index].style.display = 'flex';
    setTimeout(() => {
        question_m_div[index].style.display = 'none';
    }, 2000);
    })
})

const instructionBtn = document.querySelector(".insturction");
const instructions = document.querySelector(".instructions-form");

instructionBtn.addEventListener("click",()=>{
  if(instructions.classList.contains("d-none")){
    instructions.classList.remove("d-none");
    instructionBtn.querySelector("span").innerText = "הסתר הוראות";
    instructionBtn.querySelector("i").classList.remove("ri-arrow-down-s-line");
    instructionBtn.querySelector("i").classList.add("ri-arrow-up-s-line");
  }
  else{
    instructions.classList.add("d-none");
    instructionBtn.querySelector("span").innerText = "צפה בהוראות";
    instructionBtn.querySelector("i").classList.add("ri-arrow-down-s-line");
    instructionBtn.querySelector("i").classList.remove("ri-arrow-up-s-line");
  }
})

// const groupBox = document.querySelector(".group-status");
// const assetBox = document.querySelector(".asset-type");
// const iamBox = document.querySelector(".i-am");
// const groupCheckBox = document.querySelector("#group-asset");
// const radios = document.getElementsByName('asset');

// function checkRadio() {
//     const groupRadio = document.getElementById('group-asset');
//     return groupRadio.checked;
// }

// function updateBoxes() {
//     if (checkRadio()) {
//         iamBox.classList.remove("w-50");
//         assetBox.classList.remove("w-50");
//         groupBox.classList.remove("d-none");
//         iamBox.classList.add("w-33");
//         assetBox.classList.add("w-33");
//     } else {
//         iamBox.classList.add("w-50");
//         assetBox.classList.add("w-50");
//         groupBox.classList.add("d-none");
//         iamBox.classList.remove("w-33");
//         assetBox.classList.remove("w-33");
//     }
// }

// Initialize the view on load
// window.addEventListener("load", updateBoxes);

// Add event listeners to both radio buttons
// radios.forEach(radio => {
//     radio.addEventListener("change", updateBoxes);
// });