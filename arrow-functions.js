var names = ['tim', 'jon', 'bob'];
 var person = {
   name: 'Tim',
   greet: function() {
     names.forEach((name)=>{
       console.log(this.name + ' says hello to ' + name)
     })
   }
 }

console.log(person.greet(names));
//Challenge

// function add (a, b){
//   return a+b;
// }

var addStatement = (a, b) => {
  return a + b;
}

var addExpression = (a,b) => a + b;

console.log(addStatement(4, 5));
console.log(addExpression(1, 4));
