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

{
    let number, a1, a2, a3, a4;
    number = parseInt(prompt("4-ое число"));
    a1 = Math.floor(number % 10);
    a2 = Math.floor(number / 10 % 10);
    a3 = Math.floor(number / 100 % 10);
    a4 = Math.floor(number / 1000 % 10);
    console.log(a1, a2, a3, a4);
}