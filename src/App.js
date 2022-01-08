import React, { Fragment } from 'react'
import Cart from './Components/Cart';
import Dashboard from './Components/Dashboard';

export default function App() {
  return (
    <Fragment>
      <div divclassName="container mx-auto flex flex-row">
        <div className="w-3/4">
          <Dashboard />
        </div>
        <div className="w-1/4">
          <Cart />
        </div>
      </div>
    </Fragment>
  )
}
