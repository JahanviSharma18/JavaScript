const cart={
    items=[],
    addItems(item){
        this.items.push(item)
    },
    showItems:"",
};
cart.addItems("Laptop")
cart.addItems("Desktop")
cart.showItems()




// client:browser
// Server: mongodb, node, 