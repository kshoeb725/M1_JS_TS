
const task = new Promise((resolve, reject) => {
    const response = fetch("https://jsonplaceholder.typicode.com")

    const data = response.json

    resolve(data)
    
});

task.then((result)=>{
    console.log(result);
    
})
