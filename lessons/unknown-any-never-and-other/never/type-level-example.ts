/** @format */

/**
 * * never -  это union у которого нет элементов. Представляет из себя невозможный  кейс на уровне типизации
 */

export type {};

type Test = number | string | never;
//   ^?

declare let a: Test;

/**
 * * Когда появляется never ?
 * * never - появляется тогда, когда мы доходим до кейса, который не может произойти
 */

// ? Пример 1
function example1(value: number | string) {
  if (typeof value === "object") {
    value;
    // ^?
  }
}

// ? Пример 2
function example2(key: "a" | "b" | "c") {
  switch (key) {
    case "a":
      return "a-key";
    case "b":
      return "b-key";
    case "c":
      return "c-key";

    default:
      key;
    //  ^?
  }
}

// ? Пример 3
function example3() {
  const test = () => {
    throw new Error("test");
  };

  const a = test();
  //    ^?

  console.log(a);
}

example3();
