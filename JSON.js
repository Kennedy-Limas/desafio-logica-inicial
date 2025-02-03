let invoice = {
    name: "Kennedy",
    age: "28",
    products: {
        0: ["mouse", 29.90],
        1: ["teclado", 39.90],
        2: ["fone", 49.90]
    },
    taxes: 98.12
    
}

genereteInvoice(invoice)

function genereteInvoice (invoice){
    console.log("O comprador é " + invoice.name)

    for(let index in invoice.products){
        let [productsName, productsPrice] = invoice.products[index]
        console.log(`- ${productsName}: R$ ${productsPrice}`)
    }

}