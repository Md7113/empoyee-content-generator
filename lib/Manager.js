const employee = require('./Employee.js')

class Manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        super.getName
        super.getEmail
        super.getId
        this.officeNumber = officeNumber
        this.getRole = () => {
            return 'Manager'
        }
    }
}
module.exports = Manager