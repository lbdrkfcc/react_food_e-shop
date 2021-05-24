import React, {/*useEffect,*/ useContext} from 'react'
import Context from '../context'
import Product from './product'
// import {products} from '../data/products'

function Products() {

  const {prods} = useContext(Context)

  // useEffect(()=>{
  //   console.log('prods ',prods)
  // },[prods])

  return (
    <div className="col py-3">
        <div className="row">
            {prods.map(prod => {
              if(!prod.filter){
                return <Product prod={prod} key={prod.id}/>
              }
            })}
        </div>
    </div>
    
  );
}

export default Products;