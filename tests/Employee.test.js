const EmployeeConst = require('../lib/Employee');


describe('Test Employee constructor and its pieces', () => {
 it('should return the name of the employee', () =>{
 const newEmp = new EmployeeConst('John','11','John@gmail.com')
  expect(newEmp.getName()).toBe('John');
});

it('should return the ID of the employee', () =>{
  const newEmp = new EmployeeConst('John','11','John@gmail.com')
   expect(newEmp.getId()).toBe('11');
 });

 it('should return the Email of the employee', () =>{
  const newEmp = new EmployeeConst('John','11','John@gmail.com')
   expect(newEmp.getEmail()).toBe('John@gmail.com');
 })

});