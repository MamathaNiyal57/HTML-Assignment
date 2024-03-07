document.getElementById("button-1").addEventListener("click",()=> Start());
document.getElementById("button-2").addEventListener("click",()=> Pause());
document.getElementById("button-3").addEventListener("click",()=> Resume());
document.getElementById("button-4").addEventListener("click",()=> Stop());

let time_out=0;
let num=0;
let time;

document.getElementById("button-2").disabled=true;
document.getElementById("button-3").disabled=true;
document.getElementById("button-4").disabled=true;

function Start()
{
    if(!time_out)
    {
        num=0;
        time_out=1;
        document.getElementById("button-1").disabled=true;
        document.getElementById("button-2").disabled=false;
        document.getElementById("button-3").disabled=true;
        document.getElementById("button-4").disabled=false;
        startt();


    }
}
function startt()
{
    num++;
    document.getElementById("count").innerHTML=num;
    time=setTimeout(startt,500);
}
function Pause()
{
    clearTimeout(time);
    document.getElementById("button-1").disabled=true;
    document.getElementById("button-2").disabled=true;
    document.getElementById("button-3").disabled=false;
    document.getElementById("button-4").disabled=false;
}

function Resume()
{
    startt();
    document.getElementById("button-1").disabled=true;
    document.getElementById("button-2").disabled=false;
    document.getElementById("button-3").disabled=true;
    document.getElementById("button-4").disabled=false;
}

function Stop()
{
    clearTimeout(time);

    document.getElementById("button-1").disabled=false;
    document.getElementById("button-2").disabled=true;
    document.getElementById("button-3").disabled=true;
    document.getElementById("button-4").disabled=true;
    time_out=0;

}



