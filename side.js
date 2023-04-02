//interactive elements
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementById('closeButton');
const links = document.getElementById('links');

toggleButton.onclick = function(){
    links.classList.toggle('navbar');
    links.style.transition = '2s';
};

closeButton.onclick = function(){
    links.classList.remove('navbar');
    links.style.transition = '2s';
};