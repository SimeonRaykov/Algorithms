function LongestWord(sen) { 
  
    let longestWord = '';
    const wordsArr = sen.match(/(\w|\s)*\w(?=")|\w+/g);
    for(word of wordsArr){
      if(longestWord.length < word.length){
        longestWord = word;
      }
    }
    return longestWord; 
  }
