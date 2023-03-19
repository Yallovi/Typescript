/**
 * *Generics
 * @format
 */

function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello world of Generics");
// OR
identity("Hello world of Generics");

//? Если нам нужна длина, то написав так компилятор выдаси ошибку
function loggingIdentity<T>(value: T): T {
  value.length;
  return value;
}

//* исправление
function loggingIdentity2<T>(value: T[]): T[] {
  value.length;
  return value;
}

//* Другой синтаксис
function loggingIdentity3<T>(value: Array<T>): Array<T> {
  value.length;
  return value;
}

//* У нас может быть не массив
interface Lengthwise {
  length: number;
}

function loggingIdentity4<T extends Lengthwise>(arg: T): T {
  console.log(arr.length);
  return arg;
}

loggingIdentity4("1234");
// ! Поскольку универсальная функция теперь ограничена, она больше не будет работать со всеми типами:
loggingIdentity4(3);
// ! или придется передать вот так
loggingIdentity4({ length: 10, value: 3 });

//* Примеры аналогичных записей
function identity2<T>(value: T): T {
  return value;
}

let myIdentity: <T>(value: T) => T = identity2;

interface GenericIdentityFn {
  <T>(value: T): T;
}
let myIdentity2: GenericIdentityFn = identity2;

/**
 * *неуниверсальная сигнатура функции
 */
interface GenericIdentityFN<T> {
  (value: T): T;
}
let myIdentity3: GenericIdentityFN<number> = identity2;

/**
 * ?Вы можете объявить параметр типа, который ограничен другим параметром типа.
 * ? Например, здесь мы хотели бы получить свойство от объекта, которому дано его имя.
 * ?Мы хотели бы убедиться, что мы случайно не захватим свойство, которое не существует в obj, поэтому мы поместим ограничение между двумя типами:
 */

function getProperty<T, Key extends keyof T>(value: T, key: Key) {
  return value[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
//!
getProperty(x, "m");
