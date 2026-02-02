import { Component, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'dragonball-super',
  imports: [CharacterList, CharacterAddComponent],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }

  // this.characters().push(newCharacter);
}

// resetFields() {
//   this.name.set('');
//   this.power.set(0);
// }
