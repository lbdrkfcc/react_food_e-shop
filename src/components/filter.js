import React, {/*useState, useEffect,*/ useContext} from 'react'
import Context from '../context'

function Filter() {

    const {categories, filterProducts} = useContext(Context)

  return (
        <div className="col-md-2 py-3">
          <div className="list-group list-group-flush">
          <a href="#" 
          className="list-group-item list-group-item-action bg-light"
          onClick={e=>{
            e.preventDefault()
            filterProducts('all')
          }}
          >Pokazatj wse</a>
          {categories.length >= 0 ? (
            categories.map((category, index) => {
                return <a href="#" 
                className="list-group-item list-group-item-action" 
                key={index}
                onClick={e=>{
                    e.preventDefault()
                    filterProducts(category)
                }}
                >{category.charAt(0).toUpperCase() + category.slice(1)}</a>
              })
          ) : (
              <div>Aside</div>
          )
          }
          </div>
        </div>
  );
}

export default Filter;