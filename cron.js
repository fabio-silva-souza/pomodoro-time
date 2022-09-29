let initial;

let min = 0;
let sec = 0;

let minute = document.getElementById('minute');
let second = document.getElementById('second');

document.getElementById('start').onclick = () => start();
document.getElementById('pause').onclick = () => pause();
document.getElementById('reset').onclick = () => reset();

function start()
{ 
    pause();
    initial = setInterval(timer, 1000);
}
function pause()
{
    clearInterval(initial);
}
function reset()
{
    min = 0;
    sec = 0;
    minute.innerText = '00';
    second.innerText = '00';
    clearInterval(initial);
}
function timer()
{
    sec++;
    if(sec == 60)
    {
        sec = 00;
        min++;
    }
    minute.innerText = returnZero(min);
    second.innerText = returnZero(sec);
}
function returnZero(value) 
{
return value > 9 ? value : `0${value}`
}