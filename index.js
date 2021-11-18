//link to lib profiles 
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');



//install inquirer
const fs = require('fs');
const inquirer = require('inquirer');

//link to generate 
const generate = require('./utils/generate');

//create array to push the prompts to 

const myTeam = [];

//add options to add more than one intern and engineer can you loop or does it need to be hard coded

const managerQ = () => {
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
    }
])
    .then(managerInputs => {
        const { name, id, email, officeNumber } = managerInputs;
        const manager = new Manager (name, id, email, officeNumber);

        //push to an array 
        myTeam.push(manager);

    })
};

    //once input is receieved send it to an array 

    //add option to add an engineer 
    const engineerQ = () => {
        return inquirer.prompt([
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
    }
])
    .then(engineerInputs => {
         const { name, id, email, gitHub } = engineerInputs;
         const engineer = new Manager (name, id, email, gitHub);
        //array 
        myTeam.push(engineer);
    })
};
   
const internQ = () => {
    return inquirer.prompt([
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
    }
])
    .then(internInputs => {
        const { name, id, email, school } = internInputs;
        const intern = new Manager (name, id, email, school);

        myTeam.push(intern);
    })
};

//create the promise object to accept HTML content as a parameter 

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'file created!'
            });
    });
  });
};

//ask if this is needed
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('.src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

managerQ()
    .then(engineerQ, internQ)
    // .then(myTeam => {
    //     return generate(myTeam);
    // })
    



module.exports = {writeFile, copyFile};