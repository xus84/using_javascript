import products from './data.js'


const myFunction = () => {
    
    let productList = products.map(
      (product) => {
          let newObj =  '';
          newObj = `
          <div>${product.id}</div>
          <div>${product.name}</div>
          <div>${product.price}</div>
           `
          return newObj;
      } 
     
    )
    demo.innerHTML = productList; 
    console.log(productList)   
   
}
myFunction()

















 





