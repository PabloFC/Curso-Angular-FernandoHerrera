export class Person {
  //propiedades
  //   public name: string;
  //   private address: string;

  constructor(
    public name: string,
    private address: string = "No address",
  ) {
    // this.name = name;
    // this.address = address;
  }
}

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
  ) {
    super(realName, "New York");
  }
}

const ironman = new Hero("Ironman", 45, "Tony Stark");
console.log(ironman);
