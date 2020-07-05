import Archer from '../Archer';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Undead from '../Undead';
import Zombie from '../Zombie';
import Daemon from '../Daemon';

test('Проверка на создание нового персонажа c помощью Character', () => {
  const received = new Archer('Legolas', 'Archer');

  const expected = {
    name: 'Legolas',
    type: 'Archer',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Archer', () => {
  const received = new Archer('Legolas', 'Archer');

  const expected = {
    name: 'Legolas',
    type: 'Archer',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Swordsman', () => {
  const received = new Swordsman('Aragorn', 'Swordsman');

  const expected = {
    name: 'Aragorn',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Magician', () => {
  const received = new Magician('Gendalf', 'Magician');

  const expected = {
    name: 'Gendalf',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Undead', () => {
  const received = new Undead('Nazgul', 'Undead');

  const expected = {
    name: 'Nazgul',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Zombie', () => {
  const received = new Zombie('Barrow-wights', 'Zombie');

  const expected = {
    name: 'Barrow-wights',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(received).toEqual(expected);
});

test('Проверка на создание нового персонажа Daemon', () => {
  const received = new Daemon('Barlog', 'Daemon');

  const expected = {
    name: 'Barlog',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(received).toEqual(expected);
});

test('Проверка метода levelUp при health > 0', () => {
  const newDaemon = new Daemon('Barlog', 'Daemon');
  newDaemon.levelUp();
  expect(2).toEqual(newDaemon.level);
});

test('Проверка метода levelUp при health < 0', () => {
  const newZombie = new Zombie('Shon', 'Zombie');
  newZombie.health = -1;
  expect(() => newZombie.levelUp()).toThrow();
});

test('Проверка метода damage при health > 0', () => {
  const newDaemon = new Daemon('Barlog', 'Daemon');
  newDaemon.damage(10);
  expect(94).toEqual(newDaemon.health);
});

test('Проверка метода damage при health < 0', () => {
  const newDaemon = new Daemon('Barlog', 'Daemon');
  newDaemon.health = -1;
  expect(() => newDaemon.damage(10)).toThrow();
});