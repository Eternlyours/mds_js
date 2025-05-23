function sum() {
    let a, b, sum;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    sum = a + b;
    alert(sum);
}

// {
//     let countPhotoInFolder, countPhotoOfPages, countOfPages;
//     countPhotoInFolder = parseInt(prompt("Введите количество фотографий"));
//     countOfPages = parseInt(prompt("Введите количество фотографий на странице"));
//     countPhotoOfPages = Math.ceil(countPhotoInFolder / countOfPages);
//     alert(countPhotoOfPages);
// }

// {
//     let a = 1, b;
//     b = ++a;
//     console.log(a, b)
// }


// {
//     let a = 13 % 3;
//     let b = Math.floor(14 % 5)
//     console.log(a, b)
// }

// {
//     let number, a1, a2, a3, a4;
//     number = parseInt(prompt("4-ое число"));
//     a1 = Math.floor(number % 10);
//     a2 = Math.floor(number / 10 % 10);
//     a3 = Math.floor(number / 100 % 10);
//     a4 = Math.floor(number / 1000 % 10);
//     console.log(a1, a2, a3, a4);
// }

// найти максимум из двух чисел

// {
//     let x, y, z, max;
//     x = parseFloat(prompt('Первое число'));
//     y = parseFloat(prompt('Введите второе число'));
//     z = parseFloat(prompt('Введите третье число'));

//     max = x;

//     if (x >= y && x >= z ) {
//         console.log(x + ' больше ' + y + ' и ' + z)
//     }
//     else if (y >= x && y >= z) {
//         console.log(y + ' больше ' + z + ' и ' + x)
//     }
//     else {
//         console.log(z + ' больше ' + y + ' и ' + x)
//     }
// }

// Даны n-чисел, найти максимум среди них

// {
//     let n, a, max;
//     n = parseInt(prompt('Введите количество чисел'))
//     max = parseInt(prompt('Введите число'))
//     for (let i = 1; i < n; i++) {
//         console.log(i)
//         a = parseInt(prompt('Введите число'))
//         if (a > max) {
//             max = a
//         }
//     }
//     alert(max)
// }

// Дана последовательность чисел которая заканчивается вводом числа 0, найти максимум среди этих чисел

{
    let a, max;
    a = parseInt(prompt('Введите число'))
    max = a
    while ( a != 0 ) {
        a = parseInt(prompt('Введите число'))
        if (a > max) {
            max = a
        }
    }
    alert(max)
}