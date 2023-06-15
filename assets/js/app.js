
const url = 'https://fakestoreapi.com/products';

let info = await fetch(url);
    info = await info.json();



console.log(info);



let productsGrid = document.getElementById('products-grid');

console.dir(productsGrid);

productsGrid.innerHTML = info.map(item => `
<div class="py-2">
    <div class="card overflow-auto m-2" style="height:500px">
        <img src="${item.image}" class="card-img-top p-3" alt="..." style="height:250px">
        <div class="card-body">

            <h5 class="card-title" >
                ${item.title}
            </h5>

            <p class="card-text ">
                ${item.description}
            </p>

            <p class="text-end fs-3">
                ${item.price} $
            </p>
        
        </div>
        
    </div>

</div>
`).join('');


let priceProduct = info[0].price;
console.log(priceProduct);




























// let q = 0;

// let price = {
//     valueOf: document.getElementsByClassName('text-end')}

// console.log(price);








// let q = 0;

// let arr = [67, 8, 9, 34, 2, 6, 10];

// console.log(arr);

// for(let j = 0; j < arr.length - 1; j ++){
//     for(let i = 0; i < arr.length - 1; i++){
//         if(arr[i] > arr[i+1]){
//             let temp = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = temp;
//         }

//         q++;
//     }
// }

// console.log(arr);
// console.log('q', q);