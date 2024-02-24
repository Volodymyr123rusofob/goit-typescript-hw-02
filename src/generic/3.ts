/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

//$це був мій варіант
// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// export {};

//$ Це з конспекту і також ця помилка.
// function merge<T, U>(objA: T, objB: U) {
//     return Object.assign(objA, objB);
// }

// const merged = merge({ name: "Alisa" }, { age: 28 });

// merged.name;

// export {};

//^це GPT
function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

export {};
