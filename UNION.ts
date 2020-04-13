let uni: (string | number);
uni = 1233434;
uni = "abcdef";
uni = false; // error


let uni1: string | number;

uni1 = 1;
uni1 = "1";
uni1 = true; //error


function display(code: (string| number))
{
    if(typeof(code) === 'number'){
        console.log('number');
    }
    else if(typeof(code) === 'string')
    {
        console.log('string');
    }
}

display(1);
display('1');
display(false); //error