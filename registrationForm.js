let form = document.getElementById("form");
let student = document.getElementById("student").value;
let employee = document.getElementById("employee").value;
let entrepreneur = document.getElementById("entrepreneur").value;
let student_hidden = document.getElementById("student-hidden");
let employee_hidden = document.getElementById("employee-hidden");
let entepreneur_hidden = document.getElementById("entrepreneur-hidden");
form.addEventListener("change", field);
function field(e) {
  console.log(e.target.value);
  switch (e.target.value) {
    case "student":
      if (student === "student") {
        entepreneur_hidden.setAttribute("class", "entrepreneur-hidden");
        employee_hidden.setAttribute("class", "employee-hidden");
        student_hidden.removeAttribute("class");
      }
      break;
    case "employee":
      if (employee === "employee") {
        entepreneur_hidden.setAttribute("class", "entrepreneur-hidden");
        student_hidden.setAttribute("class", "student-hidden");
        employee_hidden.removeAttribute("class");
      }
      break;
    case "entrepreneur":
      if (entrepreneur === "entrepreneur") {
        employee_hidden.setAttribute("class", "employee-hidden");
        student_hidden.setAttribute("class", "student-hidden");
        entepreneur_hidden.removeAttribute("class");
      }
      break;
  }
}
//console.log(student, employee, entrepreneur);
