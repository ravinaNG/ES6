var x = 5;
console.debug(x);
function print_x(){
    x = x + 1
    console.debug(x);
}

(function (){
    var x = 10;
    console.debug(x);
    print_x();
    print_x();
})();