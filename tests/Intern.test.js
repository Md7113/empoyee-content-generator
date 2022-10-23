const InternConst = require('../lib/Intern');


describe('Test Employee constructor and its pieces', () => {
 it('should return the name of the Intern', () =>{
 const newEmp = new InternConst('John','11','John@gmail.com','john School')
  expect(newEmp.getName()).toBe('John');
});

it('should return the ID of the Intern', () =>{
  const newEmp = new InternConst('John','11','John@gmail.com','john School')
   expect(newEmp.getId()).toBe('11');
 });

 it('should return the Email of the Intern', () =>{
  const newEmp = new InternConst('John','11','John@gmail.com','john School')
   expect(newEmp.getEmail()).toBe('John@gmail.com');
 })

 it('should return the School of the Intern', () =>{
  const newEmp = new InternConst('John','11','John@gmail.com','john School')
   expect(newEmp.getSchool()).toBe('john School');
 }) 

});