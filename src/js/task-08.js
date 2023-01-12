const formEL = document.querySelector('.login-form');

const hendlerSubmitForm = (event) => {
    event.preventDefault();

   const {
    elements:{ email, password },
    } = event.currentTarget;


   if (email.value === "" || password.value === "") {
    window.alert('All fields must be filled!');
  }


  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset(); 
}


formEL.addEventListener("submit", hendlerSubmitForm);

