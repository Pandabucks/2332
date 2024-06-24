document.write("Hello JS");
console.log("HEllo world");

let name = "John";
const pi = 3.14 
let isAdmin = true;
let color = ['red', 'green', 'blue']
let person = { 
    name: 'John',
    age: 25
}
document.write(name);
document.write("<br>");
document.write(pi);
document.write(color[1])
document.write(person.age)

function sayHi() {
    const name = document.getElementById('name').value;
    alert("Hi." + name);
}