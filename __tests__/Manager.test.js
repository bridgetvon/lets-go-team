const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


// can you test that the super works? how do you test this?
// test('make sure employee name and email come from super', () => {
//     const employee = new Employee('Bridget', 95, 'bridget@gmail.com');

//     expect(employee.super()).
// });

test('test that manager object is created', () => {
    const manager = new Manager ('Alex', 78, 'alex@gmail.com', 4);

    expect(manager.name).toBe('Alex');
    expect(manager.id).toBe(78);
    expect(manager.email).toBe('alex@gmail.com');
    expect(manager.officeNumber).toBe(4);

});

test('test that a number is returned for the office number', () => {
    const manager = new Manager ('Alex', 78, 'alex@gmail.com', 4);

    expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
});

//test to get role returned as manager 