const name = 'moti'
const userAge = 27

const user = {
    name,
    userAge,
    location: 'manila'
}

console.log(user)



const product = {
    label: 'notebook',
    price: 10,
    stock: 201,
    salePrice: undefined,
    rating: 4
}

// const label = product.label
// const stock = product.stock


/* const {label : productLabel, stock, rating = '5/5'} = product

console.log(productLabel)
console.log(stock)
console.log(rating)
 */


                            //default values for no product
const transaction = (type, {label = 'no item', stock = 0} = {} ) => {
    console.log(type, label, stock)
}

transaction('order', product)


