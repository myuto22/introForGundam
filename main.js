window.onload = function(){
  setTimeout(()=>{
    document.getElementById('loader1').style.visibility='hidden';
  },0)
  setTimeout(() => {
    document.getElementById('video1').style.visibility='hidden';
    document.getElementById('div1').style.visibility='hidden';
  }, 39500);
  startTimer();
}
function skipVideo(){
  document.getElementById('video1').style.visibility='hidden';
  document.getElementById('div1').style.visibility='hidden';
  document.getElementById('video1').style.zIndex='0';
  document.getElementById('div1').style.zIndex='0';

}

menubar = 1;
function right(){
  menubar++;
  if(menubar == 2){
    document.getElementById('gun1').style.top= 2800+'px';
    document.getElementById('gun1').style.left= 1020+'px';
    document.getElementById('gun1').style.height= 400+'px';
    document.getElementById('gun2').style.opacity= 0;
    document.getElementById('gun3').style.left= 160+'px';
    document.getElementById('gun5').style.opacity= 1;
    document.getElementById('gun6').style.left= 520+'px';
    document.getElementById('gun6').style.top= 2700+'px';
    document.getElementById('gun6').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'MS-07 Gouf';
  }if(menubar == 3){
    document.getElementById('gun6').style.top= 2800+'px';
    document.getElementById('gun6').style.left= 1020+'px';
    document.getElementById('gun6').style.height= 400+'px';
    document.getElementById('gun1').style.opacity= 0;
    document.getElementById('gun2').style.left= 160+'px';
    document.getElementById('gun4').style.opacity= 1;
    document.getElementById('gun5').style.left= 520+'px';
    document.getElementById('gun5').style.top= 2700+'px';
    document.getElementById('gun5').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'MS-06S Commanders Zaku II';
  }if(menubar == 4){
    document.getElementById('gun5').style.top= 2800+'px';
    document.getElementById('gun5').style.left= 1020+'px';
    document.getElementById('gun5').style.height= 400+'px';
    document.getElementById('gun6').style.opacity= 0;
    document.getElementById('gun1').style.left= 160+'px';
    document.getElementById('gun3').style.opacity= 1;
    document.getElementById('gun4').style.left= 520+'px';
    document.getElementById('gun4').style.top= 2700+'px';
    document.getElementById('gun4').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'MS-06 Zaku II';
  }if(menubar == 5){
    document.getElementById('gun4').style.top= 2800+'px';
    document.getElementById('gun4').style.left= 1020+'px';
    document.getElementById('gun4').style.height= 400+'px';
    document.getElementById('gun5').style.opacity= 0;
    document.getElementById('gun6').style.left= 160+'px';
    document.getElementById('gun2').style.opacity= 1;
    document.getElementById('gun3').style.left= 520+'px';
    document.getElementById('gun3').style.top= 2700+'px';
    document.getElementById('gun3').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'RX-75 Guntank';
  }if(menubar == 6){
    document.getElementById('gun3').style.top= 2800+'px';
    document.getElementById('gun3').style.left= 1020+'px';
    document.getElementById('gun3').style.height= 400+'px';
    document.getElementById('gun4').style.opacity= 0;
    document.getElementById('gun5').style.left= 160+'px';
    document.getElementById('gun1').style.opacity= 1;
    document.getElementById('gun2').style.left= 520+'px';
    document.getElementById('gun2').style.top= 2700+'px';
    document.getElementById('gun2').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'RX-77-2 Guncannon';
  }if(menubar == 7){
    document.getElementById('gun2').style.top= 2800+'px';
    document.getElementById('gun2').style.left= 1020+'px';
    document.getElementById('gun2').style.height= 400+'px';
    document.getElementById('gun3').style.opacity= 0;
    document.getElementById('gun4').style.left= 160+'px';
    document.getElementById('gun6').style.opacity= 1;
    document.getElementById('gun1').style.left= 520+'px';
    document.getElementById('gun1').style.top= 2700+'px';
    document.getElementById('gun1').style.height= 600+'px';
    document.getElementById('p8').innerHTML= 'RX-78 Gundam';
    menubar = 1;
  }else{}
}

function left(){
  menubar--;
  if(menubar == 0){
    document.getElementById('gun1').style.top= 2800+'px';
    document.getElementById('gun1').style.left= 160+'px';
    document.getElementById('gun1').style.height= 400+'px';
    document.getElementById('gun2').style.left= 520+'px';
    document.getElementById('gun2').style.height= 600+'px';
    document.getElementById('gun2').style.top= 2700+'px';
    document.getElementById('gun3').style.opacity= 1;
    document.getElementById('gun4').style.left= 1020+'px';
    document.getElementById('gun6').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'RX-77-2 Guncannon';
    menubar = 6;
  }if(menubar == 6){
    document.getElementById('gun1').style.top= 2800+'px';
    document.getElementById('gun1').style.left= 160+'px';
    document.getElementById('gun1').style.height= 400+'px';
    document.getElementById('gun2').style.left= 520+'px';
    document.getElementById('gun2').style.height= 600+'px';
    document.getElementById('gun2').style.top= 2700+'px';
    document.getElementById('gun3').style.opacity= 1;
    document.getElementById('gun4').style.left= 1020+'px';
    document.getElementById('gun6').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'RX-77-2 Guncannon';
    menubar = 6;
  }if(menubar == 5){
    document.getElementById('gun2').style.top= 2800+'px';
    document.getElementById('gun2').style.left= 160+'px';
    document.getElementById('gun2').style.height= 400+'px';
    document.getElementById('gun3').style.left= 520+'px';
    document.getElementById('gun3').style.height= 600+'px';
    document.getElementById('gun3').style.top= 2700+'px';
    document.getElementById('gun4').style.opacity= 1;
    document.getElementById('gun5').style.left= 1020+'px';
    document.getElementById('gun1').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'RX-75 Guntank';
  }if(menubar == 4){
    document.getElementById('gun3').style.top= 2800+'px';
    document.getElementById('gun3').style.left= 160+'px';
    document.getElementById('gun3').style.height= 400+'px';
    document.getElementById('gun4').style.left= 520+'px';
    document.getElementById('gun4').style.height= 600+'px';
    document.getElementById('gun4').style.top= 2700+'px';
    document.getElementById('gun5').style.opacity= 1;
    document.getElementById('gun6').style.left= 1020+'px';
    document.getElementById('gun2').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'MS-06 Zaku II';
  }if(menubar == 3){
    document.getElementById('gun4').style.top= 2800+'px';
    document.getElementById('gun4').style.left= 160+'px';
    document.getElementById('gun4').style.height= 400+'px';
    document.getElementById('gun5').style.left= 520+'px';
    document.getElementById('gun5').style.height= 600+'px';
    document.getElementById('gun5').style.top= 2700+'px';
    document.getElementById('gun6').style.opacity= 1;
    document.getElementById('gun1').style.left= 1020+'px';
    document.getElementById('gun3').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'MS-06S Commanders Zaku II';
  }if(menubar == 2){
    document.getElementById('gun5').style.top= 2800+'px';
    document.getElementById('gun5').style.left= 160+'px';
    document.getElementById('gun5').style.height= 400+'px';
    document.getElementById('gun6').style.left= 520+'px';
    document.getElementById('gun6').style.height= 600+'px';
    document.getElementById('gun6').style.top= 2700+'px';
    document.getElementById('gun1').style.opacity= 1;
    document.getElementById('gun2').style.left= 1020+'px';
    document.getElementById('gun4').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'MS-07 Gouf';
  }if(menubar == 1){
    document.getElementById('gun6').style.top= 2800+'px';
    document.getElementById('gun6').style.left= 160+'px';
    document.getElementById('gun6').style.height= 400+'px';
    document.getElementById('gun1').style.left= 520+'px';
    document.getElementById('gun1').style.height= 600+'px';
    document.getElementById('gun1').style.top= 2700+'px';
    document.getElementById('gun2').style.opacity= 1;
    document.getElementById('gun3').style.left= 1020+'px';
    document.getElementById('gun5').style.opacity= 0;
    document.getElementById('p8').innerHTML= 'RX-78 Gundam';
  }else{}
}

function startTimer(){
  timerId1 = setInterval(() => {
    right();
  },2000);
}

timer = true;
function stopTimer(){
  if(timer == true){
    clearInterval(timerId1);
    timer = false;
    document.getElementById('maxwell').innerHTML= 'start move';
  }else{
    startTimer();
    timer = true;
    document.getElementById('maxwell').innerHTML= 'stop move';
  }
}