const months = [
    { month: "January", col: 31 },
    { month: "February", col: 28 },
    { month: "March", col: 31 },
    { month: "April", col: 30 },
    { month: "May", col: 31 },
    { month: "June", col: 30 },
    { month: "July", col: 31 },
    { month: "August", col: 31 },
    { month: "September", col: 30 },
    { month: "October", col: 31 },
    { month: "November", col: 30 },
    { month: "December", col: 31 }
];
let count = 0;

function one(val) {
    let a = document.createElement("td");
    a.textContent = val; 
    document.getElementById("tbodyel").appendChild(a);
}

function two() {
    let b = document.createElement("th");
    b.textContent = months[count].month; 
    b.colSpan = months[count].col;
    count = count + 1; 
    document.getElementById("theadel").appendChild(b); 
}

let currentDate = new Date("2024-01-01"); 
for (let i = 0; i < 365; i++) { 
    if (currentDate.getDate() === 1) { 
        two();
    }
    one(currentDate.getDate()); 
    currentDate.setDate(currentDate.getDate() + 1); 
}
