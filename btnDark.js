let container = document.getElementById('container')
let body = document.querySelector('body')
 

document.getElementById('darkMode').onclick = () => darkMode();
document.getElementById('styleMode').onclick = () => styleMode();

function darkMode()
{
    body.classList.toggle('dark');
}

function styleMode()
{
    let content = '';
    content += '<div class="hours" id="container2">Try again later :(</div> <br> <button>Back<button>'
    container.innerHTML = content
}
