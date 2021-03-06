var burgerButton = document.querySelector('#burger');
var modalWindow = document.querySelector('#modal-window');
var closeButton = document.querySelector('#close');

burgerButton.addEventListener('click', function(){
  modalWindow.classList.add('visible');
});

closeButton.addEventListener('click', function(){
  modalWindow.classList.remove('visible');
})