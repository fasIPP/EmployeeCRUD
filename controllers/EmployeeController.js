var mongoose = require("mongoose");
var Employee = require("../models/Employee");

var employeeController = {};

employeeController.list = function(req, res) {
  Employee.find({}).exec(function (err, employees) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/employees/index", {employees: employees});
    }
  });
};

employeeController.create = function(req, res) {
  res.render("../views/employees/create");
};

// Delete an employee
employeeController.delete = function(req, res) {
  Employee.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Employee deleted!");
      res.redirect("/employees");
    }
  });
};

module.exports = employeeController;
