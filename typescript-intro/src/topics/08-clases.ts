export class Person {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = "Pablo";
    this.address = "Barcelona";
  }
}

const ironman = new Person();
console.log(ironman);
