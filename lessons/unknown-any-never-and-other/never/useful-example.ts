/** @format */

/**
 * * В каких случаях может быть полезен never?
 * * 1. Для дополнительной проверки компилятором, что какая-тос ситуация реально не может произойти
 *
 * * 2. Для того, чтоб сымитировать пустой элемент в union типе
 *
 */

export {};

// ? пример 1

// * Полезно, если работаем с редакс или свитч кейсами
function exhaustiveCheck(value: never) {
  return value;
}

interface State {
  count: number;
}
type Action =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };
/**
 * * Если кто-то добавит еще один  action и не обработает его будет ошибка.
 * * Это вариант для того, чтоб не упустить необработанный вариант
 */
// | { type: "reset"; payload: undefined };

function reducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case "increment":
      return {
        ...state,
        count: state.count + payload,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return exhaustiveCheck(type);
  }
}

// ? пример 2
reducer({ count: 1 }, { type: "increment", payload: 2 });

type FilterTest<T extends string> = T extends "test" ? never : T;

type Test = FilterTest<"asdf" | "asdf2" | "qwer" | "test">;
//   ^?

declare let a: Test;
