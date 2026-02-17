function f1(x){
    return new Promise((resolve,reject)=>{
        setTimeOut(()=>{
            if(x%2==0){
                resolve();
            }else {
                reject("odd numbers not allowed")
            }
            console.log(X);
            resolve();
        },3000);
    })
}
async function main(){
    let num=Math.round(Math.random()*10);
try{
    const result=await f1(num);
    await f1(num);
    console.log("Program Completed Successfully");}
} catch(err){
    console.log(err);
}
}

main();