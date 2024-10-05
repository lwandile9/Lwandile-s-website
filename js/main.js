

// get elements
console.log('done1');
 
 const animatedProgressBar = document.querySelectorAll('.progress-bar');

 console.log(animatedProgressBar);

 animatedProgressBar.forEach((element)=>{

  
 
  setInterval(()=>{
    
    element.style.width='20%';

  }, 1000)
 

 })