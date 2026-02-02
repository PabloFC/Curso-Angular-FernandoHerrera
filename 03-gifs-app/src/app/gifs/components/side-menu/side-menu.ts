import { Component } from '@angular/core';
import { SideMenuHeaderComponent } from './side-menu-header/side-menu-header';
import { SideMenuOptionsComponent } from './side-menu-options/side-menu-options';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.html',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
})
export class SideMenuComponent {}
