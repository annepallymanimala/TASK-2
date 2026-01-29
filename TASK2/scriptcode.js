 function submitProjectForm() {
    var projectName = document.getElementById("projectName").value;
    var employeeName = document.getElementById("employeeName").value;
    var employeeEmail = document.getElementById("employeeEmail").value;
    var assignedTo = document.getElementById("assignedTo").value;
    var priority = document.querySelector('input[name="priority"]:checked');

    if (
      projectName === "" ||
      employeeName === "" ||
      employeeEmail === "" ||
      assignedTo === "" ||
      priority === null
    ) {
      alert("Please fill all the fields");
      return false;
    }

    alert(
      "Project Submitted Successfully!\n\n" +
      "Project: " + projectName + "\n" +
      "Employee: " + employeeName + "\n" +
      "Email: " + employeeEmail + "\n" +
      "Assigned To: " + assignedTo.value + "\n" +
      "Priority: " + priority.value
    );

    return false; 
  }

  
  function addProject() {
    var projectInput = document.getElementById("newProject").value;

    if (projectInput === "") {
      alert("Enter a project name");
      return;
    }

    var projectList = document.getElementById("newList");

    var li = document.createElement("li");
    li.textContent = projectInput;

    projectList.appendChild(li);

    document.getElementById("newProject").value = "";
  }