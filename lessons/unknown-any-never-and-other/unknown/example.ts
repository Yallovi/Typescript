/** @format */

/**
 * *unknown -это аналог any, также описывает значение любого типа.
 * *Однако прежде чем сделать какие либо операции над ним -нужно убедиться в его типизации
 * * Использовать всегда вместо any
 */

export {};

function test(arg: unknown) {
  if (typeof arg === "string") {
    return arg.charCodeAt(0);
  }
  if (typeof arg === "number") {
    return arg + 5;
  }

  if (typeof arg === "object" && arg !== null) {
    return { ...arg };
  }

  if (Array.isArray(arg)) {
    return arg.concat([1, 2, 3]);
  }
}

test(2);
