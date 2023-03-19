/**
 * * Typeof operator
 *
 * @format
 */

let s = "Hello world!";

let p: typeof s;

/**
 * ? Это не очень полезно для базовых типов, но в сочетании с другими операторами типов вы можете использовать typeofего для удобного выражения многих шаблонов.
 * ? Для примера начнем с предопределенного типа ReturnType<T>. Он принимает тип функции и возвращает тип возвращаемого значения:
 */

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
//* type K = boolean

/**
 * ? Если мы попытаемся использовать ReturnTypeимя функции, мы увидим поучительную ошибку:

 */

function f() {
  return { x: 3, y: 2 };
}

//! Error
type F = ReturnType<f>;

//* Fix

function f2() {
  return { x: 3, y: 2 };
}

type F2 = ReturnType<typeof f2>;

////////////////////////////////////////////////////

const formData = {
  firsName: "John",
  lastName: "wasd",
  age: 20,
};

type p = typeof formData;

// * Если в формдату будут добавляться поля, то наш тип будет динамически отображать их
type ValidationResult = {
  [key in keyof typeof formData]: boolean;
};

declare function fn<T>(data: T): ValidationResult;
declare function fn2<T>(data: T): { [key in keyof typeof formData]: T };

type FormData1 = {
  firsName: string;
  lastName: string;
  age: number;
};

function func<T extends FormData1>(arg: T) {}

func({ age: "1234", firsName: 1234, lastName: 111 });
