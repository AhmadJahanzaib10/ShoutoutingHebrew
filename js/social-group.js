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
console.log(question_m_div)
question_m.forEach((qm, index)=>{
    qm.addEventListener('click',()=>{
    question_m_div[index].style.display = 'flex';
    setTimeout(() => {
        question_m_div[index].style.display = 'none';
    }, 2000);
    })
})

