const Employee = require('./Employee');


//extend employee class but include office number 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber () {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}



module.exports = Manager;