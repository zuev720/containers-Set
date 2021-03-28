import Team from './src/js/Team';
import Character from './src/js/Character';

const team = new Team();
team.members.clear();
team.add(new Character('dude'));
team.add(new Character('bro'));
team.addAll(new Character('dude'), new Character('bro'), new Character('barney'), new Character('goodMan'), new Character('dude'), new Character('bro'));
console.log(team.toArray());
