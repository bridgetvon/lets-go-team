//link to lib profiles
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");

//what file to use to make a directory
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

//install inquirer
const inquirer = require("inquirer");

//link to generate
const render = require("./utils/generate");

//create array to push the prompts to
const myTeam = [];

console.log("Lets build your team!");

//add options to add more than one intern and engineer

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "addEmployee",
        message: "Would you like to add another employee?",
        choices: ["engineer", "intern"],
      },
    ])
    .then((employeeInputs) => {
      if (employeeInputs.addEmployee == "engineer") {
        engineerQ();
      } else if (employeeInputs.addEmployee == "intern") {
        internQ();
      }
    });
};

const managerQ = () => {
  return inquirer
    .prompt([
      {
        //Prompt for team manager info
        type: "input",
        name: "managerName",
        message: "What is the team managers name? (required)",
        //validate because it is required
        validate: (managerNameInput) => {
          if (managerNameInput) {
            return true;
          } else {
            console.log("You must enter a managers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Please enter the managers employee ID. (Required)",
        validate: (managerIdInput) => {
          if (managerIdInput) {
            return true;
          } else {
            console.log("You must enter an ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email address? (Required)",
        validate: (managerEmailInput) => {
          if (managerEmailInput) {
            return true;
          } else {
            console.log("You must enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?(Required)",
        validate: (officeNumberInput) => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("You must enter an office number!");
            return false;
          }
        },
      },
    ])
    .then((managerInputs) => {
      const manager = new Manager(
        managerInputs.name,
        managerInputs.id,
        managerInputs.email,
        managerInputs.officeNumber
      );

      //push to an array
      myTeam.push(managerInputs);
      addEmployee();
    });
};

//add option to add an engineer
const engineerQ = () => {
  return inquirer
    .prompt([
      {
        //Prompt for team manager info
        type: "input",
        name: "engineerName",
        message: "What is the engineers name? (required)",
        //validate because it is required
        validate: (engineerNameInput) => {
          if (engineerNameInput) {
            return true;
          } else {
            console.log("You must enter an engineers name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "Please enter the engineers employee ID. (Required)",
        validate: (engineerIdInput) => {
          if (engineerIdInput) {
            return true;
          } else {
            console.log("You must enter an ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "What is the engineers email address? (Required)",
        validate: (engineerEmailInput) => {
          if (engineerEmailInput) {
            return true;
          } else {
            console.log("You must enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineers gitHub username?(Required)",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("You must enter gitHub username!");
            return false;
          }
        },
      },
    ])
    .then((engineerInputs) => {
      const engineer = new Engineer(
        engineerInputs.name,
        engineerInputs.id,
        engineerInputs.email,
        engineerInputs.gitHub
      );
      //array
      myTeam.push(engineerInputs);
      // console.log(engineerInputs);

      if (engineerInputs.addEngineer == "yes") {
        addEmployee();
      } else {
        makeTeam();
      }
    });
};

const internQ = () => {
  return inquirer
    .prompt([
      {
        //Prompt for team manager info
        type: "input",
        name: "internName",
        message: "What is the interns name? (required)",
        //validate because it is required
        validate: (internNameInput) => {
          if (internNameInput) {
            return true;
          } else {
            console.log("You must enter an intern name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internId",
        message: "Please enter the interns employee ID. (Required)",
        validate: (internIdInput) => {
          if (internIdInput) {
            return true;
          } else {
            console.log("You must enter an ID number!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the interns email address? (Required)",
        validate: (internEmailInput) => {
          if (internEmailInput) {
            return true;
          } else {
            console.log("You must enter an email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern go to?(Required)",
      },
    ])
    .then((internInputs) => {
      const intern = new Intern(
        internInputs.name,
        internInputs.id,
        internInputs.email,
        internInputs.school
      );

      myTeam.push(internInputs);
      if (internInputs.addEngineer == true) {
        addEmployee();
      } else {
          makeTeam();
      }
    });
};

// create the promise object to accept HTML content as a parameter
function makeTeam() {
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(myTeam), "utf-8");
  console.log(myTeam);
}

makeTeam();

managerQ();
