import React, { Component } from 'react'

export default class Baitap1 extends Component {
  render() {
    let arr = ["HTML", "java","javascrip",]
    return (
      <div>
        <p>Danh sách những khóa học</p>
        <ul>
            {arr.map((item,index)=>(
                <li key={index}>{item}</li>
                
            ))}
        </ul>
        
      </div>
    )
  }
}
