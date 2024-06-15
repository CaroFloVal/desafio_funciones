let color;

document.addEventListener('keydown', function(event) {
    const keyDiv = document.getElementById('key');
    
    if (event.key === 'a') {
        color = 'pink';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 's') {
        color = 'orange';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'd') {
        color = 'skyblue';
        keyDiv.style.backgroundColor = color;
    } else if (event.key === 'q') {
        color = 'purple';
        createColorDiv(color);
    } else if (event.key === 'w') {
        color = 'gray';
        createColorDiv(color);
    } else if (event.key === 'e') {
        color = 'brown';
        createColorDiv(color);
    }
});

function createColorDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}

