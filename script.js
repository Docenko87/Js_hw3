
// --------- Задание 1 --------- //
// Написать функцию, которая принимает 2 числа и возвра-
// щает -1, если первое меньше, чем второе; 1 – если первое
// больше, чем второе; и 0 – если числа равны.
  
// let array = [125,932,672,952,37,9867,61,942,23,611,4,19];
// function sortValueDow(a,b) {
//    if (a < b)
//         return -1
//     else if (a > b)
//         return 1
//     else
//         return 0;
// }
// console.log(array.sort(sortValueDow));

// --------- Задание 2 --------- //
// Написать функцию, которая вычисляет факториал пере-
// данного ей числа.
// let n = prompt ("Введите число" )
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
  
//   alert("Факториал это числа будет равен: " + factorial(n) );

// --------- Задание 3 --------- //
// Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число. Например: цифры
// 1, 4, 9 превратятся в число 149.
// let string = "1,4,9";
// // string.split(separator)
// string = string.split(",");
// // console.log(string.split(","));
// console.log(string);
// console.log(string.join(""));

// --------- Задание 4 --------- //
// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь. Если в функцию
// передали 1 параметр, то она вычисляет площадь квадрата.
// var a=prompt("Введите длину прямоугольника");
// var b=prompt("Введите ширину прямоугольника");
// function ab(a,b){
// if(a!=''&&b!='')
// return a*b;
// else if(a!=''&&b=='')
// return a*a;
// else if(a==''&&b!='')
// return b*b;
// }
// console.log(ab(a,b));
// --------- Задание 5 --------- //
// Написать функцию, которая проверяет, является ли пере-
// данное ей число совершенным. Совершенное число – это
// число, равное сумме всех своих собственных делителей.
// function is_perfect(number) {
//     var temp = 0;
//        for(var i=1;i<=number/2;i++) {
//              if(number%i === 0) {
//                 temp += i;
//               }
//          }
      
//          if(temp === number && temp !== 0) {
//            document.writeln("Это идеальное число.");
//             }  
//           else {
//            document.writeln("Это не идеальное число.");
//             }  
//      }
//     is_perfect(28);

// --------- Задание 6 --------- //
//     Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными.
// Используйте написанную ранее функцию, чтобы узнавать,
// совершенное число или нет.

// --------- Задание 7 --------- //
// Написать функцию, которая принимает время (часы, мину-
//     ты, секунды) и выводит его на экран в формате «чч:мм:сс».
//     2
//     Если при вызове функции минуты и/или секунды не были
//     переданы, то выводить их как 00.

    // let time = {h: 6, m: 3, s: 4};

    // console.log( timeStr( time ) );
    
    // function timeStr(obj){
    //   return [
    //     ( addZero( obj.h ) || "00" ),
    //     ( addZero( obj.m ) || "00" ),
    //     ( addZero( obj.s ) || "00" ),
    //   ].join(":");
    // }
    
    // function addZero(n){
    //   if( !isNaN(n) ){
    //     return n > 9 ? n : "0" + n;
    //   }
    // }

// --------- Задание 8 --------- //
// Написать функцию, которая принимает часы, минуты и
// секунды и возвращает это время в секундах.
// let h = prompt("часы");
// let m = prompt("минуты");
// let s = prompt("секунды");
// function seconds (a,b,c) {
//   return (h * 3600) + (m * 60) + s;
// }
// alert("У вас есть " + seconds(h,m,s) + " секунд");

// --------- Задание 9 --------- //
// Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в
// виде строки «чч:мм:сс».
// let s = prompt("Введите количество секунд");
// let m = s / 60;
// let h = s % 3600;

