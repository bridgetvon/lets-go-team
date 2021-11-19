//to be main class like character, class will extend character for others super() involved 

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email =email;
        
    }

    getName() {
        return this.name;
    }


    getId() {
        return this.id;
    }

    getEmail(){
        return this.email;
    }

   getRole() {
    return "Employee"; 
    }
};

module.exports = Employee;