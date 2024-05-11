var editor1 = new RichTextEditor("#div_editor1");
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

document.addEventListener("DOMContentLoaded",()=>{
  let a = document.querySelector("#div_editor1 a");
  a.style.display = "none";
  console.log(a)
})