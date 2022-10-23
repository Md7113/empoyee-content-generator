const employee = require('./Employee.js')

class Manager extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
        this.getRole = () => {
            return 'Manager'
        }
    }
}
module.exports = Manager