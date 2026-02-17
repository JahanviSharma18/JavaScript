function f1(x){
    return new Promise((resolve,reject)=>{
        setTimeOut(()=>{
            console.log(X);
            resolve();
        },3000);
    })
}
async function main(){
try{
    await f1(5);
    console.log("Program Completed Successfully");}
}; catch{
    console.log(err)
}
main();