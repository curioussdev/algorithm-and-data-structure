const keys = ["name", "born", "country"]
const values = ["José Lopes", 1942, "Angola"]

const jose = values.map(
(value, i) => ({ [keys[i]]: value}));

console.log(jose)
