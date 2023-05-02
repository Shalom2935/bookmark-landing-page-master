const navBar = document.querySelector('.navbar');
const menuBtn = document.querySelector('.menu');
const logo = document.querySelector('header .logo');
const featureList = document.querySelectorAll('.features--list li');
const arrows = document.querySelectorAll('.arrow');
const email = document.querySelector('#email').value;
const errorMessage = document.querySelector('label p');


function isValidEmail(email) {
    const regex = /^[^@]+@[^@]+\.[^@]+$/;
    return regex.test(email);
}

function toggleMenu(){
    navBar.classList.toggle('show');
}

function changeTab(index){
    document.querySelectorAll('.features > div:nth-of-type(n+3)').forEach((e) => {
        e.classList.add('visually-hidden');
    });
    document.querySelector(`.features > div:nth-of-type(${index + 2})`).classList.remove('visually-hidden');
}

function changeTargetRedBorder(element) {
    document.querySelectorAll('.red-border').forEach((border) => {border.classList.remove('active')});
    element.nextElementSibling.classList.add('active');
}

function showAnswer(element){
    element.classList.toggle('active');
    element.nextElementSibling.classList.toggle('visually-hidden');
}



menuBtn.addEventListener('click', function(){
    this.classList.toggle('close');
    logo.classList.toggle('nav-logo');
    document.body.classList.toggle('no-scroll');
    toggleMenu();
})

featureList.forEach(function(tab){
    tab.addEventListener('click', function(){
        featureList.forEach((e) => {
            e.classList.remove('active');
        });
        this.classList.add('active');
        const parent = this.parentElement;
        const index = Array.prototype.indexOf.call(parent.children,this);
        changeTab(index/2 + 1);
        changeTargetRedBorder(this);
    })
})

arrows.forEach(function(arrow){
    arrow.addEventListener('click',function(){
        showAnswer(this);
    });
});

document.querySelector('form').addEventListener('submit',(event) => {
    const email = document.querySelector('#email').value;
    event.preventDefault();
    console.log(email)
    if(!isValidEmail(email)){
        errorMessage.classList.add('error');
    }
    else{
        errorMessage.classList.remove('error');
    }
})