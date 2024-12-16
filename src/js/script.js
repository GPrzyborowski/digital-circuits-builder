const board = document.querySelector('.board')
const menuItem = document.querySelectorAll('.menu__item')
const elementsTable = []
let startX, startY, diffX, diffY

const logE = (e) => {
    console.log(e);
}

const spawnNewElement = (e) => {
    const newElement = document.createElement(e.target.tagName)
    newElement.classList.add(e.target.classList[0], e.target.classList[1])
    newElement.style.position = 'fixed'
    newElement.textContent = e.target.innerText
    newElement.addEventListener('mousedown', moveElementMouseDown)
    elementsTable.push(newElement)
    board.append(newElement)
}

const moveElementMouseDown = (e) => {
    draggedElement = e.target;
    // Start position of mouse cursor
    startX = e.clientX
    startY = e.clientY

    document.addEventListener('mousemove', moveElementMouseMove)
    document.addEventListener('mouseup', moveElementMouseUp)
}

const moveElementMouseMove = (e) => {
    // Cursor position difference calculation
    diffX = startX - e.clientX
    diffY = startY - e.clientY
    // Changing the element's position
    draggedElement.style.left = draggedElement.offsetLeft - diffX + 'px';
    draggedElement.style.top = draggedElement.offsetTop - diffY + 'px';
    // Start position update
    startX = e.clientX
    startY = e.clientY
}

const moveElementMouseUp = (e) => {
    document.removeEventListener('mousemove', moveElementMouseMove)
    document.removeEventListener('mouseup', moveElementMouseUp);
}

menuItem.forEach(item => {
    item.addEventListener('click', logE)
    item.addEventListener('click', spawnNewElement)
})