const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];

films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;
films.push("E.T.");
films;

const phrase = `${director} is the director of ${films.length} films`;

console.log(phrase);