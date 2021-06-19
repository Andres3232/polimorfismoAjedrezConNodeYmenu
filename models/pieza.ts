
const {v4: uudiv4} = require ('uuid')
 class Pieza {

    public id: string 
    public desc :string
    
    constructor(desc: string){
        this.id = uudiv4();
        this.desc = desc
  
    }

    

   

}
export default Pieza