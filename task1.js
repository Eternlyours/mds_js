//2.3. Дана масса в килограммах. Найти число полных тонн в ней. 
// {
//     let kg;
//     kg = parseFloat(prompt("Масса в кг"));
//     console.log("Масса в тоннах: " + kg*1000)
// }

// 2.12. Дано трехзначное число. Найти: б) число десятков в нем; 

// {
//     let digit;
//     digit = parseInt(prompt("Трехзначное число"))
//     console.log("Количество десятков в числе " + digit + " - " +Math.floor(digit / 10 % 10))
// }

// 4.10. Даны радиус круга и сторона квадрата. У какой фигуры площадь больше? 

// {
//     let p1, r;
//     const P = 3.14;
//     p1 = parseFloat(prompt('Введите сторону квадрата'));
//     r = parseFloat(prompt('Введите радиус круга'));
//     Scircle = Math.pow(r, 2) * P;
//     Ssquare = Math.pow(p1, 2)
//     console.log(Scircle, Ssquare)

//     if (Scircle > Ssquare)
//     {
//         console.log('Площадь круга больше ' + Scircle)
//     }
//     if (Scircle < Ssquare){
//         console.log('Площадь квадрата больше ' + Ssquare)
//     }
//     if (Scircle == Ssquare){
//         console.log('Площади равны ' + Scircle + ' == ' + Ssquare)
//     }
// }

// 4.30. Дано трехзначное число. Определить: б) является ли произведение его цифр трехзначным числом; 

{
    let digit, length, secondDigit;
    digit = parseInt(prompt('Введите 3-ое число'))
    first = Math.floor(digit / 100 % 100)
    second = Math.floor(digit / 10 % 10)
    third = digit % 10
    secondDigit = first * second * third
    length = String(secondDigit).length
    if (length === 3 ) {
        console.log('Число трехзначное ' + length)
    }
    else {
        console.log('Число не трёхзначное ' + length)
    }


}