var shoppingCart = {
    books: 3,
    sunglass: 1,
    Keyboard: 5,
    mouse: 1,
    pen: 25
}
var penCount = shoppingCart.pen;
var penCount2 = shoppingCart['mouse'];
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
var propertyName = 'mouse';
var propertyValues = shoppingCart[propertyName];
console.log(propertyValues);
// console.log(propertyValues);

// console.log(properties);
// console.log(penCount2);
// console.log(shoppingCart);