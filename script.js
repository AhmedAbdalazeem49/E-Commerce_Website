
const bar = document.getElementById("bar");

const nav = document.getElementById("navbar");

const close = document.getElementById("close");

// function when open
if(bar){
  bar.addEventListener("click" , () => {
    nav.classList.add("active");
  },100); 
  // I have added 100 ms before the active class will be added to the nav menu.
}

// Function when close
if(close){
  close.addEventListener("click" , () => {
    nav.classList.remove("active");
  },100); 
  // I have added 100 ms before the active class will be added to the nav menu.
}