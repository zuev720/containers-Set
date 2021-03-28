export default class Team {
  constructor() {
    this.members = new Set();
  }

  // Метод должен добавлять выбранного персонажа в команду (объект класса Character).

  add(person) {
    for (const character of this.members) {
      if (character.name.toLowerCase() === person.name.toLowerCase()) {
        throw new Error('Этот персонаж уже находится в вашей команде!');
      }
    }
    this.members.add(person);
  }

  // Метод должен иметь возможность добавлять произвольное количество персонажей в команду

  addAll(...persons) {
    const arr = [];
    persons.reduce((result, person) => {
      result.forEach((character) => {
        arr.push(character.name.toLowerCase());
      });
      if (!(arr.includes(person.name.toLowerCase()))) {
        result.add(person);
      }
      return result;
    }, this.members);
  }

  // Метод должен производить конвертацию this.members в массив

  toArray() {
    return [...this.members];

    // альтернативное решение
    // let arr = [];
    // this.members.forEach((person) => {
    //   let obj = {};
    //   for (let [key, value] of Object.entries(person)) {
    //     obj[key] = value;
    //   }
    //   arr.push(obj);
    // })
    // return arr;
  }
}
