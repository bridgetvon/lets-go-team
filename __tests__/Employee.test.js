const Employee = require('../lib/Employee.js');


test('creates an employee object', () => {
    const employee = new Employee('Bridget', 23, 'bridget@gmail.com');

    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
});


test('check the employee name comes back from getName', () => {
    const employeeName = new Employee('Bridget');
    expect(employeeName.getName()).toEqual(expect.any(String));
});

test('check that getID returns a number', () => {
    const idNumber = new Employee('Bridget', 23, 'bridget@gmail.com');
    expect(idNumber.getId()).toEqual(expect.any(Number));
});

test('check that getID does not return a string', () => {
    const id = new Employee('Bridget', 23, 'bridget@gmail.com');
    expect(id.getId()).toEqual(expect.not.stringContaining('sdgkjg'));
});

test('check that a string is returned for email', () => {
    const email = new Employee('Bridget', 23, 'bridget@gmail.com');
    expect(email.getEmail()).toEqual(expect.any(String));
});

test('make sure employee role is returned as employee', () => {
    const empRole = new Employee('Bridget', 23, 'bridget@gmail.com');
    expect(empRole.getRole()).toEqual(expect.stringContaining('Employee'));    
});