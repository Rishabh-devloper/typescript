function add(num1, num2, printResult, someText) {
    if (printResult) {
        console.log("".concat(someText, " ").concat(num1 + num2));
    }
    else {
        return num1 + num2;
    }
}
var printResult = true;
var someText = "Hello, world!";
var res = add(20, 3000, printResult, someText);
