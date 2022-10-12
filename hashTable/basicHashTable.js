const obj = {
  name: 'Biplob',
  age: 22,
  printName: function(){
    console.log("Biplob");
  }
}

console.log(obj.age) // O(1)
obj.favrt = 'nothing' // O(1)
delete obj.printName // O(1)
console.log(obj)