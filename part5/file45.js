function getStudentInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userObj = {
                name: "Janvi",
                email: "janvi@email.com",
                age: 20
            };
            
            resolve(userObj);   
        }, 2000); 
    });
}

//destucturing
function displayInfo(name,age){
    console.log(name)
}

async function main(){
        const result = await getStudentInfo();
        displayInfo(result);
        console.log("Program completed successfully");
    }
    main()


