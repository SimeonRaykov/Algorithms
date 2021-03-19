function FirstReverse(str) { 

    let reversed = '';
    
      for(let i=str.length; i>=0; i-=1){
      reversed+= str.charAt(i);
      }
    
      return reversed; 
    }