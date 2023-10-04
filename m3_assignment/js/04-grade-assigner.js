function gradeAssign(findGrade) {
    if (findGrade < 1 || findGrade > 100) {
        findGrade = prompt("Be sure to enter a number between 1 and 100!");
        gradeAssign(findGrade);
    } else if (findGrade < 60) {
        console.log("You received a F.");
        document.write("<p>You received a F.</p>");
    } else if (findGrade >= 60 && findGrade <= 69) {
        console.log("You received a D.");
        document.write("<p>You received a D.</p>");
    } else if (findGrade >= 70 && findGrade <= 79) {
        console.log("You received a C.");
        document.write("<p>You received a C.</p>");
    } else if (findGrade >= 80 && findGrade <= 89) {
        console.log("You received a B.");
        document.write("<p>You received a B.</p>");
    } else if (findGrade >= 90 && findGrade <= 100) {
        console.log("You received an A.");
        document.write("<p>You received a A.</p>");
    }
}

let numInput = prompt("Please enter a number between 1 and 100.")

gradeAssign(+numInput)