const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target1 = document.querySelectorAll('[data-anime1]');
const target2 = document.querySelectorAll('[data-anime2]');
const target3 = document.querySelectorAll('[data-anime3]');
const target4 = document.querySelectorAll('[data-anime4]');
const animationClass = 'animate';


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  const alturaJanela1 = window.innerHeight * 0.75;
  const alturaJanela2 = window.innerHeight * 1.2;
  const alturaJanela3 = window.innerHeight * 1.75;
  const alturaJanela4 = window.innerHeight * 4.75;
  
  //parte1
  target1.forEach(function(element) {
	alturaElemento = element.offsetTop + alturaJanela1;
    if((windowTop) > alturaElemento) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
	
  })
  
  //parte2
  target2.forEach(function(element) {
	alturaElemento = element.offsetTop + alturaJanela2;
    if((windowTop) > alturaElemento) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
  
  //parte3
  target3.forEach(function(element) {
	alturaElemento = element.offsetTop + alturaJanela3;
    if((windowTop) > alturaElemento) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
  
  //parte4
  target4.forEach(function(element) {
	alturaElemento = element.offsetTop + alturaJanela4;
    if((windowTop) > alturaElemento) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
	console.log(alturaElemento);
	
  })
  
  console.log(windowTop);
}

animeScroll();

if(target1.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}

if(target2.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}