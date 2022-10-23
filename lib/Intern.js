const employee = require('./Employee.js')

class Intern extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        this.getSchool = () => {
            return school
        }
        this.getRole = () => {
            return 'Intern'
        }
    }
}
module.exports = Intern