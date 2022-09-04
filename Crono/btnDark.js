let container = document.getElementById('container')
let body = document.querySelector('body')
 

document.getElementById('darkMode').onclick = () => darkMode();
document.getElementById('styleMode').onclick = () => styleMode();

function darkMode()
{
    container.classList.toggle('dark');
    
    console.log(container)
    //  ? body.style.backgroundColor = 'green' : body.style.backgroundColor = 'yellow' 
}

function styleMode()
{

}
