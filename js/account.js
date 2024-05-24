// toggle tabs
const toggleBtns = document.querySelectorAll('.toggle-tab')
const all_contents = document.querySelectorAll('.content')
toggleBtns.forEach((toggleBtn,index)=>{
    toggleBtn.addEventListener('click',()=>{
        toggleBtns.forEach(btn=>btn.classList.remove('active'))
        toggleBtn.classList.add('active');

        all_contents.forEach(content=>content.classList.remove('active'));
        all_contents[index].classList.add('active');
    })
})


const dropdown = document.querySelector('.dropdown-items')
const list = document.querySelector('.toggle-tabs-list')
const selected_item = document.querySelector('.selected-item')

dropdown.addEventListener('click',()=>{
    list.classList.toggle('show')
})
    toggleBtns.forEach((toggleBtn)=>{
        toggleBtn.addEventListener('click',(e)=>{
            selected_item.innerText = e.target.innerText
            list.classList.remove('show')
        })
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


// Drag and drop
const inputFile = document.getElementById('drag-drop');
const myText = document.getElementById('text')
const browse = document.getElementById('profile-pic')

let file = "";

browse.addEventListener('change',function (){
    file = this.files[0];
    imageFileURL();
})

inputFile.addEventListener('dragover',(ev)=>{
    ev.preventDefault();
    myText.textContent = "Release to upload"
})

inputFile.addEventListener('dragleave',(ev)=>{
    myText.textContent = "drag and drop"
})

inputFile.addEventListener('drop',(ev)=>{
    ev.preventDefault();
    file = ev.dataTransfer.files[0];

    imageFileURL();
})

const imageFileURL = ()=>{

    let fileType = file.type;

    let validateExtension = ['image/jpeg','image/png','image/jpg'];

    if(validateExtension.includes(fileType)){
        let fileReader = new FileReader();
        fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            console.log(fileURL)
        }
        fileReader.readAsDataURL(file)
    }
}

