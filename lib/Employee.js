function Employee(name = '', id, email) {
    this.name = name;

    // this.id = id;
    this.id=Math.floor(Math.random ());
    // this.email = email;
    this.email='ashley@gmail.com';
};

Employee.prototype.getName = function() {
    return {
      name: this.name
    };
};

Employee.prototype.getId = function() {
    return {
      id: this.id
    };
};

Employee.prototype.getEmail = function() {
    return {
      email: this.email
    };
};

Employee.prototype.getRole = function() {
    return {
      role: 'employee'
    };
};

// const Ashley = new Employee('Ashley', 1, 'ashley@gmail.com');

module.exports = Employee;