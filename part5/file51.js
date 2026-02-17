const url="https://jsonplaceholder.typicode.com/users"

async function fetchData(){
const response = await fetch(url)
const result=await response.json()
console.log(result)
}
fetchData()
//frtch here s returning a promise