import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent {
  name = signal('Iroman');
  age = signal(45);

  getHeroDescription(name: string, age: number) {
    return `${name} - ${age}`;
  }

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
