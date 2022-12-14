const inquirer = require("inquirer");
const fs = require ('fs')
const EmployConst = require('./lib/Employee.js')
const EngineerConst = require('./lib/Engineer.js')
const ManagerConst = require('./lib/Manager.js')
const InternConst = require('./lib/Intern.js');


let employeeData = []
let contentFinal = []
function startLog(){
inquirer.prompt([
  {
    name : 'empName',
    message : 'What is the Name of the manager?',
    type: 'input'
},{
  name : 'email',
  message : 'What is the email of the Manager?',
  type: 'input'
},{
  name : 'id',
  message : 'What is the ID of the Manager?',
  type: 'input'
},{
  name : 'officeNum',
  message : 'What is the office number of the Manager?',
  type: 'input'
},{
  name : 'nextMove',
  message : 'Would you like to add a new intern, add a new engineer or finish your project?',
  type: 'list',
  choices: ['intern','engineer','finish']
}
]).then(function(content){
  const newMan = new ManagerConst(content.empName,content.id,content.email,content.officeNum)
  employeeData.push(newMan)
if(content.nextMove == 'intern'){
internLog()
}
if(content.nextMove == 'engineer'){
EngineerLog()
}
if(content.nextMove == 'finish'){
genContent()
}
})

}

function EngineerLog(){
  inquirer.prompt([
    {
      name : 'empName',
      message : 'What is the Name of the Engineer?',
      type: 'input'
  },{
    name : 'email',
    message : 'What is the email of the Engineer?',
    type: 'input'
  },{
    name : 'id',
    message : 'What is the ID of the Engineer?',
    type: 'input'
  },{
    name : 'github',
    message : 'What is the github link of the Engineer?',
    type: 'input'
  },{
    name : 'nextMove',
    message : 'Would you like to add a new intern, add a new engineer or finish your project?',
    type: 'list',
    choices: ['intern','engineer','finish']
  }
  ]).then(function(content){
    const newEng = new EngineerConst(content.empName,content.id,content.email,content.github)
  employeeData.push(newEng)
  if(content.nextMove == 'intern'){
  internLog()
  }
  if(content.nextMove == 'engineer'){
  EngineerLog()
  }
  if(content.nextMove == 'finish'){
  genContent()
  }
  })

}

function internLog(){
  inquirer.prompt([
    {
      name : 'empName',
      message : 'What is the Name of the Intern?',
      type: 'input'
  },{
    name : 'email',
    message : 'What is the email of the Intern?',
    type: 'input'
  },{
    name : 'id',
    message : 'What is the ID of the Intern?',
    type: 'input'
  },{
    name : 'school',
    message : 'What is the School the Intern attends?',
    type: 'input'
  },{
    name : 'nextMove',
    message : 'Would you like to add a new intern, add a new engineer or finish your project?',
    type: 'list',
    choices: ['intern','engineer','finish']
  }
  ]).then(function(content){
    const newInt = new InternConst(content.empName,content.id,content.email,content.school)
  employeeData.push(newInt)
  if(content.nextMove == 'intern'){
  internLog()
  }
  if(content.nextMove == 'engineer'){
  EngineerLog()
  }
  if(content.nextMove == 'finish'){
  genContent()
  }
  })

}

function genContent(){
  contentFinal.push(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Employee webpage</title>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous">
    
  </head>
  <body>
  <div class="jumbotron jumbotron-fluid bg-info">
    <div class="container">
      <h1 class="display-4">Employee Information</h1>
    </div>
</div>
<main class='row justify-content-center '>
`)

for(i = 0; i <employeeData.length;i++){
  let roleTemp = employeeData[i].getRole()
  let idTemp = employeeData[i].getId()
  let nameTemp = employeeData[i].getName()
  let emailTemp = employeeData[i].getEmail()
  let othertemp
  let icon
  if(roleTemp == 'Manager'){
    icon = 'fa-clipboard'
    othertemp = 'Office: '+employeeData[i].officeNumber
  }
  if(roleTemp == 'Intern'){
    icon = 'fa-paperclip'
    othertemp = 'School: '+employeeData[i].getSchool()
  }
  if(roleTemp == 'Engineer'){
    icon = 'fa-chart-pie'
    othertemp = 'Github: '+employeeData[i].getGithub()
  }
contentFinal.push(`
<div class="card m-2" style="width: 18rem; box-shadow: 5px 5px 5px rgb(112, 112, 112)">
  <div class="card-body">
    <h2 class='card-title bg-secondary text-white text-center d-flex'>${nameTemp} <i class="fas ${icon}"></i></h2>
    <h3 class="card-subtitle mb-2 text-muted d-flex">Role: ${roleTemp}</h3>
    <h3 class="card-subtitle mb-2 text-muted d-flex">ID: ${idTemp}</h3>
    <h3 class="card-subtitle mb-2 text-muted d-flex">${othertemp}</h3>
    <a href="mailto: ${emailTemp}" class="card-link">Email</a>
    </div>
</div>
`)

}
contentFinal.push(`
</main>
</div>
</body>
</html>
`)
let contentFinish = contentFinal.join('')
fs.writeFile('./src/index.html',contentFinish ,function(err){
  if(err){
      console.log(err)
  }
})
}

startLog()
