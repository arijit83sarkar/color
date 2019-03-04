const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listerners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);