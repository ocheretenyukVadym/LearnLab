function solutionTask1() {
    alert("I’m JavaScript!");
    TASK_1.className = "taskFocus";
}

function solutionTask4() {
    let admin;
    let name;
    name = "John";
    admin = name;
    alert(admin);
}

function solutionTask6() {
    let name = prompt("Enter your name");
    alert(`Your name is: ${name}`);
}

function solutionTask8() {
    let a = prompt("First number?", 1);
    let b = prompt("Second number?", 2);

    alert(Number(a) + Number(b)); // 12
}

function solutionTask10_1() {
    let a = prompt("Enter first number:");
    let b = prompt("Enter second number:");

    let result = a + b < 4 ? "Over" : "Below";
    alert(result);
}

function solutionTask10_2() {
    let login = prompt(`Enter login (Employee, Director or "")`);

    login == 'Employee' ? alert('Hello') :
        login == 'Director' ? alert('Greetings') :
            login == '' ? alert('No login') : alert("");
}

function solutionTask11() {
    let login = prompt("Enter login (Admin, '' or *type Esc*):");
    let password = '';
    if (login === 'Admin') {
        password = prompt("Enter password (TheMaster or other): ");
        if (password === "TheMaster")
            alert('Welcome');
        else if (password === null)
            alert('Canceled');
        else alert('Wrong password');
    }
    else if (login === '' || login === null)
        alert("Canceled");
    else
        alert('I don’t know you');
}

function solutionTask13() {
    let isTry = true;
    while(isTry){
        let number = prompt("Enter number greater than 100:");
        if(Number(number > 100) || number == null) 
            isTry = false;
    }
}

function solutionTask14() {
    let inputNumber = Number(prompt("Enter number from 0 to 3")); 
    switch(inputNumber){
        case 0:
            alert(0);
            break;
        case 1:
            alert(1);
            break;
        case 2:
        case 3:
            alert("2 or 3");
            break;
        default:
            alert("No valid number!");
    }
}

/*

Here is another solution

function solutionTask15_1() {
    alert(Number(prompt("Enter your age: ")) >= 18 ? true : confirm('Did parents allow you?'));
}

*/

function solutionTask15_1() {
    let isAdult = Number(prompt("Enter your age: "))  >= 18 ;
    alert ( isAdult || confirm('Did parents allow you?'));
}

function solutionTask15_2() {
    let x = Number(prompt("Enter first number: "));
    let n = Number(prompt("Enter second number: "));

    alert(`Result: ${pow(x,n)}`);

    function pow(x,n){
        return x ** n;
    }

}

const solutionTask17 = () => confirm("Do you agree?") ? alert("You agreed.") : alert("You canceled the execution.");
