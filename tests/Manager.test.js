const ManagerConst = require('../lib/Manager');


describe('Test Manager constructor and its pieces', () => {
 it('should return the name of the Manager', () =>{
 const newEmp = new ManagerConst('John','11','John@gmail.com','12')
  expect(newEmp.getName()).toBe('John');
});

it('should return the ID of the Manager', () =>{
  const newEmp = new ManagerConst('John','11','John@gmail.com','12')
   expect(newEmp.getId()).toBe('11');
 });

 it('should return the Email of the Manager', () =>{
  const newEmp = new ManagerConst('John','11','John@gmail.com','12')
   expect(newEmp.getEmail()).toBe('John@gmail.com');
 })

 it('should return the office of the Manager', () =>{
  const newEmp = new ManagerConst('John','11','John@gmail.com','12')
   expect(newEmp.officeNumber).toBe('12');
 }) 

});