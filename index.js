const form = document.querySelector('.form');
const block = document.querySelector('.block');
const sputnik = document.querySelector('.sputnik');

form.addEventListener('submit',(event)=>{
  event.preventDefault();
  block.classList.add('hide');
  sputnik.classList.remove('hide');
})