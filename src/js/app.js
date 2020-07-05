import Archer from './Archer';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';
import checkName from './checkName';
import checkType from './checkType';

const itemTypeOne = 'Archer';
const itemNameOne = 'Legolas';

const itemTypeSecond = 'Swordsman';
const itemNameSecond = 'Aragorn';

const itemTypeThird = 'Magician';
const itemNameThird = 'Gendalf';

const itemTypeFourth = 'Undead';
const itemNameFourth = 'Nazgul';

const itemTypeFifth = 'Zombie';
const itemNameFifth = 'Barrow-wights';

const itemTypeSixth = 'Daemon';
const itemNameSixth = 'Barlog';

if (checkName(itemNameOne) && checkType(itemTypeOne)) {
  const legolas = new Archer(itemNameOne, itemTypeOne);
  console.log(legolas);
} else {
  throw new Error('Введены некорректные данные.');
}

if (checkName(itemNameSecond) && checkType(itemTypeSecond)) {
  const aragorn = new Swordsman(itemNameSecond, itemTypeSecond);
  console.log(aragorn);
} else {
  throw new Error('Введены некорректные данные.');
}

if (checkName(itemNameThird) && checkType(itemTypeThird)) {
  const gendalf = new Magician(itemNameThird, itemTypeThird);
  console.log(gendalf);
} else {
  throw new Error('Введены некорректные данные.');
}

if (checkName(itemNameFourth) && checkType(itemTypeFourth)) {
  const nazgul = new Undead(itemNameFourth, itemTypeFourth);
  console.log(nazgul);
} else {
  throw new Error('Введены некорректные данные.');
}

if (checkName(itemNameFifth) && checkType(itemTypeFifth)) {
  const barrowWights = new Zombie(itemNameFifth, itemTypeFifth);
  console.log(barrowWights);
} else {
  throw new Error('Введены некорректные данные.');
}

if (checkName(itemNameSixth) && checkType(itemTypeSixth)) {
  const barlog = new Daemon(itemNameSixth, itemTypeSixth);
  console.log(barlog);
} else {
  throw new Error('Введены некорректные данные.');
}
