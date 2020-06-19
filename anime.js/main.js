/*anime({
   targets:'div.box.red',
   translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
   rotate:{
    value:'1turn',
    easing:'easeInOutSine'
  }
});

anime({
   targets:'div.box.blue',
   translateY: [
    { value: 200, duration: 500, delay:800 },
    { value: 0, duration: 800 }
  ],
   rotate:{
    value:'1turn',
    easing:'easeInOutSine',
    delay:800
  }
});
anime({
   targets:'div.box.green',
   translateY: [
    { value: 200, duration: 500, delay:1600 },
    { value: 0, duration: 800 }
  ],
   rotate:{
    value:'1turn',
    easing:'easeInOutSine',
    delay:1600
  }
});
anime({
   targets:'div.box.yellow',
   translateY: [
    { value: 200, duration: 500, delay:2400 },
    { value: 0, duration: 800 }
  ],
   rotate:{
    value:'1turn',
    easing:'easeInOutSine',
    delay:2400
  }
});*/

var PlayPause = anime({
   targets:'div.box',
   translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 }
  ],
   rotate:{
    value:'1turn',
    easing:'easeInOutSine'
  },

  delay: function(el,i,l){return i* 1000},
  autoplay:false,
  loop:true
});
document.querySelector('#boxes .play').onclick = PlayPause.play;
document.querySelector('#boxes .pause').onclick = PlayPause.pause;