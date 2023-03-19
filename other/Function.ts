/**
 * *Дженерики в функции
 *
 * @format
 */

function firstElement<T>(value: T[]): T | undefined {
  return value[0];
}
//* s is of type 'string'
const s = firstElement(["a", "b", "c"]);
//* n is of type 'number'
const n = firstElement([1, 2, 3]);
//* u is of type undefined
const u = firstElement([]);

// Array.map((el, index) => {});

/**
 * * Мы также можем использовать несколько параметров типа. Например, автономная версия mapбудет выглядеть так:
 */

//? function map<Input, Output>(arr: Input[], func: (value: Input, index: number, originalArray: Input[]) => Output): Output[] {}

function map<Input, Output>(
  array: Input[],
  fn: (arg: Input) => Output
): Output[] {
  return array.map(fn);
}

// Parameter 'n' is of type 'string'
// 'parsed' is of type 'number[]'
const parsed = map(["1", "2", "3"], (n) => parseInt(n));

function longest<T extends { length: number }>(a: T, b: T) {
  if (a.length < b.length) {
    return a.length;
  } else return b.length;
}

// longerArray is of type 'number[]'
const longerArray = longest([1, 2], [1, 2, 3]);

/**
 * *функция объединение двех массивов
 */
function combine<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

//! Ошибка что разные типы массивов
const arr = combine(["hello", "world"], [1, 2, 3, 4]);

//* исправление
const arr2 = combine<string | number>(["hello", "world"], [1, 2, 3, 4]);

/**
 * ! Функциональные перегрузки
 **Некоторые функции JavaScript можно вызывать с различным числом аргументов и типами. Например, вы можете написать функцию для получения Dateметки времени (один аргумент) или месяца/дня/года (три аргумента).
 */

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

// type Fish = {
// ш
