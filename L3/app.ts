console.log("Hello World!");
function Print (user : User ){
   console.log(user.name);

}
type User ={
    name: String, 
    age: Number ,
}

const user : User ={
    name: "John",
    age: 30,
}

Print(user);

