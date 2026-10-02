let stored_email_id=localStorage.getItem('email_id');
let stored_password=localStorage.getItem('password');
let email_id=document.querySelector('#email_id');
let password=document.querySelector('#password')
let button=document.querySelector('button');
let err=document.querySelector('h1');

console.log(stored_email_id)
console.log(stored_password);
button.addEventListener('click',function(a){
    a.preventDefault();

    if (email_id.value==""){

        err.innerText='email should be enter';
        err.style.color="red";
    }
    else if(email_id.value != stored_email_id){
        err.innerText="email id incorrect";
        err.style.color="red";
    }
    else if(password.value==""){
        err.innerText="password should be enter";
        err.style.color="red";
    }
    else if(password.value != stored_password){
         err.innerText="password is  incorrect";
         err.style.color="red";
    }
    else{
        err.innerText='login success'
        err.style.color='green';
        setTimeout(function(){
        window.location.href='portfolio.html'

        },2000)
        
       
    }

})

console.log(email_id.value==stored_email_id);
console.log(password.value==stored_password);