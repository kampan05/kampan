const fs = require ('fs');

//fs.mkdirSync('kampan');

//synchronous
//fs.writeFileSync("kampan/bio.txt", "I am a youtuber");

//fs.appendFileSync("kampan/bio.txt", "I play different games on youtube");

//const data = fs.readFileSync("kampan/bio.txt", "utf-8");
//console.log(data);

//asynchronous
fs.readFile("kampan/bio.txt", "utf-8", (err, data) => {
console.log(data);
});
console.log("call first");


