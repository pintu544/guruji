import React from 'react'

function NavBar() {
    return (
        <div className='row bg-secondary pt-1 pb-2 fixed'>
          <div className='col-4'><h2 className='mt-3 text-align text-light'><i className="fa-solid fa-address-book"></i>&nbsp; Todo App</h2></div>
          <div className='col-6'></div>
        </div>
      )
}

export default NavBar