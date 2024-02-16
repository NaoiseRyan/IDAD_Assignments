//----------------------------- Work
function declareWork() {
    class newAssignment {
        constructor(title, subject, description, dueDate) {
            this.title = title;
            this.subject = subject;
            this.description = description;
            this.dueDate = dueDate;
        }
    }

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
    assignmentsArray.push(Portfolio3);

    let Portfolio4 = new newAssignment(
        "Portfolio 4 - High fidel wireframe",
        "Ui Prototyping",
        "Produce a High fidelity wireframe of your portfolio website using digital tools",
        [12, 3, 2024]
    )
    assignmentsArray.push(Portfolio4);

    let UiLab3 = new newAssignment(
        "Lab 3",
        "Web Ui Design",
        "Integrate box model and site redirects to website",
        [26, 2, 2024]
    )
    assignmentsArray.push(UiLab3);

    let UiLab4 = new newAssignment(
        "Lab 4",
        "Web Ui Design",
        "?????",
        [26, 2, 2024]
    )
    assignmentsArray.push(UiLab4);

    let designResearch = new newAssignment(
        "Researching design topics",
        "Design Psycology",
        "Research and make a powerpoint on your topic",
        [26, 2, 2024]
    )
    assignmentsArray.push(designResearch);
}

//--------------------------------
const assignmentsArray = [];
const dangerLevelOneArray = [];
const dangerLevelTwoArray = [];
const dangerLevelThreeArray = [];
let currentDateArray = getCurrentDate();

function getCurrentDate() {
    let currentDay = new Date().getDate();
    let currentMonth = new Date().getMonth() + 1;
    let currentYear = new Date().getFullYear();

    let currentDate = [currentDay, currentMonth, currentYear];
    return currentDate;
}

//-----------Calculations
function sortArrays() {
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
}

//JS to HTML

function updateHtml() {
    let dangerLevelThreeHtml = document.getElementById("dangerLevelThreeId");
    let dangerLevelTwoHtml = document.getElementById("dangerLevelTwoId");
    let dangerLevelOneHtml = document.getElementById("dangerLevelOneId");

    for (let i = 0; i < dangerLevelThreeArray.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("workDiv")

        //Title
        newDiv.append(createParagraph(dangerLevelThreeArray[i].title));
        //Subject
        newDiv.append(createParagraph(dangerLevelThreeArray[i].subject));
        //Link
        newDiv.append(createParagraph(dangerLevelThreeArray[i].description));
        //Date
        newDiv.append(createParagraph(dangerLevelThreeArray[i].dueDate));
        //appendTohtml
        dangerLevelThreeHtml.append(newDiv);
    }

    for (let i = 0; i < dangerLevelTwoArray.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("workDiv")
        
        //Title
        newDiv.append(createParagraph(dangerLevelTwoArray[i].title));
        //Subject
        newDiv.append(createParagraph(dangerLevelTwoArray[i].subject));
        //Link
        newDiv.append(createParagraph(dangerLevelTwoArray[i].description));
        //Date
        newDiv.append(createParagraph(dangerLevelTwoArray[i].dueDate));
        //appendTohtml
        dangerLevelTwoHtml.append(newDiv);
    }

    for (let i = 0; i < dangerLevelOneArray.length; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("workDiv")
        
        //Title
        newDiv.append(createParagraph(dangerLevelOneHtml[i].title));
        //Subject
        newDiv.append(createParagraph(dangerLevelOneHtml[i].subject));
        //Link
        newDiv.append(createParagraph(dangerLevelOneHtml[i].description));
        //Date
        newDiv.append(createParagraph(dangerLevelOneHtml[i].dueDate));
        //appendTohtml
        dangerLevelOneHtml.append(newDiv);
    }
}

function createParagraph(text){
    let newP = document.createElement("p");
    newP.innerHTML = text;
    return newP;
}

function main() {
    declareWork()
    sortArrays();
    updateHtml();
}

document.onload = main();