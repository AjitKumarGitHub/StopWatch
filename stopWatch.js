
let timer=false;
let hr=0;
let min=0;
let sec=0;
let count=0;
function start(){
  timer=true;
  stopWatch();
}
function reset(){
  timer=false;
  stopWatch();
}

function stop(){
  timer=false;
  stopWatch();
}

function stopWatch(){
  
   if(timer==true){
  document.getElementById('count').innerHTML=count;
  count=count+1;
  if(count==99){
    sec=sec+1;
    document.getElementById('sec').innerHTML=sec;
    count=0;
  }
  if(sec==59){
    min=min+1;
    document.getElementById('min').innerHTML=min;
    sec=0;
  }
  if(min==59){
    hr=hr+1;
    document.getElementById('hr').innerHTML=hr;
    min=0;
  }
  
     setTimeout(stopWatch,10);
   }
}