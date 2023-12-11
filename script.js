const formOpenBtn = document.querySelector("#form-open"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form-container"),
    formCloseBtn = document.querySelector(".form-close"),
    signupBtn = document.querySelector("#signup"),
    signinBtn = document.querySelector("#signup"),
    pwShowHide = document.querySelectorAll(".pw-hide");

    formOpenBtn.addEventListener("click", () => home.classList.add("show"));
    formCloseBtn.addEventListener("click", () => home.classList.remove("show"));
