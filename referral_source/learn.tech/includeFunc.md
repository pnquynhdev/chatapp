# What is the includes() function?

Imagine you have a box filled with items, and you want to quickly check if a specific item is inside. The includes() function in JavaScript acts like a handy tool for doing just that with arrays and strings.

## For Arrays:

- You provide an array (the box) and a value (the specific item) you're looking for.
- The function searches through the array's elements one by one.
- If it finds the value you specified anywhere in the array, it returns true (like finding the item in the box).
- If the value isn't found in the array, it returns false (like not finding the item in the box).
## For Strings:

- You provide a string (like a sentence) and a substring (a smaller part of the sentence) you want to check.
- The function searches for the substring within the string, considering case sensitivity.
- If the substring is found anywhere in the string, it returns true.
- If the substring isn't found, it returns false.
## Example (Array):

```JavaScript
const fruits = ["apple", "banana", "orange", "mango"];
const hasMango = fruits.includes("mango");

console.log(hasMango); // Output: true (mango is found in the fruits array)
```
## Example (String):

```JavaScript
const message = "Hello, world!";
const hasWorld = message.includes("world");

console.log(hasWorld); // Output: true (the substring "world" is found in the message)

const hasHelloUppercase = message.includes("HELLO"); // Case-sensitive, so this would be false
```
# Key Points:

- includes() is a built-in function in JavaScript, so you don't need to create it yourself.
- It's generally faster and more efficient than using a loop to manually search through an array or string.
- It's case-sensitive for strings (uppercase and lowercase letters are considered different).