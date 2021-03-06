var burgerButton = document.querySelector('#burger');
var modalWindow = document.querySelector('#modal-window');
var closeButton = document.querySelector('#close');

burgerButton.addEventListener('click', function(){
  modalWindow.classList.add('visible');
});

closeButton.addEventListener('click', function(){
  modalWindow.classList.remove('visible');
});


var innerPlus = document.querySelectorAll(".inner__plus");
var innerButton = document.querySelectorAll(".inner");
var innerOpen = document.querySelectorAll(".inner-open")

function allClassesRemover(clickedButton) {
  innerPlus.forEach(singleItem => {
    if(singleItem.dataset.buttonOrder != clickedButton.dataset.buttonOrder) {
      singleItem.classList.remove('active');
    } else {
      singleItem.classList.toggle('active');
    }
  });
  innerOpen.forEach(Item => {
    if(Item.dataset.openOrder != clickedButton.dataset.buttonOrder) {
      Item.classList.remove('index');
    } else {
      Item.classList.toggle('index');
    }
  })
};

innerPlus.forEach(singleItem => {
  singleItem.addEventListener('click', function(e) {
    e.preventDefault();
    allClassesRemover(singleItem);
  })
});

innerOpen.forEach(Item => {
  allClassesRemover(Item);
});