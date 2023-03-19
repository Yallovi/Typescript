/** @format */

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

// *Функция для проверки типа, если smim !== undefined - тогда это Fish
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

//* Рандомная функция, которая определяет переменную pet
function getSmallPet(): Fish | Bird {
  return {
    swim: () => {},
  };
}

let pet = getSmallPet();

if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

/**
 * * Хорошая практика, разделять типы/interfaces
 */

interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

/**
 * ! Ошибка, что радиус может быть undefined
 */
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}

/**
 * * Исправление
 */

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape2 = Circle | Square;

function getArea2(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
}
