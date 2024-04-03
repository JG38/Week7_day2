
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`This person's name is ${this.name}, age is ${this.age}.`);
    };

    addAge = (years) => {
        this.age += years;
    };
}

let person1 = new Person("Bill", 24);
person1.printInfo();

let person2 = new Person("Future Bill", 24);
person2.addAge(3);
person2.printInfo();

const checkStringLength = (string) => {
    return new Promise((resolve, reject) => {
        if (string.length > 10) {
            resolve(string);
        } else {
            reject(string);
        }
    });
};

let string = "Onomatopoeia";

checkStringLength(string)
    .then((result) => {
        console.log(`Big Word, this string has ${result.length} characters!`);
    })
    .catch((result) => {
        console.log(`Small number, this string has only ${result.length} characters.`);
    });

const reverseDigits = (num) => {
    let numArr = String(num).split("").map((num) => Number(num));
    return console.log(numArr.reverse());
};

reverseDigits(2398);

const findSmallestInt = (array) => {
    let smallestInt = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallestInt) {
            smallestInt = array[i];
        }
    }
    return smallestInt;
};

console.log(findSmallestInt([3, 56, 5, 0]));
