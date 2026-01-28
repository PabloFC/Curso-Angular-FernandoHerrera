export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hello, Generics!");
const amINumber = whatsMyType<number>(42);
const amIBoolean = whatsMyType<boolean>(true);
console.log(amIString); // Output: Hello, Generics!
console.log(amINumber); // Output: 42
console.log(amIBoolean); // Output: true
