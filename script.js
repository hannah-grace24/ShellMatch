const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form-container"),
    formCloseBtn = document.querySelector(".form-close"),
    signupBtn = document.querySelector("#signup"),
    signinBtn = document.querySelector("#signin"),
    pwShowHide = document.querySelectorAll(".pw-hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach(icon => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye")
        }else{
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash")
        }
    })
})

signupBtn.addEventListener("click", () =>  {
    e.preventDefault();
    formContainer.classList.add("active");

});
signinBtn.addEventListener("click", () =>  {
    e.preventDefault();
    formContainer.classList.remove("active");

});


const btnElList = document.querySelectorAll('.btn');
btnElList.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        btnEl.classList.add('special');
    });
});


function myFunction() {
    document.getElementById("demo").innerHTML = "We have recieved your survey response! Give our experts 3-5 business days to evaluate your responses and provide you with the best matches!";
  }
    
    

function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}


<script src="https://kit.fontawesome.com/f6dcf461c1.js"
crossorigin="anonymous"></script>