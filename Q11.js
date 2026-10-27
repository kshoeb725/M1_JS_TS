class InvalidCouponCode extends Error{
    constructor(message){
        super(message);
        this.name= "InvalidCopouncode"
    }
}

class customer extends InvalidCouponCode{
    displayInfo(token){
        try {
            if(token>=0){
                throw new InvalidCouponCode("please enter valid token")
            }else{
                console.log(token);
                
            }
        } catch (error) {
            console.log("name"+error.name+":"+error.message);
            
        }
    }
}

const c = new customer();
c.displayInfo(-1)