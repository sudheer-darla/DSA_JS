function getColTitle(A) {
  const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let columnTitle = '';
  if (A <= 26) {
    return letters[A];
  }

  while (A > 0) {
    let index = A % 26;
    const char = index ? letters[index] : letters[26];
    columnTitle = char + columnTitle;    
    A = Math.floor((A-1) / 26);
  }

  return columnTitle;
}

console.log(getColTitle(943566));
console.log(getColTitle(546));
