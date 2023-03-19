/** @format */

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function getPet(): Fish | Bird {
  return {
    fly: () => {
      console.log("I'm bird");
    },
  };
}

const pet = getPet();

/**
 * * type guard
 */

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

function testCheck() {
  if (isBird(pet)) {
    pet.fly();
  } else {
    pet.swim();
  }
}

function isString(value: unknown): value is String {
  return typeof value === "string";
}
function test(value: unknown) {
  if (isString(value)) {
    value.charCodeAt(0);
    // ^?
  } else {
    value;
    // ^?
  }
}
