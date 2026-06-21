let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let empId = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("dept").value;

    if (name === "" || empId === "" || isNaN(salary) || department === "") {
        alert("Please fill all fields");
        return;
    }

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee added successfully");

    // Clear inputs
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("dept").value = "";
}

function displayEmployees() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h3>No employees added</h3>";
        return;
    }

    let output = "<h3>All Employees</h3>";

    employees.forEach((emp) => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ₹${emp.salary} |
        Dept: ${emp.department} <br>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

function filterSalary() {
    let filtered = employees.filter(emp => emp.salary > 5000);

    let output = "<h3>Employees with Salary > ₹5000</h3>";

    filtered.forEach(emp => {
        output += `
        Name: ${emp.name} |
        Salary: ₹${emp.salary} <br>
        `;
    });

    document.getElementById("output").innerHTML = output;
}

function totalSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        "<h3>Total Salary Payout: ₹" + total + "</h3>";
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h3>No employees available</h3>";
        return;
    }

    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    let avg = total / employees.length;

    document.getElementById("output").innerHTML =
        "<h3>Average Salary: ₹" + avg.toFixed(2) + "</h3>";
}

function countDepartment() {
    let deptName = prompt("Enter Department Name:");

    let count = employees.filter(
        emp => emp.department.toLowerCase() === deptName.toLowerCase()
    ).length;

    document.getElementById("output").innerHTML =
        "<h3>Employees in " + deptName + ": " + count + "</h3>";
}
