const Employee = require('./Employee');


//include extends employee and super()
// include school 
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }
    getSchool () {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}



module.exports = Intern;