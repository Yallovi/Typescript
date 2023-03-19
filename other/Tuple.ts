/**
 * * Тип кортежа — это еще один вид Arrayтипа, который точно знает, сколько элементов он содержит и какие именно типы он содержит в определенных позициях.
 *
 * @format
 */

function doSomething(arr: [string, number]) {
  return arr;
}
doSomething(["hello", 123]);
// ! ошибка
doSomething(1234);
