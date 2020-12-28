let printNumTwo;
for (let i = 0; i <= 3; i++) {
  if (i === 3) {
    printNumTwo = function() {
      console.log(i)
      return i;
    };
  }
}
console.log(printNumTwo());
// returns 3
