import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe],
})
export class HeroPageComponent {
  name = signal('Iroman');
  age = signal(45);

  heroDescription = computed(() => {
    const description = `${this.name()} -${this.age()} `;

    return description;
  });

  capitalizedName = computed(() => this.name().toUpperCase());

  //   getHeroDescription() {
  //     return `${this.name()} - ${this.age()}`;
  //   }

  changeHero() {
    this.name.update((current) => (current = 'Spiderman'));
    this.age.update((current) => (current = 22));
  }

  resetForm() {
    this.name.update((current) => (current = 'Iroman'));
    this.age.update((current) => (current = 45));
  }

  changeAge() {
    this.age.update((current) => (current = 60));
  }
}
