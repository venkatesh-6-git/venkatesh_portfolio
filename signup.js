let username=document.querySelector('#username')
let email_id=document.querySelector('#email_id')
let password=document.querySelector('#password')
let button=document.querySelector('button')
let p=document.querySelector("h3")



button.addEventListener('click',function(a){
    a.preventDefault();
    

    if (username.value==""){
        p.innerText='!username should not be empty'
        p.style.color="red";
        
    }
    else if(username.value.length<3){
        message='username must be more than 3'
        p.style.color='red';
    }
    else if(email_id.value==""){
        message='email should not be empty'
        p.style.color='red';
    }
    else if(!email_id.value.includes("@")){
        message='email must have @'
        p.style.color='red';
    }
    else if(password.value==""){
        message= 'password should not be empty'
        p.style.color='red';
    }
    else if(password.value.length<6){
        message='password must be 6 letters'
        p.style.color='red';
    }
    
    else{
        message='successfully registered'
        p.style.color='green'
    

     localStorage.setItem('username',username.value);
    localStorage.setItem('email_id',email_id.value);
    localStorage.setItem('password',password.value);

    setTimeout(function(){
        window.location.href='login.html'
    },3000);
    }
p.innerText=message
   


})