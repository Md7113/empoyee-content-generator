const EngineerConst = require('../lib/Engineer');


describe('Test Employee constructor and its pieces', () => {
 it('should return the name of the Engineer', () =>{
 const newEmp = new EngineerConst('John','11','John@gmail.com','johnGit')
  expect(newEmp.getName()).toBe('John');
});

it('should return the ID of the Engineer', () =>{
  const newEmp = new EngineerConst('John','11','John@gmail.com','johnGit')
   expect(newEmp.getId()).toBe('11');
 });

 it('should return the Email of the Engineer', () =>{
  const newEmp = new EngineerConst('John','11','John@gmail.com','johnGit')
   expect(newEmp.getEmail()).toBe('John@gmail.com');
 })

 it('should return the gitHub of the Engineer', () =>{
  const newEmp = new EngineerConst('John','11','John@gmail.com','johnGit')
   expect(newEmp.getGithub()).toBe('johnGit');
 }) 

});