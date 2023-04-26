const {moveMouse, getScreenSize} = require("robotjs");
const sleep = time => new Promise (r => {setTimeout(r, time)});

const steps = 30;
const {width, height} = getScreenSize();
const mid = {
    x: width / 2,
    y: height / 2
}

const header = `
│ ┌──────────────────────────────────────────────────────┐
├─┤  CHEATER                                             │
│ └─────────────────────┬┬───────────────────────────────┘
│  x  xx   /xxx  /xxxx  ││ DESC:
│  x x    /x     x      ││  Mouse virtualization for
│  xx     x      \\xxx\\  ││ prevent the state of "suspend"
│  x x    \\x         x  ││ in any laptop or the "away"
│  x  xx   \\x x  xxxx/  ││ state in Microsoft Teams.
│ ┌───────────────────┐ ││
├─┤VERSION:           │ ││ In this version the screen
│ │cheater ---- 1.0.1 │ ││ will clear after execution
│ ├───────────────────┤ ││
├─┤   26/04/2023      │ ││ https://kcramsolutions.com
│ └───────────────────┘ └┘
│
│ ┌──────────────────────────────────────────────────────┐
│ │ For updates check it on:                             │
├─┤  https://kcramsolutions.com/projects/cheater         │
│ └──────────────────────────────────────────────────────┘
│
│      ┌────┐                     ┌────────┐
└──────┤EXIT├────────────────────►│CTRL + C│
       └────┘                     └────────┘
`;

async function main(){
    const pos = {x: mid.x, y: mid.y};
    while(1){
        moveMouse(pos.x, pos.y);
        await sleep(1000);
        moveMouse(pos.x + steps, pos.y);
        await sleep(1000);
    }
}
console.clear();
console.log(header);
process.on("SIGINT", () => {
    console.clear();
    process.exit(0);
})
// process.openStdin().on("keypress", (chunk, key)=>{
//     if(key && key.name == "c" && key.ctrl){
//         console.clear();
//         process.exit(0);
//     }
// })
main();
