const {moveMouse, getScreenSize} = require("robotjs");
const sleep = time => new Promise (r => {setTimeout(r, time)});

const steps = 10;
const {width, height} = getScreenSize();
const mid = {
    x: width / 2,
    y: height / 2
}

async function main(){
    const pos = {x: mid.x, y: mid.y};
    while(1){
        moveMouse(pos.x, pos.y);
        await sleep(1000);
        moveMouse(pos.x + steps, pos.y);
        await sleep(1000);
    }
}
console.log("\n");
console.log("=".repeat(50));
console.log();
console.log(('\tKCS Cheater V1.0.0'));
console.log();
console.log((' Emulate mouse input to move the cursor'));
console.log();
console.log((' Marck C. G. - mcarrion@kcramsolutions.com'));
console.log();
console.log("=".repeat(50));
console.log();
console.log();
console.log('Exit with Crtl-C');
main();