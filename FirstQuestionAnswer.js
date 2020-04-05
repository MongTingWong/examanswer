var PrintCOLOR;
(function (PrintCOLOR) {
    PrintCOLOR[PrintCOLOR["RED"] = getCOLORCODE('R')] = "RED";
    PrintCOLOR[PrintCOLOR["GREEN"] = getCOLORCODE('G')] = "GREEN";
    PrintCOLOR[PrintCOLOR["BLUE"] = getCOLORCODE('B')] = "BLUE";
    PrintCOLOR[PrintCOLOR["YELLOW"] = getCOLORCODE('Y')] = "YELLOW";
})(PrintCOLOR || (PrintCOLOR = {}));
function getCOLORCODE(colorNAME) {
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
console.log(PrintCOLOR.RED);
console.log(PrintCOLOR.GREEN);
console.log(PrintCOLOR.BLUE);
console.log(PrintCOLOR.YELLOW);
