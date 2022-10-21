class Employee {
    constructor (name,id,email){
    this.name = name
    this.id = id
    this.email = email
    this.getName = () => {
        return name
    }
    this.getId = () => {
        return id
    }
    this.getEmail = () => {
        return email
    }
    this.getRole = () => {
        return 'Employee'
    }
}}

module.exports = Employee