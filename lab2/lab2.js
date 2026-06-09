'use strict';

/*
 Возвращает x в степени n
 @param {number} x - основание
 @param {number} n - показатель степени (целое число)
 @returns {number} x в степени n
 */
function pow(x, n) {
  return Math.pow(x, n);
}

/*
 Вычисляет сумму чисел от 1 до n включительно
 Использует синтаксис "new Function"
 @param {number} n - натуральное число
 @returns {number} сумма чисел от 1 до n
 */
const sumTo = new Function('n', `
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
`);

/*
 Проверяет, является ли год високосным
 Год високосный, если он кратен 400 или (кратен 4 и не кратен 100)
 @param {number} year - год для проверки
 @returns {boolean} true, если год високосный
 */
function isLeapYear(year) {
  return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
}

/*
 Вычисляет факториал числа n рекурсивно
 @param {number} n - неотрицательное целое число
 @returns {bigint} факториал n
 */
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1n;
  }
  return BigInt(n) * factorial(n - 1);
}

/*
 Вычисляет n-е число Фибоначчи
 Использует быстрый алгоритм (двоичное возведение в степень)
 @param {number} n - номер числа Фибоначчи
 @returns {bigint} n-е число Фибоначчи
 */
function fib(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  
  // Быстрый алгоритм через матричное возведение в степень
  function fibFast(n) {
    if (n === 0) return [0n, 1n];
    
    const [a, b] = fibFast(Math.floor(n / 2));
    const c = a * (2n * b - a);
    const d = a * a + b * b;
    
    if (n % 2 === 0) {
      return [c, d];
    } else {
      return [d, c + d];
    }
  }
  
  return fibFast(n)[0];
}

/*
 Возвращает функцию для сравнения с заданным числом x
 @param {number} x - число для сравнения
 @returns {function(number): (boolean|null)} функция, которая принимает y и сравнивает с x
 */
function compare(x) {
  return function(y) {
    if (y > x) return true;
    if (y < x) return false;
    return null;
  };
}

/*
 Возвращает сумму всех аргументов
 @param {...number} args - произвольное количество аргументов
 @returns {number} сумма всех аргументов
 */
function sum(...args) {
  return args.reduce((acc, val) => acc + val, 0);
}

/*
 Добавляет к объекту символьное свойство blackSpot=true
 @param {Object} obj - объект
 @returns {Object} тот же объект с добавленным символьным свойством
 */
function addBlackSpot(obj) {
  obj[Symbol.for('blackSpot')] = true;
  return obj;
}

// Экспорт для следующей лабораторной
// export { pow, sumTo, isLeapYear, factorial, fib, compare, sum, addBlackSpot };
