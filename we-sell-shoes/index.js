/*************
testimonial section
**************/

//three dots
const nextNext = document.getElementById('next-next')
const next = document.getElementById('next');
const prev = document.getElementById('prev');

//individual testimonials
const testi1 = document.querySelector('.testi1');
const testi2 = document.querySelector('.testi2');
const testi3 = document.querySelector('.testi3')

//testimonial parent container
const tests = document.querySelector('.tests');

let nextNextInt = window.setInterval(function() {
  //check for and remove second class
  if (tests.classList.contains('second')) {
    tests.classList.remove('second');

    //add the class which shows the third testimonial
    tests.classList.add('third');
  }

}, 4000)


let nextint = window.setInterval(function() {
  //check for and remove first class
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');

    //add the class that shows the second testimonial
    tests.classList.add('second');
  }

}, 8000)

let prevint = window.setInterval(function() {
  //check for and remove third class
  if (tests.classList.contains('third')) {
    tests.classList.remove('third');

    //add the class that has the first testimonial
    tests.classList.add('first');
  }
}, 16000)

//middle dot click
next.addEventListener("click", function() {

  //check to see what class the container has, and remove old classes
  if (tests.classList.contains('first')) {
    tests.classList.remove('first');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  //clear the timing interval
  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);

  //add the second class to the container to cycle it through
  tests.classList.add('second');

})

//third dot click
nextNext.addEventListener("click", function() {


  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('first')) {
    tests.classList.remove('first')
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('third');
})

//first dot click
prev.addEventListener("click", function() {

  if (tests.classList.contains('second')) {
    tests.classList.remove('second');
  }

  if (tests.classList.contains('third')) {
    tests.classList.remove('third');
  }

  window.clearInterval(nextNextInt);
  window.clearInterval(nextint);
  window.clearInterval(prevint);
  tests.classList.add('first');
})

////////////////// end of testimonial section

/////////////FAQ accordion section///////////////


//delcare default vars
const acc = document.getElementsByClassName("accordion");

//loop through all accordion buttons
for (let i = 0; i < acc.length; i++) {

  //trigger an event after click
  acc[i].addEventListener("click", function() {

    //add in the active class

    //select sibling element

    //add in the active class
    this.classList.toggle("active");

    //select sibling element
    let panel = this.nextElementSibling;
    //if sibling is open, close it, if closed, open it
    if (panel.style.maxHeight){
      //panel is open
      //panel is open open
      panel.style.maxHeight = null;

    } else {
      //panel is closed
  panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/////////popup//////////////

//declare default vars
const popUp = document.getElementById('pop-up');
const popUpLayer = document.getElementById('pop-up-layer');
const closeModal = document.getElementById('close-pop-up');

//nav-bar button
const subBtn = document.getElementById('sub-btn');

//navbar button click makes the popup appear
subBtn.addEventListener("click", () => {
  popUpLayer.style.display = 'flex';
})

//close model click makes the popup disappear
closeModal.addEventListener("click", function() {
  popUpLayer.style.display = 'none';
})

let popUpSeconds = 40;

//trigger popup after seconds variable
let popUpFun = window.setInterval(function() {
  popUpLayer.style.display = 'flex';

  window.clearInterval(popUpFun);

}, popUpSeconds * 1000);

///////////////////
