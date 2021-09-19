

/*

Game Field:
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################
######################################################


*/

let symbolToDraw = "#"

const drawGameField = (width: number, height: number) => {
    console.clear();
    const titleName = "F33n1k5";
    const embel = "*".repeat((width - titleName.length) / 2);
    const borders = "-".repeat(width);
    console.log(borders);
    console.log(embel + titleName + embel);
    console.log(borders);
    for (let i = 0; i < height - 3; i++) {
        console.log(symbolToDraw.repeat(width));
    }
}
const heightOffset = 3;

const width = process.stdout.columns;
const height = process.stdout.rows - heightOffset;


drawGameField(width, height);

const stdin = process.stdin;

if (!stdin.isTTY) {
    console.error("TTY not available");
    process.exit(1);
}

stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();

stdin.on('data', key => {
    const keyStr = key.toString();
    
    if (keyStr === "q") {
        process.exit();
    } else {
        symbolToDraw = keyStr;
        drawGameField(width, height);
        //console.log(key.toString());
    }
})


/*
-------- Game Loop --------
1) Render
2) Get User Input
3) Repeat
*/