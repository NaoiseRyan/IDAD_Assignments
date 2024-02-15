class newAssignment {
    constructor(title, subject, description, dueDate) {
        this.title = title;
        this.subject = subject;
        this.description = description;
        this.dueDate = dueDate;
    }
}

const assignmentsArray = [];
const dangerLevelOneArray = [];
const dangerLevelTwoArray = [];
const dangerLevelThreeArray = [];

function getCurrentDate() {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    let currentDate = [currentDay, currentMonth, currentYear];
    return currentDate;
}

let currentDateArray = getCurrentDate();

// Work
let artWorld2 = new newAssignment(
    "World building - Final delivery",
    "3d Art",
    "Draw 1 Landscape, 2 Flora, 1 Fauna, 2 Technology, 1 Race",
    [26, 2, 2024]
)
assignmentsArray.push(artWorld2);

let Portfolio3 = new newAssignment(
    "Portfolio 3 - Paper wireframe",
    "Ui Prototyping",
    "Produce a paper wireframe of your portfolio website",
    [26, 2, 2024]
)
assignmentsArray.push(artWorld2);

//Calculations
for (let i = 0; i < assignmentsArray.length; i++) {

    let yearDifference = assignmentsArray[i].dueDate[2] - currentDateArray[2];
    let monthDifference = assignmentsArray[i].dueDate[1] - currentDateArray[1];
    let dateDifference = assignmentsArray[i].dueDate[0] - currentDateArray[0];
    let daysTillDue = (yearDifference * 365) + (monthDifference * 30) + dateDifference;

    if (daysTillDue < 1) {
        dangerLevelOneArray.push(assignmentsArray[i]);
        console.log("Late")
    }
    else if (daysTillDue <= 7) {
        dangerLevelTwoArray.push(assignmentsArray[i]);
        console.log("7 days")
    }
    else {
        dangerLevelThreeArray.push(assignmentsArray[i]);
        console.log("a while")
    }
}

//JS to HTML
let dangerLevelThreeHtml = document.getElementById("dangerLevelThreeId");
let dangerLevelTwoHtml = document.getElementById("dangerLevelTwoId");
let dangerLevelOneHtml = document.getElementById("dangerLevelOneId");

for (let i = 0; i < dangerLevelThreeArray.length; i++) {
    //Title
    dangerLevelThreeHtml.innerHTML += dangerLevelThreeArray[i].title + "<br>";
    //Subject
    dangerLevelThreeHtml.innerHTML += dangerLevelThreeArray[i].subject + "<br>";
    //Link
    dangerLevelThreeHtml.innerHTML += dangerLevelThreeArray[i].description + "<br>";
    //Date
    dangerLevelThreeHtml.innerHTML += dangerLevelThreeArray[i].dueDate + "<br> <br>";
    //Linebreaker
    dangerLevelThreeHtml.innerHTML += "------------------------------------ <br>";
}

for (let i = 0; i < dangerLevelTwoArray.length; i++) {

    console.log(dangerLevelTwoArray[i]);
    //Title
    dangerLevelTwoHtml.innerHTML += dangerLevelTwoArray[i].title + "<br>";
    //Subject
    dangerLevelTwoHtml.innerHTML += dangerLevelTwoArray[i].subject + "<br>";
    //Link
    dangerLevelTwoHtml.innerHTML += dangerLevelTwoArray[i].description + "<br>";
    //Date
    dangerLevelTwoHtml.innerHTML += dangerLevelTwoArray[i].dueDate + "<br> <br>";
    //Linebreaker
    dangerLevelTwoHtml.innerHTML += "------------------------------------ <br>";
}

for (let i = 0; i < dangerLevelOneArray.length; i++) {
    //Title
    dangerLevelOneHtml.innerHTML += dangerLevelOneArray[i].title + "<br>";
    //Subject
    dangerLevelOneHtml.innerHTML += dangerLevelOneArray[i].subject + "<br>";
    //Link
    dangerLevelOneHtml.innerHTML += dangerLevelOneArray[i].description + "<br>";
    //Date
    dangerLevelOneHtml.innerHTML += dangerLevelOneArray[i].dueDate + "<br> <br>";
    //Linebreaker
    dangerLevelOneHtml.innerHTML += "------------------------------------ <br>";
}