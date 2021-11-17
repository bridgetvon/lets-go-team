const Intern = require('../lib/Intern.js');

test('test that intern object is created', () => {
    const intern = new Intern ('Bridget', 63, 'bridget@gmail.com', 'Western');

    expect(intern.name).toBe('Bridget');
    expect(intern.id).toBe(63);
    expect(intern.email).toBe('bridget@gmail.com');
    expect(intern.school).toBe('Western');
});

test('test that school returns a string', () => {
    const intern = new Intern ('Bridget', 63, 'bridget@gmail.com', 'Western');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

//get role 