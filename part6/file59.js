//this KEYWORD
// student={
//     name:"Nikhil",
//     display: function(){
//         console.log(this.name)
//     }
// }
// student.display()
// the value in key:value pair is a function and it can be called like this as student.display()



//wrong method
//don't use  arrow function with this keyword, it is not accessible
// student={
//     name:"Nikhil",
//     display: ()=>{
//         console.log(this.name)
//     }
// }
// student.display()
//Output:undefined


//straight-away also it can be written, this will work, also notice function keyword is not there
student={
    name:"Nikhil",
    display(){
        console.log(this.name)
    }
}
student.display()