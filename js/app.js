

let registrationForm = document.querySelector('#register-form');
registrationForm.addEventListener('keyup', function (){
 validateForm();
});
registrationForm.addEventListener('submit', function (event){

  event.preventDefault();
  if(validateForm()){
    alert('Form Submitted.')
  }
  else{
    alert('Failed. Check form.')
  }
});



let validateForm = ()=> {
  return(checkUserName() & checkEmail() & checkPassword() & checkPassword2())
};



let checkUserName = () => {
  let userInput = document.querySelector('#username');
  let inputFeedback = document.querySelector('#username-feedback');
  let regEx = /^[a-zA-Z0-9]{4,10}$/;   //  [allowed characters]   {min, max}
  if(regEx.test(userInput.value)){
    makeValid(userInput,inputFeedback);
    return true;
  }
  else {
    makeInvalid(userInput,inputFeedback);
    return false;
  }
};

let checkEmail = () => {
  let userInput = document.querySelector('#email');
  let inputFeedback = document.querySelector('#email-feedback');
  let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(regEx.test(userInput.value)){
    makeValid(userInput,inputFeedback);
    return true;
  }
  else {
    makeInvalid(userInput,inputFeedback);
    return false;
  }
};

//  /^[A-Za-z]\w{7,14}$/

let checkPassword = () => {
  let userInput = document.querySelector('#password');
  let inputFeedback = document.querySelector('#password-feedback');
  let regEx = /^[A-Za-z]\w{7,14}$/;
  if(regEx.test(userInput.value)){
    makeValid(userInput,inputFeedback);
    return true;
  }
  else {
    makeInvalid(userInput,inputFeedback);
    return false;
  }
};

let checkPassword2 = () => {
  let userInput = document.querySelector('#password2');
  let password = document.querySelector('#password');
  let inputFeedback = document.querySelector('#password2-feedback');
  let regEx = /^[A-Za-z]\w{7,14}$/;
  if(regEx.test(userInput.value) && userInput.value === password.value){
    makeValid(userInput,inputFeedback);
    return true;
  }
  else {
    makeInvalid(userInput,inputFeedback);
    return false;
  }
};

let makeValid = (userInput, inputFeedback) => {
  userInput.classList.add('is-form-valid');
  userInput.classList.remove('is-form-invalid');
  inputFeedback.classList.add('text-success');
  inputFeedback.classList.remove('text-danger');
  inputFeedback.innerText = 'OK';

}



let makeInvalid = (userInput,inputFeedback) => {
  userInput.classList.add('is-form-invalid');
  userInput.classList.remove('is-form-valid');
  inputFeedback.classList.add('text-danger');
  inputFeedback.classList.remove('text-success');
  inputFeedback.innerText = `${userInput.placeholder} is invalid`;

}