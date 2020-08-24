import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


// SERVICES
import productService from './services/productService';
//guarded-gorge-91079/src/services/productService.js

function App() {
  const [products, setproducts] = useState(null);
  const history = useHistory();
  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }
  
async function del(id){
  let res = await productService.deleteOne(id);
  
  history.push("/senddata");
  console.log(res);
  console.log(id)
}
  const renderProduct = product => {
    return (

            <li key={product._id} className="list__item product">
            
            <h3 className="product__name" id={product._id}>{product.name}</h3>
            <p className="product__description">{product.description}</p>
            <button onClick={()=>del(product._id)}>Delete</button>
          </li>
    )}
  return (
    <div className="App">
          <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );}


function DataSubmited() {
    return (<div>
    <App />
    </div>
    )}



export default DataSubmited;