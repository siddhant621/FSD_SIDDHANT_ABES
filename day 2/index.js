import { appendFileSync,readFileSync,writeFileSync }
from "./readAndwrite.js";

console.log("before read");
appendFileSync(".example.txt");
console.log("after read");

console.log("before read");
readFileSync(".example.txt");
console.log("after read");

console.log("before read");
writeFileSync(".example.txt");
console.log("after read");

