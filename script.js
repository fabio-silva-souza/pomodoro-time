let initial;

let min = 24;
let sec = 60;

let minute = document.getElementById('minute');
let second = document.getElementById('second');

document.getElementById('start').onclick = () => start();
document.getElementById('pause').onclick = () => pause();

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
    min = 24;
    sec = 60;
    minute.innerText = '25';
    second.innerText = '00';
}
function timer()
{
    sec--;
    if(sec == 0)
    {
        sec = 60;
        min--;
    }
    if(min == 0)
    {
        winTimer();
    }
    
    minute.innerText = returnZero(min);
    second.innerText = returnZero(sec);
}
function winTimer()
{
    min = 4;
    min === 0 
    // setTimeout(() => { 
    //     reset();
    //     pause();
    // }, 40000);
}
function returnZero(value) 
{
return value > 9 ? value : `0${value}`
}

