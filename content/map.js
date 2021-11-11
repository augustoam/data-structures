/*
    Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

    * new Map() – creates the map.
    * map.set(key, value) – stores the value by the key.
    * map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    * map.has(key) – returns true if the key exists, false otherwise.
    * map.delete(key) – removes the value by the key.
    * map.clear() – removes everything from the map.
    * map.size – returns the current element count.
*/

// For looping over a map, there are 3 methods
// map.keys() – returns an iterable for keys
// map.values() – returns an iterable for values
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
}

/* ------------------------------------------------------------------------------------------*/

// When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
// array of [key, value] pairs
let map = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

alert(map.get('1')); // str1

/* ------------------------------------------------------------------------------------------*/

// If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
// So we can create a map from an object like this:

let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));

alert(map.get('name')); // John

/* ------------------------------------------------------------------------------------------*/

// There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(prices.orange); // 2

/* ------------------------------------------------------------------------------------------*/

// E.g. we store the data in a Map, but we need to pass it to a 3rd-party code that expects a plain object

let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2