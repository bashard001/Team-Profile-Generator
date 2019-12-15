const manager = require("./manager")

class engineer extends manager{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github;
    }

    getRole() {
        return "Engineer";
      }
    
      getGithub() {
        return this.github;
      }
        
}

module.exports = engineer;