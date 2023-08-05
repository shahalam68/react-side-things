function add (num1, num2){
    return num1 + num2;
}
function multiply(num1, num2){
    return num1 * num2;
}



// reduce
const nums = [34, 56,78, 92];
let sum = 0;
for (const num of nums){
    sum = sum + num;
}
const reducer = (previous, current) => previous + current;
nums.reduce(reducer,0);

const jinis =[
    {id: 1, name: 'Alta', price: 25},
    {id: 2, name: 'Nail polish', price: 500},
    {id: 3, name: 'Face mask', price: 255},
    {id: 4, name:'Maskara', price: 590}
]
let total = 0;
for (const jini of jinis){
    total = total + jini.price; 
}
const jinisReducer = (previus,current) => previus + current.price;

// const jinisTotal = jinis.reduce(jinisReducer,0)

// const jinisTotal = jinis.reduce()


export {add, multiply}