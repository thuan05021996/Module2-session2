import React, { Component } from 'react'

export default class Baitap3 extends Component {
    
  render() {
    const d = new Date()
     
    //
    return (
      <div>
        <p>Xin chào các bạn </p>
        <p>Bây giờ là : {d.toLocaleTimeString()}</p>
      </div>
    )
  }
}
