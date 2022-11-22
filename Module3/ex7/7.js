document.getElementById("trigger").addEventListener('mouseover', (event) => {
    target.setAttribute('src', 'img/picB.jpg');
});

document.getElementById("trigger").addEventListener('mouseout', (event) => {
    target.setAttribute('src', 'img/picA.jpg');
});