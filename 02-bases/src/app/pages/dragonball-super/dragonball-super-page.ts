import { Component, inject } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

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
  public dragonballService = inject(DragonBallService);
}
