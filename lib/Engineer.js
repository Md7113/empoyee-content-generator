const employee = require('./Employee.js')

class Engineer extends employee{
    constructor(name, id, email, github){
        super(name, id, email)
        super.getName
        super.getEmail
        super.getId
        this.github = github
        this.getGithub = () => {
            return github
        }
        this.getRole = () => {
            return 'Engineer'
        }
    }
}
module.exports = Engineer