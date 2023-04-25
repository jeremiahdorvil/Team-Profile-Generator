const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(email, name, id, github) {
      super(email, name, id ); // call the super class constructor and pass in the name parameter
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }

    getRole() {
        return 'Engineer';
    };
  }
  
module.exports = Engineer;