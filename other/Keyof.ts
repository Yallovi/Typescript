/**
 *
 ** Оператор keyof
 * @format
 */

/**
 * ? Оператор keyofпринимает тип объекта и создает строковое или числовое литеральное объединение его ключей.
 * ? Следующий тип P является тем же типом, что и «x» | «у»:
 */

type Point = { x: number; y: number };
type P = keyof Point;

/**
 * ? Если у типа есть сигнатура stringили индекс, вместо этого будут возвращены эти типы:number keyof
 */

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;

// ** type A1 = number;

type Mapish = { [k: string]: boolean };
type M1 = keyof Mapish;

//* type M2 = string | number;

/**
 * * Обратите внимание, что в этом примере Mis string | number— это потому, что ключи объекта JavaScript всегда приводятся к строке, поэтому obj[0]всегда совпадает с obj["0"].
 */

const menu = {
  analytics: {
    business: "Бизнес",
    data: "big data",
  },
  design: {
    graphical: "Графический",
  },
};

/**
 * ! any - нельзя
 */
function getMenu(obj: any, l1: string, l2: string) {
  return obj[l1][l2]; //! ошибка
}
/**
 * * Исправление
 */

function getMenu2<T, l1 extends keyof T, l2 extends keyof T[l1]>(
  obj: T,
  l1: l1,
  l2: l2
) {
  return obj[l1][l2];
}

getMenu2(menu, "design", "graphical");
