import React, {/*useContext*/} from 'react'
import Products from './products'
import Filter from './filter'

function Main() {

  return (
    <div className="container-fluid">
      <div className="row">

        <Filter/>

        <Products/>

      </div>
    </div>
  );
}

export default Main;