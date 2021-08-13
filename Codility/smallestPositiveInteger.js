function solution(A) {
    const inputArray = [...A].filter(x=> x>0).sort(function(a, b) {
    return a - b;
    });

    let smallestIntNum=1;

    for(let i=0; i<inputArray.length; i+=1){
      if(inputArray[i] > smallestIntNum){
        return smallestIntNum;
      }
      smallestIntNum = inputArray[i] + 1;
    } 

    return smallestIntNum;  
}