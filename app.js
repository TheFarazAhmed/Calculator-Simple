function func1(opr) {
    var var1 = document.getElementById('lcd');
    switch (opr) {
        case '+':
            var1.value = var1.value + '+';
            break;
        case '-':
            var1.value = var1.value + '-';
            break;
        case '*':
            var1.value = var1.value + '*';
            break;
        case '/':
            var1.value = var1.value + '/';
            break;
        case '-x':
            var1.value = '-' + var1.value;
            break;
    }
}

// appends another digit from id="lcd" to itself 
function func2(digit) {
    var var1 = document.getElementById('lcd');
    switch (digit) {
        case 0:
            var1.value = var1.value + '0';
            break;
        case 1:
            var1.value = var1.value +  '1';
            break;
        case 2:
            var1.value = var1.value + '2';
            break;
        case 3:
            var1.value = var1.value + '3';
            break;
        case 4:
            var1.value = var1.value + '4';
            break;
        case 5:
            var1.value = var1.value + '5';
            break;
        case 6:
            var1.value = var1.value + '6';
            break;
        case 7:
            var1.value = var1.value + '7';
            break;
        case 8:
            var1.value = var1.value + '8';
            break;
        case 9:
            var1.value = var1.value + '9';
            break;
    }
}

function bksp() {
    var var1 = document.getElementById('lcd');
    var k = var1.value;
    if (k.length > 0) {
        k = k.substring(0, k.length-1); 
        var1.value = k;
    }
}

var n=0;
function parenthesis() {
    var var1 = document.getElementById('lcd');
    if (n==0) {
        var1.value = var1.value + '(';
        n=1;
    }else if (n==1) {
        var1.value = var1.value + ')';
        n = 0;
    }
}

function clrscr() {
    document.getElementById('lcd').value = "";
    document.getElementById('lcd2').value = "";
}

function calculate() {
    var var1 = document.getElementById('lcd');
    document.getElementById('lcd2').value = Number( eval(var1.value).toFixed(12) );
}