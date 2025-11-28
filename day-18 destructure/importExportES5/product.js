let prod_name = 'marker pen';
class product {
    constructor() {
        console.log("product class constructors")
    }
}
//default import
module.exports = prod_name;
//named exports
module.exports = { prod_name, product }

