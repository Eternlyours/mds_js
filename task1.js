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

{
    let p1, r;
    const P = 3.14;
    p1 = parseFloat(prompt('Введите сторону квадрата'));
    r = parseFloat(prompt('Введите радиус круга'));
    Scircle = Math.pow(r, 2) * P;
    Ssquare = Math.pow(p1, 2)
    console.log(Scircle, Ssquare)

    
}