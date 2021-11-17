//although not requirement consider adding validation
//install inquirer

const inquirer = require('inquirer');


const employeeQ = () => {
    return inquirer.prompt([
    {
        //Prompt for team manager info 
        type: 'input',
        name: 'managerName',
        message: 'What is the team managers name? (required)',
        //validate because it is required
        validate: managerNameInput => {
            if (managerNameInput) {
                return true;
            } else {
                console.log('You must enter a managers name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Please enter the managers employee ID. (Required)',
        validate: managerIdInput => {
            if(managerIdInput) {
                return true;
            } else {
                console.log('You must enter an ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email address? (Required)',
        validate: managerEmailInput => {
            if(managerEmailInput) {
                return true;
            } else {
                console.log('You must enter an email address!');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'officeNumber',
        message: 'What is the managers office number?(Required)',
        validate: officeNumberInput => {
            if(officeNumberInput) {
                return true;
            } else {
                console.log('You must enter an office number!');
                return false;
            }
        }
    },
    //add option to add an engineer 
    {
        type: 'confirm',
        name: 'addEngineer',
        message: 'Would you like to add an Engineer to your team?',
        default: true
    },
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is the engineers name?(Required)',
        when: ({addEngineer}) => addEngineer,
         validate: engineerNameInput => {
        if (engineerNameInput) {
            return true;
        } else {
            console.log('You must enter an Engineers name!');
            return false;
        }
      }
    },
    {
         type: 'input',
         name: 'engineerId',
         message: 'Please enter the engineers employee ID. (Required)',
         validate: engineerIdInput => {
        if(engineerIdInput) {
            return true;
        } else {
            console.log('You must enter an ID number!');
            return false;
        }
      }
    },
    {
         type: 'input',
         name: 'engineerEmail',
         message: 'What is the engineers email address? (Required)',
         validate: engineerEmailInput => {
        if(engineerEmailInput) {
            return true;
        } else {
            console.log('You must enter an email address!');
            return false;
        }
       }
    },
    {
         type: 'input', 
         name: 'gitHub',
         message: 'What is the engineers gitHub username?(Required)',
         validate: gitHubInput => {
        if(gitHubInput) {
            return true;
        } else {
            console.log('You must enter gitHub username!');
            return false;
        }
      }
    },
    {
        type: 'confirm',
        name: 'addintern',
        message: 'Would you like to add an intern to your team?',
        default: true
    },
    {
        type: 'input',
        name: 'internName',
        message: 'What is the interns name?(Required)',
        when: ({addintern}) => addintern,
         validate: internNameInput => {
        if (internNameInput) {
            return true;
        } else {
            console.log('You must enter an interns name!');
            return false;
        }
    }
    },
    {
         type: 'input',
         name: 'internId',
         message: 'Please enter the interns employee ID. (Required)',
         validate: internIdInput => {
        if(internIdInput) {
            return true;
        } else {
            console.log('You must enter an ID number!');
            return false;
        }
      }
    },
    {
         type: 'input',
         name: 'internEmail',
         message: 'What is the interns email address? (Required)',
         validate: internEmailInput => {
        if(internEmailInput) {
            return true;
        } else {
            console.log('You must enter an email address!');
            return false;
        }
       }
    },
    {
         type: 'input', 
         name: 'school',
         message: 'What school does the intern go to?(Required)'
    },
]);

};

employeeQ();