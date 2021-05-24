import React from 'react'
import {products} from './data/products'

function DevInfo() {

  // console.log(products)

  return (
    <div className="devinfo">
        <pre>{products}</pre>
    </div>
  );
}

export default DevInfo;