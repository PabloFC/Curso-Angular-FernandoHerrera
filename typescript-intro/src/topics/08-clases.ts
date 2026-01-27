export class Person {
  //propiedades
  //   public name: string;
  //   private address: string;

  constructor(
    public name: string,
    private address: string,
  ) {
    // this.name = name;
    // this.address = address;
  }
}

const ironman = new Person("iroman", "new york");
console.log(ironman);
