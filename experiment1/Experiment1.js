function calculateResult() {
    let n = document.getElementById("subjects").value;
    let total = 0;

    for (let i = 0; i < n; i++) {
        let marks = parseFloat(prompt("Enter marks for subject " + (i + 1)));
        total += marks;
    }

    let avg = total / n;
    let grade;

    if (avg > 90) grade = 'A+';
    else if (avg > 80) grade = 'A';
    else if (avg > 70) grade = 'B';
    else if (avg > 60) grade = 'C';
    else if (avg > 50) grade = 'D';
    else if (avg > 40) grade = 'E';
    else grade = 'F';

    let resultStatus = (avg > 40) ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Total Marks: " + total + "<br>" +
        "Average Marks: " + avg.toFixed(2) + "<br>" +
        "Grade: " + grade + "<br>" +
        "Result: " + resultStatus;
}
