let myarray = ["mango", "pine apple", "lemon", "guava", "apple"];

// now we are going to store this array in a variavle

let [a, b, c, d, e] = myarray;
console.log(a);
console.log(b);

// now we are going to call 1st and last item in easy way

console.log(myarray.length);

let [ajit, , , , last] = myarray;
console.log(`my first array list item is ${ajit} and last item is ${last}`);


// thats end