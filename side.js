//interactive elements
const toggleButton = document.getElementById('toggleButton');
const closeButton = document.getElementsByClassName('material-symbols-outlined')[0];
const togggleSideBar =  document.getElementsByClassName('aside')[0];

toggleButton.onclick = function(){
    togggleSideBar.classList.toggle('display_aside')
};

closeButton.onclick = function(){
    togggleSideBar.classList.remove('display_aside')
}