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

function isBird(pet: Fish | Bird): pet is Bird {
  return (pet as Bird).fly !== undefined;
}

if (isBird(pet)) {
  pet.fly();
} else {
  pet.swim();
}

const Menu = {
  analytics: {
    business: "Бизнес",
    data: "big data",
  },
  design: {
    graphical: "Графический",
  },
};

function fn<T, L1 extends keyof T, L2 extends keyof T[L1]>(
  obj: T,
  key1: L1,
  key2: L2
) {
  return obj[key1][key2];
}

fn(Menu, "analytics", "business");
