
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

// Country dropdown

document.addEventListener('DOMContentLoaded', () => {

    const selectDrop = document.querySelector('#countries');
  
    const fetchCitynames = async()=>{
try{
    const res = await fetch("https://api.first.org/data/v1/countries");
    const resData = await res.json();
    const data = resData.data;
    console.log(resData)
      let output = "";
      Object.keys(data).map((count,index) => {
        console.log(count)

        output += `
        
        <option value="${count}">${count}</option>`;
      })
  
      selectDrop.innerHTML = output;
}catch(error){
    console.log(error.message);
}
}
fetchCitynames()
  
  });
