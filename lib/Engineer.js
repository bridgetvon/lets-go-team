// class Engineer {
//     constructor (name = "");

//     this.github

//     getGitHub()
//     //override to return engineer
//     getRole()
// }
//extend engineer from employee but include github



//extend employee class but include office number 
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    }
    getGitHub () {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}



module.exports = Engineer;