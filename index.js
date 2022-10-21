const EmployConst = require('./lib/Employee.js')
const EngineerConst = require('./lib/Engineer.js')
const ManagerConst = require('./lib/Manager.js')
const InternConst = require('./lib/Intern.js')
const employee = new EmployConst('kyle','45','@kyle')
const engine = new EngineerConst('kyle','45','@kyle','717')
const intern = new InternConst('kyle','14','@kyle','school place')
console.log(intern.getRole())


function sum(a, b) {
    return a + b;
  }
  module.exports = sum;