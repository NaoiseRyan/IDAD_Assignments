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
    "https://blackboard.itcarlow.ie/webapps/blackboard/content/listContent.jsp?course_id=_29392_1&content_id=_988277_1",
    [19, 2, 2024]
)
assignmentsArray.push(artWorld2);


//Calculations
for (let i = 0; i < assignmentsArray.length; i++) {

    let yearDifference = assignmentsArray[i].dueDate[2] - currentDateArray[2];
    let monthDifference = assignmentsArray[i].dueDate[1] - currentDateArray[1];
    let dateDifference = assignmentsArray[i].dueDate[0] - currentDateArray[0];
    let daysTillDue = (yearDifference * 365) + (monthDifference * 30) + dateDifference;

    if (daysTillDue < 1) {
        dangerLevelThreeArray.push(assignmentsArray[i]);
    }
    else if (daysTillDue > 7) {
        dangerLevelOneArray.push(assignmentsArray[i]);
    }
    else {
        dangerLevelTwoArray.push(assignmentsArray[i]);
    }

}