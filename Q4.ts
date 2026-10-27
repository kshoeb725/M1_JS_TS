 abstract class Person  {
      abstract getDetails():void;
      abstract getRole():void;
}

class Student extends Person{
    name:string="Tom";
    id:number=1500;
    getDetails() {
        console.log("studentDeatils"+this.id+this.name);
        
    }
    getRole() {
        console.log("student Role");
        
    }

}

class teacher extends Person{
    name:string="jeery"
    role:string="science teacher"
    getDetails(): void {
        console.log("teacher details"+this.name);
        
    }
    getRole(): void {
        console.log("teacher role"+this.role);
        
    }

}


const s = new Student();
s.getDetails();
s.getRole();

const t = new teacher();
t.getDetails();
t.getRole();
