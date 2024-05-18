//Question 1
//Create an array named fruits that contains the following string
let fruit: string[]= ['Apple' , 'Banana' , 'Mango' , 'Orange'];
console.log(fruit);
// Output = [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//Question 2
//Declare an array named numbers that can contain only numberelements and initialize); it with the values 10, 20, 30, and 40.
let numbers: number[]= [10 , 20 , 30];
console.log(numbers);
// Output = [ 10, 20, 30 ]

//Question 3
//Access the third element of the fruits array and assign it to avariable named thirdFruit.
let thirdFruit= fruit[2];
console.log(fruit[2]);
// Output = Mango


//Question 4
//Change the second element of the numbers array to 25.
numbers[1]= 25;
console.log(numbers);
// Output = [ 10, 25, 30 ]

//Question 5
//Add the element "grape" to the end of the fruits array using the method.
fruit.push('Grape');
console.log(fruit);
// Output [ 'Apple', 'Banana', 'Mango', 'Orange', 'Grape' ]

//Question 6
//Remove the last element from the fruits array using the method and assign it to a variable named lastFruit.
let lastFruit= fruit.pop();
console.log(lastFruit);
// Output = [ 'Apple', 'Banana', 'Mango', 'Orange']

//Question 7
//Remove the first element from the fruits array using the method and assign it to a variable named firstFruit.
let firstFruit= fruit.shift();
console.log(firstFruit);
// Output = ['Banana', 'Mango', 'Orange', 'Grape' ]

// Question 8
//Add the element "kiwi" to the beginning of the fruits array using the method.
fruit.unshift('Kiwi');
console.log(fruit);
// Output = [ 'Kiwi', 'Apple', 'Banana', 'Mango', 'Orange' ]

//Question 9
//Remove 2 elements from the fruits array starting from index 1 using the method.
fruit.splice(1,2);
console.log(fruit);
// Output = [ 'Apple', 'Orange' ]

//Question 10
//Insert the elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruit.splice(1 , 2 , 'pineapple' , 'pear');
console.log(fruit);
 //Output = [ 'Apple', 'pineapple', 'pear', 'Orange' ]

//Question 11
//Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
let citrusFruits= fruit.splice(0,2);
console.log(citrusFruits);
// Output = [ 'Apple', 'Banana' ]

//Question 12
//Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let lastTwoFruits= fruit.splice(-2);
console.log (lastTwoFruits);
// Output = [ 'Mango', 'Orange' ]


