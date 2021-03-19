function BracketMatcher(str) { 
    let isCorrect = 1;
  
    let openingArr = [];
    let closingArr = [];
  
    for(let i=0; i<str.length; i+=1){
      let char = str.charAt(i);
  
      if(char === '('){
        openingArr.push({char, i});
      }
      else if(char === ')'){
        closingArr.push({char, i});
      }
    } 
    if(openingArr.length !== closingArr.length){
      isCorrect = 0;
    }else{
      while(openingArr.length !== 0){
        if(openingArr[0].i < closingArr[0].i){
           openingArr.shift();
           closingArr.shift();
        }
        else{
          isCorrect = 0;
          break;
        }
       
      }
    }
  
    return isCorrect; 
  
  }