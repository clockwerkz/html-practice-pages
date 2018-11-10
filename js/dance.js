const slider = document.querySelector('.carousel__panels');
let transX = 0;
let objWidth =100;
let limit = (100*2)-100;
let reset=false;
let setTransition = false;
let timerObj=null;

leftControl = document.querySelector('.carousel__control--left-control');
rightControl = document.querySelector('.carousel__control--right-control');


leftControl.addEventListener('click', ()=>{
  if (timerObj) {
    clearInterval(timerObj);
    timerObj=null;
  }
  setAnimationTransition();
  transX+=objWidth;
  slider.style.transform = `translateX(${transX}px)`;
  setSlideTimer();
});

rightControl.addEventListener('click', ()=>{
  if (timerObj) {
    clearInterval(timerObj);
    timerObj=null;
  }
  setAnimationTransition();
  transX-=800;
  slider.style.transform = `translateX(${transX}px)`;
  setSlideTimer();
});


slider.addEventListener('transitionend', ()=> {
  console.log(transX);
  if (transX<=-100) {
    setAnimationTransition(false);
    transX=-100;
    slider.style.transform = `translateX(${transX}px)`;
  } else if (transX>= 0) {
    setAnimationTransition(false);
    transX=-4000;
    slider.style.transform = `translateX(${transX}px)`;
  }
});

const setSlideTimer = () => {
  debugger;
  if (!timerObj) {
    timerObj = setInterval(()=> {
      setAnimationTransition();
      transX-=800;
      slider.style.transform = `translateX(${transX}px)`;
    }, 6000);
  }
}

const setAnimationTransition = (animated=true) => {
    if (animated) {
        slider.style.transition = 'transform 0.75s ease-in-out';
    } else {
        slider.style.transition = 'none'; 
    }
}


//setSlideTimer();