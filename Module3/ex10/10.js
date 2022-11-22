source.addEventListener('submit', function(event){
    event.preventDefault();
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastname = document.querySelector('input[name="lastname"]').value;
    target.innerHTML = `Your name is ${firstName} ${lastname}`;
});