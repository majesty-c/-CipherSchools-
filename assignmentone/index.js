
var startbutton=document.getElementById("start");
var stopbutton=document.getElementById("stop");
var resettbutton=document.getElementById("reset");
var today = new Date();
var Stimenow = today.getSeconds();
var sHtime=00
var sMtime=0
var sStime=0
var Interval ;
startbutton.onclick=function(){ 
    clearInterval(Interval);
    Interval= setInterval(updtime, 1000)
    
};
stopbutton.onclick=function(){ 
    clearInterval(Interval);
};
resettbutton.onclick=function(){
    clearInterval(Interval);
    sHtime=0
    sMtime=0
    sStime=0
    show(sHtime,sMtime,sStime)
}




function show(hh,mm,ss){
    document.getElementById("watch").innerHTML=`${hh} : ${mm} : ${ss}`;
}

function updtime(){
    if (sStime==59)
    {
        sMtime++
        sStime=0 
    }
    else{
        sStime++ 
    }
    if (sMtime == 60 )
    {
        sHtime++
        sMtime=0
    } 
    show(sHtime,sMtime,sStime)
}


