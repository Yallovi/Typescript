/** @format */

type Address = {
  country: string;
  city: string;
  street: string;
};

type Person = {
  name: string;
  surName: string;
  age: number;
  address: Address[];
};

type Age = Person["age"];

type MoreInfo = Person["address"];

type T2 = Person[keyof Person];
