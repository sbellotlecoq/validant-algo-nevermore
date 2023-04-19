const fs = require('fs');
const fileName = process.argv[2];

// Méthode asynchrone pour lire le fichier
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    console.log(data);

    const splitData = data.split('\n');
    const intArray = splitData.map(item => parseInt(item));

    const nextIsTaller = (array) => {
        let count = 1
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                count++
            }
        }
        return count
    }

    console.log(nextIsTaller(intArray));
});