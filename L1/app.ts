function add(num1 : number , num2 : number ,printResult : boolean  , someText : string ){
    if(printResult){
        console.log(`${someText} ${num1+num2}`);
    }
    else{
        return num1+num2;
    }
}

const printResult = true
const someText = "Hello, world!"
const res = add(20 , 3000 , printResult , someText );
