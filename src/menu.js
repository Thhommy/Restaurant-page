function menuPage() {
    const content = document.getElementById('content');
    
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
    content.appendChild(headerElement);
}

export default menuPage;