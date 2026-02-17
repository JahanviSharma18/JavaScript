//numbers=[5,3,6,1]
//numbers.forEach(()=>{})
// prints the array elements one by one
// numbers.forEach((number)=>{
//     console.log(number)
// })

// numbers.map((number)=>{
//     console.log(number)
// })


//numbers.map(()=>{})
//transforms the existing array, but the new array has the same number of elements
// const newArray = numbers.map((number)=>{
//     return number+1;
// })
// console.log(newArray)



// numbers.filter(()=>{})
//new array will have filtered value
// const evenNumbers= numbers.filter((number)=>{
//         return number%2===0
// })
// console.log(evenNumbers)


//numbers.find(()=>{})
//
// const result=numbers.find((number)=>{
//     //return number===3
//     return number>3
// })
// console/log(result)



// numbers.reduce(()=>{})
// //
// const result=numbers.reduce((sum,number)=>{
//     return sum+number
// },0)
// console.log(result)


//numbers.some(()=>{})
    //return true/false
// const result= numbers.sone((number)=>{
//     return number>20
// })
// console.log(result)


// let marks=[78,50,90,20];
// const result=marks.some((mark)=>{
//     return mark>50;
// })
// if(result) console.log("Pass");
//     else console.log("fail")


//numbers.every(()=>{})
    //return true/false
// const result= numbers.every((number)=>{
//     return number>20
// })
// console.log(result)


let marks=[78,50,90,20];
const result=marks.every((mark)=>{
    return mark>2;
})
if(result) console.log("Pass");
    else console.log("fail")


