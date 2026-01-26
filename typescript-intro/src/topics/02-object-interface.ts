const skills: string[] = ["Bash", "TypeScript", "JavaScript"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: "Strider",
  hp: 30,
  skills: skills,
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
