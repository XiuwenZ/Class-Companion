var courses = []; // Array to store course objects


function calculateGPA() {
 var creditsInput = document.getElementById("credit-input");
 var gradeSelect = document.getElementById("grade-select");
 var resultDiv = document.getElementById("result");


 var credits = parseFloat(creditsInput.value);
 var grade = parseFloat(gradeSelect.value);


 var course = {
   credits: credits,
   grade: grade
 };


 courses.push(course); // Add the course to the array


 displayCourses(); // Update the displayed courses


 creditsInput.value = ""; // Clear the input fields
 gradeSelect.value = "";
}


function displayCourses() {
 var table = "<table><tr><th>Credits</th><th>Grade</th></tr>";


 for (var i = 0; i < courses.length; i++) {
   table += "<tr><td>" + courses[i].credits + "</td><td>" + courses[i].grade + "</td></tr>";
 }


 table += "</table>";


 document.getElementById("course-table").innerHTML = table;


 calculateOverallGPA(); // Calculate and display the overall GPA
}


function calculateOverallGPA() {
 var totalCredits = 0;
 var weightedSum = 0;


 for (var i = 0; i < courses.length; i++) {
   totalCredits += courses[i].credits;
   weightedSum += courses[i].credits * courses[i].grade;
 }


 var overallGPA = weightedSum / totalCredits;


 document.getElementById("overall-gpa").innerHTML = "Overall GPA: " + overallGPA.toFixed(2);
}
