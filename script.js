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
            icon.classList.replace("ul-eye-slash", "uil-eye")
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
