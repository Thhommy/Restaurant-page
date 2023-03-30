import Icon from './images/pizza.svg'

function header(){
    const container = document.getElementById('content');
    
    const headerElement = document.createElement('header');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'PIZZOLI';
    headerElement.appendChild(h1);

    const nav = document.createElement('nav');
    const ul = document.createElement('ul');
   

    const li1 = document.createElement('li');
    li1.textContent = 'Home';
    ul.appendChild(li1);

    const li2 = document.createElement('li');
    li2.textContent = 'Menu';
    ul.appendChild(li2);

    const li3 = document.createElement('li');
    li3.textContent = 'Contact';
    ul.appendChild(li3);

    nav.appendChild(ul);
    headerElement.appendChild(nav);
    container.appendChild(headerElement);
};

function main(){
    const content = document.getElementById('content');
   
    const div = document.createElement('div');
    div.classList.add('main');

    const p1 = document.createElement('p');
    p1.textContent = 'Best pizza in your country';
    div.appendChild(p1);

    const p2 = document.createElement('p2');
    p2.textContent = 'Made with passion since 1995'
    div.appendChild(p2);
    const myIcon = new Image();
    myIcon.src = Icon;
  
    div.appendChild(myIcon);

    content.appendChild(div);
}


/* <div class="main">
            <p>Best pizza in your country</p> 
            <p>Made with passion since 1908</p>
            <img src="./images/pizza-svgrepo-com.svg">
        </div> */

export {
    header,
    main
};