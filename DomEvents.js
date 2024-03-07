const form = document.querySelector('form');
const email = document.querySelector('#exampleInputEmail1');
const firstname = document.querySelector('#exampleInputName1');
const lastname = document.querySelector('#exampleInputName2');
const password = document.querySelector('#exampleInputPassword1');
const confirmpassword = document.querySelector('#exampleInputPassword2');

form.addEventListener('submit',formhandler)


function formhandler(e){
    e.preventDefault();


    const formInfo = {
        Email: email.value,
        Password: password.value,
        Firstname: firstname.value,
        Lastname: lastname.value,
        ConfirmPassword: confirmpassword.value,
    }
    console.log(formInfo);

    email.value = '',
    password.value = '',
    firstname.value = '',
    lastname.value = '',
    password.value = '',
    confirmpassword.value = ''

}

