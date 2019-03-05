const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill Listerners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through the empties and call drag event
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 1);
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    //console.log('over');
}

function dragEnter(e) {
    e.preventDefault();
    //console.log('enter');
    this.className += ' hovered';
}

function dragLeave() {
    //console.log('leave');
    this.className = 'empty';
}

function dragDrop() {
    //console.log('drop');
    this.className = 'empty';
    this.append(fill);
}
