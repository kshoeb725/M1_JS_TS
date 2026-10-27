class School{
    static totalStudent:number=70;
    studentlist:string="Tom";

    static displayInfo(){
        console.log(this.totalStudent);
        
        
    }

    showInfo(){
        console.log(this.studentlist);
        
    }

}

const S = new School();
S.showInfo();
School.displayInfo();