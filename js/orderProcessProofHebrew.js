var currentStep = 1;
var updateProgressBar;
const steps = document.querySelectorAll(".step-circle");
function displayStep(stepNumber) {
  if (stepNumber >= 1 && stepNumber <= 3) {
    const dots = document.querySelectorAll(".dot");
    const ticks = document.querySelectorAll(".ri-check-line");
    const currentStepElement = document.querySelector(".step-" + currentStep);
    currentStepElement.style.display = "none";
    const newStepElement = document.querySelector(".step-" + stepNumber);
    newStepElement.style.display = ""; // Or "block" for block-level elements
    steps.forEach((step)=>{
      step.classList.remove("active-step");
    })
    dots.forEach((dot)=>{
      dot.style.display = "block";
    })
    ticks.forEach((tick)=>{
      tick.style.display = "none";
    })
    for(let i = dots.length - 1; i >= stepNumber; i--){
      console.log(i, stepNumber);
      dots[i].style.display = "none";
      ticks[i].style.display = "block";
      steps[i].classList.add("active-step");
    }
    if(stepNumber == 3){
      console.log(stepNumber)
      // dots[stepNumber - 1].style.display = "none";
      // ticks[stepNumber - 1].style.display = "block";
      dots.forEach((dot)=>{
        dot.style.display = "none";
      })
      ticks.forEach((tick)=>{
        tick.style.display = "block";
      })
      steps.forEach((step)=>{
        step.classList.add("active-step");
      })
    }
    steps[stepNumber - 1].classList.add("active-step");
    if(stepNumber == 1){
      dots.forEach((dot)=>{
        dot.style.display = "block";
      })
      ticks.forEach((tick)=>{
        tick.style.display = "none";
      })
      steps.forEach((step)=>{
        step.classList.remove("active-step");
      })
      steps[2].classList.add("active-step")
      steps[0].classList.remove("active-step")
      steps[1].classList.remove("active-step")
    }
    currentStep = stepNumber;
    updateProgressBar();
  }
}

document.addEventListener("DOMContentLoaded", function() { // replaces $(document).ready()
  const multiStepForm = document.getElementById("multi-step-form");
  const steps = document.querySelectorAll(".step");
  console.log(steps)
  for (let i = 1; i < steps.length; i++) {
    console.log(steps[i])
    steps[i].style.display = "none";
  }

  // const nextStepButtons = document.querySelectorAll(".next-step");
  // nextStepButtons.forEach(button => {
  //   button.addEventListener("click", function() {
  //     if (currentStep < 3) {
  //       const currentStepElement = document.querySelector(".step-" + currentStep);
  //       currentStepElement.classList.add("animate__animated", "animate__fadeOutLeft"); // Assuming Animate.css is included
  //       currentStep++;
  //       setTimeout(function() {
  //         steps.forEach(step => step.classList.remove("animate__animated", "animate__fadeOutLeft"));
  //         steps.forEach(step => step.style.display = "none");
  //         const newStepElement = document.querySelector(".step-" + currentStep);
  //         newStepElement.style.display = "";
  //         newStepElement.classList.add("animate__animated", "animate__fadeInRight");
  //         updateProgressBar();
  //       }, 500);
  //     }
  //   });
  // });

  // const prevStepButtons = document.querySelectorAll(".prev-step");
  // prevStepButtons.forEach(button => {
  //   button.addEventListener("click", function() {
  //     if (currentStep > 1) {
  //       const currentStepElement = document.querySelector(".step-" + currentStep);
  //       currentStepElement.classList.add("animate__animated", "animate__fadeOutRight");
  //       currentStep--;
  //       setTimeout(function() {
  //         steps.forEach(step => step.classList.remove("animate__animated", "animate__fadeOutRight"));
  //         steps.forEach(step => step.style.display = "none");
  //         const newStepElement = document.querySelector(".step-" + currentStep);
  //         newStepElement.style.display = "";
  //         newStepElement.classList.add("animate__animated", "animate__fadeInLeft");
  //         updateProgressBar();
  //       }, 500);
  //     }
  //   });
  // });

  updateProgressBar = function() {
    const progressPercentage = ((currentStep - 1) / 2) * 100;
    document.querySelector(".progress-bar").style.width = progressPercentage + "%";
  }
});






// Upload-ImageJs


const uploadicon = document.getElementById('upload-icon');

function openFileUploader() {
    // Create an input element of type file
    var input = document.createElement('input');
    input.type = 'file';
  
    // Trigger the file input click event
    input.click();
  
    // Listen for changes in the file input
    input.addEventListener('change', function() {
      // Once a file is selected, you can perform further actions,
      // such as uploading the file to a server or displaying it on the page.
      console.log('File selected:', input.files[0]);
    });
  }

  uploadicon.addEventListener('click',openFileUploader)

// Tabs thorugh radios
const tab1 = document.getElementById('add-proof-sec');
const tab2 = document.getElementById('upload-proof-sec');
const radio1 = document.getElementById('add-url-proof');
const radio2 = document.getElementById('upload-proof');

document.addEventListener("DOMContentLoaded",()=>{
  if(radio1.checked){
    tab1.classList.remove('d-none');
    tab2.classList.add('d-none');
  }
  if(radio2.checked){
    tab1.classList.add('d-none');
    tab2.classList.remove('d-none');
  }
})

radio1.addEventListener('change', function() {
  if (radio1.checked) {
    tab1.classList.remove('d-none');
    tab2.classList.add('d-none');
  }
});
radio2.addEventListener('change', function() {
  if (radio2.checked) {
    tab1.classList.add('d-none');
    tab2.classList.remove('d-none');
  }
});