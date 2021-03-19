function FirstFactorial(num) { 

    let factorial = 1;
  
    for(let i=2; i<=num; i+=1){
      factorial *= i
    }
    return factorial; 
  }
     