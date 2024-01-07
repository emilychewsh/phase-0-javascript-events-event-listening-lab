const input = document.getElementById('button')

function addingEventListener() {
    input.addEventListener('click', alertMe)
}

function alertMe(){
    alert('I was clicked and called!')
}
