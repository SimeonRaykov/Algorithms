// Implement an autocomplete system.
// That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.
// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Regex solution
function autocompleteSystemRegex(set, search) {
  const regex = new RegExp(search, "i");
  const returnedWords = [];
  for (let i = 0; i < set.length; i += 1) {
    if (regex.test(set[i])) returnedWords.push(set[i]);
  }
  return returnedWords;
}

// String comparison solution
function autocompleteSystemStringComparison(set, search) {
  const returnedWords = [];
  for (let i = 0; i < set.length; i += 1) {
    let isMatched = true;
    for (let x = 0; x < search.length; x += 1) {
      if (search[x] !== set[i][x]) isMatched = false;
    }
    if (isMatched) returnedWords.push(set[i]);
  }
  return returnedWords;
}

autocompleteSystemRegex("deal", "dog", "deer", "de");
