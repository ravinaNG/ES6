var testContext = 15;
function testFunction() {
  console.log(this.testContext);
}
testFunction();
// undefined