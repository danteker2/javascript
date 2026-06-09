'use strict';

/*
 Возвращает дробную часть числа num
 @param {number} num - число
 @returns {number} дробная часть числа
 */
function getDecimal(num) {
  const decimal = num - Math.floor(num);
  // Округляем до 10 знаков чтобы избежать проблем с точностью
  return Math.round(decimal * 1e10) / 1e10;
}

/*
 Делит числа с остатком (деление с остатком по правилам математики)
 @param {number} divident - делимое
 @param {number} divisor - делитель
 @returns {Array} массив вида [частное, остаток]
 */
function divmod(divident, divisor) {
  if (divisor === 0) {
    return [NaN, NaN];
  }
  const quotient = Math.floor(divident / divisor);
  const remainder = divident - quotient * divisor;
  return [quotient, remainder];
}

/*
 Возвращает строку с заглавным первым символом
 @param {string} str - исходная строка
 @returns {string} строка с заглавной первой буквой
 */
function ucFirst(str) {
  if (!str) return '';
  return str[0].toUpperCase() + str.slice(1);
}

/*
 Нормализует URL, добавляя https:// в начало
 @param {string} url - адрес сайта
 @returns {string} нормализованный URL
 */
function normalizeUrl(url) {
  if (url.startsWith('http://')) {
    return 'https://' + url.slice(7);
  }
  if (url.startsWith('https://')) {
    return url;
  }
  return 'https://' + url;
}

/*
 Проверяет строку на наличие спама ('viagra' или 'xxx')
 @param {string} str - проверяемая строка
 @returns {boolean} true, если строка содержит спам
 */
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('xxx') || lowerStr.includes('viagra');
}

/*
 Усекает строку до заданной длины, добавляя многоточие
 @param {string} str - исходная строка
 @param {number} maxlength - максимальная длина
 @returns {string} усеченная строка
 */
function truncate(str, maxlength) {
  if (str.length <= maxlength) {
    return str;
  }
  return str.slice(0, maxlength - 1) + '…';
}

/*
 Преобразует строку вида 'var-test-text' в 'varTestText'
 @param {string} str - исходная строка
 @returns {string} строка в camelCase
 */
function camelize(str) {
  const parts = str.split('-');
  return parts[0] + parts.slice(1).map(ucFirst).join('');
}

/*
 Возвращает массив чисел Фибоначчи до n-го (не включая)
 @param {number} n - количество чисел Фибоначчи
 @returns {Array<bigint>} массив чисел Фибоначчи
 */
function fibs(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fib(i));
  }
  return result;
}

/*
 Возвращает массив, отсортированный по убыванию
 @param {Array<number>} arr - исходный массив
 @returns {Array<number>} новый отсортированный массив
 */
function arrReverseSorted(arr) {
  return [...arr].sort((a, b) => b - a);
}

/*
 Возвращает массив уникальных значений
 @param {Array} arr - исходный массив
 @returns {Array} массив уникальных значений
 */
function unique(arr) {
  return [...new Set(arr)];
}

// Экспорт функций
export {
  getDecimal,
  divmod,
  ucFirst,
  normalizeUrl,
  checkSpam,
  truncate,
  camelize,
  fibs,
  arrReverseSorted,
  unique
};

/*
 Вспомогательная функция для вычисления n-го числа Фибоначчи
 @param {number} n - номер числа Фибоначчи
 @returns {bigint} n-е число Фибоначчи
 */
function fib(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;
  
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
