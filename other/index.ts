/**
 * * Пример:
 * * Ситуация когда делаем тип id: string | number
 *
 * @format
 */

// ! Ошибка
const fn = (id: string | number) => {
  return id.toUpperCase();
};

//* Решение
const fn2 = (id: string | number) => {
  if (typeof id === "string") id.toUpperCase;
};

// * Пример
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
    console.log("Welcome lone traveler " + x);
  }
}
