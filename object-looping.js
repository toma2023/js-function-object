var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25
}
//  var keys = ['books', 'sunglass', 'Keyboard', 'mouse', 'pen', 'shoes'];
 const keys = Object.keys(shoppingCart);
  console.log(keys);
 const values = Object.values(shoppingCart);
console.log(values);
for (var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValues = shoppingCart[propertyName];
//    console.log(propertyName, propertyValues);
}
// for in loop
for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName,value);
}