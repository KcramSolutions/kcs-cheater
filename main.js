const {moveMouse, getScreenSize} = require("robotjs");
const sleep = time => new Promise (r => {setTimeout(r, time)});

const steps = 1;

async function main(){
    const {width, height} = getScreenSize();
    const pos = {x: 0, y: 0};
    while(1){
        moveMouse(pos.x, pos.y);
        pos.x = pos.x+steps;
        pos.y = pos.y+steps;
        if(pos.x == width) pos.x = 0;
        if(pos.y == height) pos.y = 0;
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