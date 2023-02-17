
let serial =0;
document.getElementById('first-card').addEventListener('click',function(){
//  serial=serial +1
 serial += 1
// get the data from html using id
    const ProductName = document.getElementById('first-name').innerText;
    const productPrice = document.getElementById('first-price').innerText;
    const productQuantiy = document.getElementById('first-quantity').innerText;
    
    // console.log(ProductName,productPrice,productQuantiy);

    const priceTotal = parseInt(productPrice) * parseInt(productQuantiy);
    
    // show the data 
    displayData(ProductName,productPrice,productQuantiy,priceTotal)
  
    disabledButton('first-card');

    
});

// using event object from browser

document.getElementById('second-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    serial += 1
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantiy = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const sumTotal = parseInt(pPrice) + parseInt(pQuantiy);
    console.log(sumTotal)
    // console.log(productName,productPrice,productQuantiy)

    displayData(pName,pPrice,pQuantiy,sumTotal)
    disabledButton('second-card');
})
// using event object from browser

document.getElementById('third-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    serial += 1
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantiy = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const substraction = parseInt(pPrice) - parseInt(pQuantiy);
    console.log(substraction)
    // console.log(productName,productPrice,productQuantiy)

    displayData(pName,pPrice,pQuantiy,substraction)
    disabledButton('third-card');
})
// using event object from browser

document.getElementById('forth-card').addEventListener('click',function(e){
    // console.log(e.target.parentNode.parentNode.children[0].innerText);
    serial += 1
    const pName = e.target.parentNode.parentNode.children[0].innerText;
    const pPrice = e.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantiy = e.target.parentNode.parentNode.children[3].children[0].innerText;
    const division = parseInt(pPrice) / parseInt(pQuantiy);
    console.log(division)
    // console.log(productName,productPrice,productQuantiy)

    displayData(pName,pPrice,pQuantiy,division)
    disabledButton('forth-card');
})

document.getElementById('last-card').addEventListener('click',function(){
    const productName = document.getElementById('last-name').innerText;
    const productPrice = document.getElementById('first-input').value;
    const productQuantiy = document.getElementById('second-input').value;


    if(productPrice == '' || productQuantiy == ''|| productPrice <0 || productQuantiy < 0  ){
        return alert('Please enter any valid number');
    }
    else{

    }
    const total =parseInt(productPrice) / parseInt(productQuantiy);
    console.log(productName,productPrice,productQuantiy)
 

    displayData( productName,productPrice, productQuantiy,total);
    disabledButton('last-card');
})










// common function
function displayData(ProductName,productPrice,productQuantiy,priceTotal){

    const conatainer = document.getElementById('table-container');
    const tr = document.createElement('tr');
   
    tr.innerHTML=`
        <td> ${serial} </td>
        <td> ${ProductName} </td>
        <td> ${productPrice} </td>
        <td> ${productQuantiy} </td>
        <td> ${priceTotal} </td>
    
    
    
    `;
    conatainer.appendChild(tr);
};

function disabledButton(id){
    document.getElementById(id).setAttribute('disabled' ,true);
}