

const db = require('mysql2');


const connection = db.createConnection({
    host : "localhost",
    user:"root",
    password:"passwword"
})

db.err(()=>{
    if(err){
        console.log("error");
        
    }else{
        console.log("data connected succesfully");
        
    }
})


function insert(id , name , Sal) {
    const sql = "insert into emp values (?,?,?)"
    db.query(sql,[id,name,sal],(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("data inserted ");
            
        }
    })
}


function update(id , name ) {
    const sql = "iupdate emp set name=? where id =?"
    db.query(sql,[id,name,],(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("data Updated ");
            
        }
    })
}

function Delete(id ) {
    const sql = "delete from emp where id =?"
    db.query(sql,[id,name,],(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log("data deleted ");
            
        }
    })
}

function show() {
    const sql = "select*from emp"
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            
        }else{
            console.log(result);
            
        }
    })
}


insert(1,"Tom,25000")
update(1,"jeery")
delete(1)
show()