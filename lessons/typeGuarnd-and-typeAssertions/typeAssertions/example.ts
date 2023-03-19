/** @format */

/**
 * * Type guard - они возвращают булевое значение.
 */

/**
 * * Если функция не выкинет ошибку, value - будет строкой. Но компилятор этого не понимает. смотреть функцию connectToDb. value === unknown
 */
function assertString(value: unknown) {
  if (typeof value !== "string") {
    throw new Error("error");
  }
}

function connectToDb(value: unknown) {
  assertString(value);

  value;
  // ^?
}

// * Решение

/**
 * * У нас поменялся респонс в function assertString2 (ключевое слово asserts). И теперь компилятор понимаем, что если value !== string, то вернется ошибка
 */

function assertString2(value: unknown): asserts value is "string" {
  if (typeof value !== "string") {
    throw new Error("error");
  }
}

function connectToDb2(value: unknown) {
  assertString2(value);

  value;
  // ^?
}

// custom

interface Options {
  a: number;
  b: string;
}

function assertOptions(value: unknown): asserts value is Options {
  if (value === null || typeof value !== "object") {
    throw new Error("options must me of type object");
  }

  if (!("a" in value) || typeof value.a !== "number") {
    throw new Error("options.a must me of string");
  }

  if (!("b" in value) || typeof value.b !== "string") {
    throw new Error("options.b must me of string");
  }
}

function doSomething(value: unknown) {
  assertOptions(value);

  value;
  // ^?
}
