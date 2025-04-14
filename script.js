var bottom=document.querySelector('#bottom')
var timer=document.querySelector('#timer')
var hit=document.querySelector('#hitbar')
var score=document.querySelector('#scored')
var rn;
var hitrn=0;
function makebubble(){
 var clutter="";
for(var i=1;i<=168;i++){ 
   rn=Math.floor(Math.random()*10)
  clutter+=`<div class="bubble">${rn}</div>`
}
bottom.innerHTML=clutter
}
makebubble()
var time=60;
function runtimer(){
  var int=  setInterval(function(){
    if(time>0){
      time--;
      timer.textContent=time
    }
    else{
      clearInterval(int);
      bottom.innerHTML=`<h1>Game Over</h1>`

    }
     
    },1000)
}
runtimer()



function hitter(){
  hitrn = Math.floor(Math.random()*10);
  hit.textContent=hitrn;

}

hitter()


var scored=0;
function scoring(){   
     scored+=10
     score.textContent=scored
}
// scoring()
 var girtar;
bottom.addEventListener("click",function(details){
  girtar=Number(details.target.textContent)
   if(girtar===hitrn){
    scoring()
    makebubble()
    hitter()
   }
  //  else{
  //   alert("Not right bubble")
  //   makebubble()
  //  }
})