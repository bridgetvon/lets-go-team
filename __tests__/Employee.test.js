const { jest } = require("jest");

test('creates an employee object', () => {
    const employee = new Employee('manager', 'other')

    expect(employee.name).toBe('manager');
    expect(employee.status).toBe('employed');
});