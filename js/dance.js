const slider = document.querySelector('.carousel__panels');
let transX = -100;
let objWidth =100;
let upperLimit = -(100*4);
let lowerLimit = 0;
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
  setTranslate(transX);
  setSlideTimer();
});

rightControl.addEventListener('click', ()=>{
  if (timerObj) {
    clearInterval(timerObj);
    timerObj=null;
  }
  setAnimationTransition();
  transX-=objWidth;
  setTranslate(transX);
  setSlideTimer();
});


slider.addEventListener('transitionend', ()=> {
  if (transX===upperLimit) {
    setAnimationTransition(false);
    transX=lowerLimit-objWidth;
    setTranslate(transX);
  } else if (transX=== lowerLimit) {
    setAnimationTransition(false);
    transX=upperLimit+100;
    setTranslate(transX);
  }
});

const setSlideTimer = () => {
  if (!timerObj) {
    timerObj = setInterval(()=> {
      setAnimationTransition();
      transX-=objWidth;
      setTranslate(transX);
    }, 6000);
  }
}

const setTranslate = (value) => {
    slider.style.transform = `translateX(${value}%)`;
}

const setAnimationTransition = (animated=true) => {
    if (animated) {
        slider.style.transition = 'transform 0.75s ease-in-out';
    } else {
        slider.style.transition = 'none'; 
    }
}


setSlideTimer();