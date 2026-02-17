let cart=[]

//click on add to cart button on iphone product
cart= [...cart,{name:"iphone",price:45000,qty:1}]


//click on add to cart button on speaker product
cart=[...cart,{name:"speaker",price:1000,qty:1}]
console.log(cart)



const order={
    email:"john@gmail.com",
    items:cart,
    orderValue:46000,
    status:"Pending"
}

db.orders.insertOne(order)



//Create flipkart database
Create Collection orders > email, items, order value, status, orderDate
create collection users > name, email, password, role
Insert seed data
