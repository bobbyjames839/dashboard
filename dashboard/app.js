const toggle = document.getElementById('toggle');
const header = document.getElementsByClassName('header-left')[0];
const main = document.getElementsByClassName('main')[0];
const icons = document.querySelectorAll('#icon');
const title = document.getElementById('title');
const item = document.querySelectorAll('.item');

toggle.addEventListener('click', () => {

  if (main.classList.contains('expanded')) {
    main.classList.remove('expanded');
    header.classList.remove('shrunk');
    title.style.display= 'flex';
    icons.forEach(icon => {
      icon.classList.remove('changed');
    });
    
  } else {
    main.classList.add('expanded');
    header.classList.add('shrunk');
    title.style.display= 'none';
    icons.forEach(icon => {
      icon.classList.add('changed');
    });
  }
});




