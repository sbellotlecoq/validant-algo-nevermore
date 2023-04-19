// const fs = require('fs');
// const fileName = process.argv[2];

// // Méthode asynchrone pour lire le fichier
// fs.readFile(fileName, 'utf8', (error, data) => {
//     if (error) {
//         console.error(error.message);
//         return ;
//     }
//     console.log(data);
// });

//exos1  vérifie si la somme de l'élément courant et d'un autre élément du tableau est égale à k

const sum = (array, k) => {
    let boolean = false;
    let numbers = [];
    for (let i = 0; i < array.length; i++) {
        for (let j= 0; j < array.length; j++) {
            if (i!== j) {
                if (array[i] + array[j] === k) {
                    boolean = true;
                    numbers.push(array[i], array[j]);
                }
            }
        }
    }
    return {boolean: boolean, numbers: numbers};
}

const array1 = [10, 15, 3, 7];
const k1 = 17;
console.log(sum(array1, k1)); // { boolean: true, numbers: [ 10, 7, 7, 10 ] }

const array2 = [1, 8, 10, 21];
const k2 = 19;
console.log(sum(array2, k2)); // { boolean: false, numbers: [] }

const array3 = [1, 9, 10, 21, 7, 12, 14];
const k3 = 19;
console.log(sum(array3, k3)); // { boolean: true, numbers: [9, 10, 10, 9, 7, 12, 12, 7]}