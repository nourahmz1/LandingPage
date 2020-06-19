function smoothScroll(target1,duration){
  const target = document.querySelector(target1);
  const targetPosition = target.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime){
    if(startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t,b,c,d){
    t /=d /2;
    if (t < 1 ) return c / 2 * t *t +b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) +b;
  }

  requestAnimationFrame(animation);

}


const pricpo = document.querySelector('#pricpoNav');
pricpo.addEventListener("click",function(){
  smoothScroll('#pricpo',1000);
});

const logo = document.querySelector('#homeNav');
logo.addEventListener("click",function(){
  smoothScroll('.logo',1000);
});

const Servicespo = document.querySelector('#ServicesNav');
Servicespo.addEventListener("click",function(){
  smoothScroll('.Servicespo',1000);
});