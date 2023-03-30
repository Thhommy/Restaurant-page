import homepage from './home';
import menuPage from './menu';
import './reset.css'
import './style.css';
homepage();

const content = document.getElementById('content');
const homeButton = document.getElementById('home');
const menuButton = document.querySelector('#menu');
const contactButton = document.getElementById('contact');

function clearHTML() {
    content.innerHTML = '';
}



menuButton.addEventListener('click', ()=>{
    clearHTML();
    menuPage();
})

