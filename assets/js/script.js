const form = document.getElementById('form');
const email = document.getElementById('email');

//detect submit
form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValue = email.value; //assign input to emailValue

  if(!validateEmail(emailValue)){ //check if email is not invalid 
    form.classList.add('error'); //if invalid, add class="error" to form element
  } else{
    form.classList.remove('error'); //else remove error class
    document.body.innerHTML = alert('You\'ve signed up successfully, thanks!');
    window.location.reload();
  }
})
//lowercase, then regex email validation
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
