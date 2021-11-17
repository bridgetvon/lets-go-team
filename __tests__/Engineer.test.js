const Engineer = require('../lib/Engineer.js');
//since I use super for engineer do I need to include emplyee as const
const Employee = require('../lib/Employee.js');


//ask about tests that fail bc of capitals 
test('create an employee object', () => {
    const engineer = new Engineer ('John', 76, 'john@gmail.com', 'johnCodes');

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe(76);
    expect(engineer.email).toBe('john@gmail.com');
    expect(engineer.gitHub).toBe('johnCodes');
});

test('check that gitHub() returns a string', () => {
    const engineer = new Engineer ('John', 76, 'john@gmail.com', 'johnCodes');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

//test to get role 