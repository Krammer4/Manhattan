const logo = document.querySelector('.menu__logo');
function refresh(){
    document.location.href = "index.html";
}

logo.addEventListener("click", refresh);

const galeryImg = document.querySelector('.galeryFirst');
const lens = document.querySelector('.galery-lens');

function galeryDark(){
    galeryImg.style.opacity = "0.5";
    galeryImg.style.cursor = "pointer";
};
function galeryBright(){
    galeryImg.style.opacity = "1";
};



galeryImg.addEventListener("mouseenter", galeryDark)
galeryImg.addEventListener("mouseout", galeryBright)



