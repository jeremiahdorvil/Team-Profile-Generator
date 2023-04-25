const Employee = require("./Employee");

class Manager extends Employee {
    constructor(email, name, id, officeNumber) {
      super(email, name, id); // call the super class constructor and pass in the name parameter
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }

    getRole() {
      return 'Manager';
    }
  }
  
module.exports = Manager;