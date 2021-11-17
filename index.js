//although not requirement consider adding validation
//install inquirer

const inquirer = require('inquirer');


const employeeQ = () => {
    return inquirer.prompt (
    {
        //Prompt for team manager info 
        type: 'input',
        name: 'managerInfo',
        message: 'what is your employee status?'
    },
    {
        //
    }

    });