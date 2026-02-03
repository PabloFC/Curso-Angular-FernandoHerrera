import { Component, input } from '@angular/core';
import { GifListItemComponent } from './gif-list-item/gif-list-item';
@Component({
  selector: 'gif-list',
  templateUrl: './gif-list.html',
  imports: [GifListItemComponent],
})
export class GifListComponent {
  gifs = input.required<string[]>();
}
