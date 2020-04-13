class empp{
    readonly empcode: number;
    empName: string;


    constructor(code: number, name: string){
        this.empcode = code;
        this.empName = name;
    }
}

let empagain = new empp(1, 'MOng');
empagain.empcode = 20; //error
empagain.empName = 'TIng';



interface empp1{
    readonly empCode: number;
    empName: string;
}

let empObj: empp1 = {
    empCode: 1,
    empName: "MOng"
}

empObj.empCode = 100; // error


interface empp2{
    empCode: number;
    empName: string;
}

let empagain1: Readonly<empp2> = {
    empCode: 1,
    empName: "Mong"
}

empagain1.empCode; //error
empagain1.empName; // error