const sum = (...sums) => {
    // const args = [x, y, z];
    return sums.reduce((a, b,c) => a * b *c);
  }
console.log(sum(1,2,3));