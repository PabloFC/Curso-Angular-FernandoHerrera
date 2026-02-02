import { Component } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'side-menu-header',
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeaderComponent {
  envs = environment;
}
