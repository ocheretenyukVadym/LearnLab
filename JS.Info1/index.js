const SOLUTION_1 = document.getElementById("solution1");
const SOLUTION_4 = document.getElementById("solution4");
const SOLUTION_6 = document.getElementById("solution6");
const SOLUTION_8 = document.getElementById("solution8");
const SOLUTION_9 = document.getElementById("solution9");
const SOLUTION_10_1 = document.getElementById("solution10_1");
const SOLUTION_10_2 = document.getElementById("solution10_2");
const SOLUTION_11 = document.getElementById("solution11");
const SOLUTION_13 = document.getElementById("solution13");
const SOLUTION_14 = document.getElementById("solution14");

const TASK_1 = document.getElementById("task1");
const TASK_4 = document.getElementById("task4");
const TASK_6 = document.getElementById("task6");
const TASK_8 = document.getElementById("task8");
const TASK_9 = document.getElementById("task9");
const TASK_10_1 = document.getElementById("task10_1");
const TASK_10_2 = document.getElementById("task10_2");
const TASK_11 = document.getElementById("task11");
const TASK_13 = document.getElementById("task13");
const TASK_14 = document.getElementById("task14");


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

SOLUTION_1.addEventListener('mouseenter', function(){
    TASK_1.className = "container__taskFocus";
})
SOLUTION_1.addEventListener('mouseout', function(){
    TASK_1.className = "container__task";
})

SOLUTION_4.addEventListener('mouseenter', function(){
    TASK_4.className = "container__taskFocus";
})
SOLUTION_4.addEventListener('mouseout', function(){
    TASK_4.className = "container__task";
})

SOLUTION_6.addEventListener('mouseenter', function(){
    TASK_6.className = "container__taskFocus";
})
SOLUTION_6.addEventListener('mouseout', function(){
    TASK_6.className = "container__task";
})
SOLUTION_8.addEventListener('mouseenter', function(){
    TASK_8.className = "container__taskFocus";
})
SOLUTION_8.addEventListener('mouseout', function(){
    TASK_8.className = "container__task";
})
SOLUTION_10_1.addEventListener('mouseenter', function(){
    TASK_10_1.className = "container__taskFocus";
})
SOLUTION_10_1.addEventListener('mouseout', function(){
    TASK_10_1.className = "container__task";
})
SOLUTION_10_2.addEventListener('mouseenter', function(){
    TASK_10_2.className = "container__taskFocus";
})
SOLUTION_10_2.addEventListener('mouseout', function(){
    TASK_10_2.className = "container__task";
})
SOLUTION_11.addEventListener('mouseenter', function(){
    TASK_11.className = "container__taskFocus";
})
SOLUTION_11.addEventListener('mouseout', function(){
    TASK_11.className = "container__task";
})
SOLUTION_13.addEventListener('mouseenter', function(){
    TASK_13.className = "container__taskFocus";
})
SOLUTION_13.addEventListener('mouseout', function(){
    TASK_13.className = "container__task";
})
SOLUTION_14.addEventListener('mouseenter', function(){
    TASK_14.className = "container__taskFocus";
})
SOLUTION_14.addEventListener('mouseout', function(){
    TASK_14.className = "container__task";
})


SOLUTION_1.addEventListener("click", solutionTask1);
SOLUTION_4.addEventListener("click", solutionTask4);
SOLUTION_6.addEventListener("click", solutionTask6);
SOLUTION_8.addEventListener("click", solutionTask8);
SOLUTION_10_1.addEventListener("click", solutionTask10_1);
SOLUTION_10_2.addEventListener("click", solutionTask10_2);
SOLUTION_11.addEventListener("click", solutionTask11);
SOLUTION_13.addEventListener("click", solutionTask13);
SOLUTION_14.addEventListener("click", solutionTask14);

