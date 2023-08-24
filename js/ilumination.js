const products = document.querySelectorAll('.product');
var productsJson;

fetch('../products.json').then(function(response){
    return response.json();
}).then(function(data){

    productsJson = data;

    for (let i = 0; i < 1; i++) {
        products[i].querySelector('h2').textContent = data[i].product;
        products[i].querySelector('img').src = data[i].image;
    }

}).catch(function(error){
    console.log(error);
});

function elementClicked(e){
    const idElement = e.target.id;
    const modal = document.getElementById('modal');
    
    modal.querySelector('img').src = productsJson[idElement].image;
    modal.querySelector('h2').textContent = productsJson[idElement].product;
    modal.querySelector('p').textContent = productsJson[idElement].description;

    modal.showModal();
}

document.addEventListener("click", elementClicked);

function closeModal(){
    modal.close();
}