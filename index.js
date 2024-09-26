

// print number in order 

function count1To3(){

  setInterval(()=>{
       print1();
       print2();
       print3();
  } ,2000)
 
}



 function print1(){

  console.log("I am printing number: 1 and i was called first");
 }
 function print2(){

  setTimeout(()=>{

    console.log("I am printing number: 2 and i was second");
  },4000)
 
 }
 function print3(){

   console.log("I am printing number: 3 and i was third");
 }

count1To3();