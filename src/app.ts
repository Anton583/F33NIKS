

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

Player Character (PlayerChar)
"@"

DZ: 
1) Player moves up from pressing "w"
2) Player moves down from pressing "s"
3) Resizing console window and then moving DOES resize next render output
*/

const stdin = process.stdin;
let symbolToDraw = "#"
/// How can player's position be a single number? At the very least, when you decide to represent
/// position like that, you gotta document it
let playerPos = 4;

// Draw title of the game with the borders at the top of the screen
const drawTitle = () => {
    const titleName = "F33n1k5";
    const embel = "*".repeat((width - titleName.length) / 2);
    const borders = "-".repeat(width);
    console.log(borders);
    console.log(embel + titleName + embel);
    console.log(borders);
}

// Draw game field with the player's position on it
const drawGameField = (width: number, height: number, playerPos: number) => {
    // Take game content to the very top of the console
    console.clear();
    const halfWidth = width / 2;
    // String which contains player's icon
    const playerPosStr = symbolToDraw.repeat(Math.ceil(halfWidth - 1))
        + "@"
        + symbolToDraw.repeat(halfWidth)
    drawTitle()
    // Draw the game field and player's icon on it, according to player's position
    for (let i = 0; i < height - 3; i++) {
        i === height - playerPos
            ? console.log(playerPosStr)
            : console.log(symbolToDraw.repeat(width))
    }
}


// Reserve space for title
const heightOffset = 3;
/// Find a way to make them const.
let width = process.stdout.columns;
let height = process.stdout.rows - heightOffset;

// Scale game field if the window was resized
/// Why is this a function, instead of lambda?
/// If you are going to copy other people's code, you shoud be ready to explain it
process.stdout.on('resize', function () {
    width = process.stdout.columns;
    height = process.stdout.rows;
    // Rerender the game field with the new field size
    drawGameField(width, height, playerPos)
})

// Game's controls
stdin.on('data', key => {
    const keyStr = key.toString().toLocaleLowerCase();
    // If "q" is pressed, exit the game
    if (keyStr === "q") {
        process.exit();
    }
    // If "w" is pressed, move player up the game field
    if (keyStr === "w" && playerPos < height) {
        playerPos += 1
    }
    // If "s" is pressed, move player down the game field
    if (keyStr === "s" && playerPos > 4) {
        playerPos -= 1
    }
    /// Can you explain what this line does? Why is it here?
    else { }
    // Rerender the game field with the new player's position
    drawGameField(width, height, playerPos);
    
})

// Render the initial game field
drawGameField(width, height, playerPos);





if (!stdin.isTTY) {
    console.error("TTY not available");
    process.exit(1);
}

stdin.setRawMode(true);
stdin.setEncoding('utf8');
stdin.resume();





/*
-------- Game Loop --------
1) Get User Input
2) Process User Input
3) Render
4) Repeat
*/
