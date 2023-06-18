
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





let reduction = document.getElementById('reductionPrice');

reduction.addEventListener('click', function(){
    info.sort( (a, b) => a.price - b.price);
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
    console.log(info);
});




let ascending = document.getElementById('ascendingPrice');

ascending.addEventListener('click', function(){
    info.sort( (a, b) => b.price - a.price);
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
    console.log(info);
});