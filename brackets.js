function brackets(input) {
  if (!input?.length) return false;

  let isMathematicalOperation = false;

  const charArr = input.split('');
  const charrArrLength = charArr.length;

  for (let x = 0; x < charrArrLength; x += 1) {
    if (charArr[x] === ')' && charArr[x - 1] === '(') {
      charArr.splice(x, 1);
      charArr.splice(x - 1, 1);
      x -= 2;
    }
  }
  if (!charArr.length) {
    isMathematicalOperation = true;
  }

  console.log('result -> ', isMathematicalOperation);
}

brackets('()'); // valid
brackets("(())"); // valid
brackets('())('); // invalid
brackets('))('); // invalid
brackets('()()(())'); // valid
brackets('(()())'); // valid