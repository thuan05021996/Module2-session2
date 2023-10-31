import React, { Component } from 'react'
import Header from './Header'
import Main_menu from './Main_menu'
import Listproduct from './Listproduct'
import Footer from './Footer'

export default class Baitap6 extends Component {
  render() {
    return (
      <>
         {/* Header  */}
        <Header></Header>
  
  {/* End header area */}
  {/* End site branding area */}
  <Main_menu></Main_menu>
 
  {/* End mainmenu area */}
  <div className="product-big-title-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="product-bit-title text-center">
            <h2>Shop</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* List product */}
  <Listproduct></Listproduct>
  
  {/* Footer area */}
   <Footer></Footer>
</>
    )
  }
}
