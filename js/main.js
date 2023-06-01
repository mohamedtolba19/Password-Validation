const passwordInput = document.querySelector(".pass-field input");
const eyeIcon = document.querySelector(".pass-field .fa-eye");
const eyeSlashIcon = document.querySelector(".pass-field .fa-eye-slash");
const requirmentList = document.querySelectorAll(".req-list li ")
console.log(requirmentList)

eyeIcon.addEventListener("click" , (e)=>
{
    passwordInput.type = "text"
    eyeIcon.classList.add("d-none");
    eyeIcon.classList.remove("d-block");
    eyeSlashIcon.classList.add("d-block");
    eyeSlashIcon.classList.remove("d-none");
   
})
 
eyeSlashIcon.addEventListener("click" , (e)=>
{
    passwordInput.type = "password"
    eyeSlashIcon.classList.add("d-none");
    eyeSlashIcon.classList.remove("d-block");
    eyeIcon.classList.add("d-block");
    eyeIcon.classList.remove("d-none");
   
})
 

const requirments = [
    {regex:/.{8,}/ , index :0},
    {regex:/[0-9]/ , index :0},
    {regex:/[a-z]/ , index :0},
    {regex:/[A-Z]/ , index :0},
    {regex:/[^A-Za-z0-9]/ , index :0},
    
]
passwordInput.addEventListener("keyup" , (e)=>
{
 
    requirments.forEach((item ,i)=>
    {
        const isValid = item.regex.test(e.target.value);
        console.log(isValid)
       const requirmentItem =  requirmentList[i];
       console.log(requirmentItem)

       if(isValid)
       {
        requirmentItem.firstElementChild.className = "fa-solid fa-check";
        requirmentItem.classList.add("valid");
        
       }
       else
       {
        requirmentItem.firstElementChild.className= "fa-solid fa-circle";
        requirmentItem.classList.remove("valid");
       }

    })
})