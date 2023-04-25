class Employee {
  constructor(email, name, id) {
    this.email = email;
    this.name = name;
    this.id = id;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
