// Given an array of products, each with a category, separate them into
//  two arrays ; one for electronics and one for clothing. store the result in an object

// const products=[
//     {name:'Laptop', category:"electronics"},
//     {name:'T-shirt', category:"Clothing"},
//     {name:'Headphones', category:"electronics"},
//     {name:'Jeans', category:"Clothing"},
// ]

// output:
// {
//     electronics:["Laptop","Headphones"],
//     clothing: ["T-shirt","Jeans"]
// }

let categorized={
    electronics:[],
    clothing: []
}
const products=[
    {name:'Laptop', category:"electronics"},
    {name:'T-shirt', category:"Clothing"},
    {name:'Headphones', category:"electronics"},
    {name:'Jeans', category:"Clothing"},
]

for(let i=0; i<products.length; i++){

    const singleProduct=products[i];

    if(singleProduct.category==='electronics'){
        categorized.electronics.push(singleProduct.name)
    }
    else if(singleProduct.category==='Clothing'){
        categorized.clothing.push(singleProduct.name)
    }
}
console.log(categorized)