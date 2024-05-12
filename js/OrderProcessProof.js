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
    for(let i = 0; i < stepNumber -1; i++){
      dots[i].style.display = "none";
      ticks[i].style.display = "block";
      steps[i].classList.add("active-step");
    }
    if(stepNumber == 3){
      dots[stepNumber - 1].style.display = "none";
      ticks[stepNumber - 1].style.display = "block";
    }
    steps[stepNumber - 1].classList.add("active-step");
    currentStep = stepNumber;
    updateProgressBar();
  }
}

document.addEventListener("DOMContentLoaded", function() { // replaces $(document).ready()
  const multiStepForm = document.getElementById("multi-step-form");
  const steps = multiStepForm.querySelectorAll(".step");
  for (let i = 1; i < steps.length; i++) {
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