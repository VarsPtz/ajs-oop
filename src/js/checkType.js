export default function checkType(type) {
  const arrayOfTypes = ['Archer', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
  return (arrayOfTypes.indexOf(type) !== 1);
}
