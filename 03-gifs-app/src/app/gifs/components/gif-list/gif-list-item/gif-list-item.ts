import { Component, input } from '@angular/core';

@Component({
  selector: 'list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
})
export class GifListItemComponent {
  imgUrl = input.required<string>();
}
