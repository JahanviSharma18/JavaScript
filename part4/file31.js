import {head} from './header.js'
import {foot} from './footer.js'
import {getProducts} from './products.js'
head();
let products=getProducts();
console.table(products);
foot();
