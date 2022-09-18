// For Add Item to cart
export const AddCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product,
    }
}

// For delete item from cart
export const DeleteCrat = (product) => {
    return{
        type : "DELETEITEM",
        payload : product
    }
}

// export const delCrt = (product) => {
//     return{
//         type : "HAPUS",
//         payload : product
//     }
// }