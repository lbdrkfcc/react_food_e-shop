import React, {/*useState,*/ useContext} from 'react'
import Context from '../context'
import CountInput from './count_input'

function Count({prodItem}) {

  const {addToCart, removeFromCart} = useContext(Context)

  return (
        <div className="row">
                {prodItem.incart > 0 ? (
                    <div className="col-6">
                        <CountInput prdItem={prodItem}/>
                    </div>                             
                ) : (
                    <div className="col">
                    <button 
                    className="btn btn-primary mb-3" 
                    onClick={e => {
                        e.preventDefault()
                        addToCart(prodItem)
                    }}
                    >Add to cart</button>
                    </div>
                    )}
        </div>
  );
}

export default Count;