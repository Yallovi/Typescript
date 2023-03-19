/**
 * *Различия между псевдонимами типов и интерфейсами
 * * Псевдонимы типов и интерфейсы очень похожи, и во многих случаях вы можете свободно выбирать между ними. Почти все функции interfaceдоступны в type,
 * * ключевое отличие состоит в том, что тип нельзя открыть повторно для добавления новых свойств по сравнению с интерфейсом, который всегда расширяем.
 *
 * @format
 */

// * Добавление новых полей в существующий интерфейс

interface Window {
  title: string;
}

interface Window {
  ts: number;
}

// * Тип нельзя изменить после создания

//! ошибка
type Window2 = {
  title: string;
};

type Window2 = {
  ts: number;
};

/**
 * * Наследование interface
 */

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

/**
 * * Наследование type
 */

type Animal2 = {
  name: string;
};

type Bear2 = Animal & {
  honey: boolean;
};

const a: Bear2 = {
  honey: true,
  name: "",
};
