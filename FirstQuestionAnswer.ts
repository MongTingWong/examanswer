enum PrintCOLOR {
    RED = getCOLORCODE('R'),
    GREEN = getCOLORCODE('G'),
    BLUE = getCOLORCODE('B'),
    YELLOW = getCOLORCODE('Y')
}

function getCOLORCODE(colorNAME: string): number {
    if (colorNAME === 'R') {
        return 100;
    }
    if (colorNAME === 'G') {
        return 200;
    }
    if (colorNAME === 'B') {
        return 300;
    }
    if (colorNAME === 'Y') {
        return 400;
    }
}

console.log(PrintCOLOR.RED)
console.log(PrintCOLOR.GREEN)
console.log(PrintCOLOR.BLUE)
console.log(PrintCOLOR.YELLOW)
