const Employee = require("./Employee");

class Intern extends Employee {
    constructor(email, name, id, school) {
      super(email, name, id); // call the super class constructor and pass in the name parameter
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
     
    getRole() {
        return 'Intern';
    }
  }
  
module.exports = Intern;