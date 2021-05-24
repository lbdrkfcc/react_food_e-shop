import React, {useState, useContext} from 'react'
import Context from '../context'

function CountInput({prdItem}) {

  const {addToCart, removeFromCart} = useContext(Context)

  return (
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button 
            className="btn btn-secondary" 
            type="button"
            onClick={e => {
                e.preventDefault()
                removeFromCart(prdItem.id)
            }}
            >-</button>
        </div>
        <input type="text" 
        className="form-control text-center" 
        placeholder="--" 
        value={prdItem.incart || 0} 
        readOnly
        />
        <div className="input-group-append">
            <button 
            className="btn btn-primary" 
            type="button" 
            onClick={e => {
                e.preventDefault()
                addToCart(prdItem)
            }}
            >+</button>
        </div>
    </div>
  );
}

export default CountInput;