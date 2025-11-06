function simpleCalculator(operation) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let result = 0;

    if (n1===''){
        alert("Please enter first number.");
        return;
    }
    if (n2===''){
        alert("Please enter second number.");
        return;
    }

    if (operation === 'add') {
        result = n1 + n2;
    } else if (operation === 'sub') {
        result = n1 - n2;
    } else if (operation === 'mult') {
        result = n1 * n2;
    } else if (operation === 'div') {
        if (n2 === 0) {
            alert("Cannot divide by zero!");
            return;
        }
        result = n1 / n2;
    }

    document.getElementById("res").value = result;
}
