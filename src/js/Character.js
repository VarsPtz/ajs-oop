export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) throw new Error('Нельзя повысить уровень умершего!');
    this.level += 1;
    this.attack += this.attack * 0.2;
    this.defence += this.defence * 0.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) throw new Error('Нельзя нанести урон умершему персонажу!');
    this.health -= points * (1 - this.defence / 100);
  }
}
