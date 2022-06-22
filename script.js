let initial;

let min = 24;
let sec = 60;

let minEx = [4 , 4 , 15 , 30]
let minuteExtra = document.getElementById("minute-2")

let contains = document.getElementById("contains")
let contains2 = document.getElementById("contains-2")

let minute = document.getElementById('minute');
let second = document.getElementById('second');

document.getElementById('start').onclick = () => start();
document.getElementById('pause').onclick = () => pause();

function start()
{ 
    pause();
    initial = setInterval(timer, 10);
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
    else if(min == 0)
    {
        winTimer();
    }
    
    
    minute.innerText = returnZero(min);
    second.innerText = returnZero(sec);
}
function winTimer()
{
    contains.style.display = "none"
    contains2.style.display = "flex"
    
    
    minuteExtra.innerText = minEx[0]

}
function returnZero(value) 
{
return value > 9 ? value : `0${value}`
}
// setTimeout(() => { 
//     reset();
//     pause();
// }, 40000);
