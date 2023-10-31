import React, { Component } from 'react'

export default class Cart3 extends Component {
  render() {
    return (
      <><div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img3.webp"
                className="img-fluid rounded-3"
                alt="Shopping item"
                style={{ width: 65 }}
              />
            </div>
            <div className="ms-3">
              <h5>Canon EOS M50</h5>
              <p className="small mb-0">Onyx Black</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: 50 }}>
              <h5 className="fw-normal mb-0">1</h5>
            </div>
            <div style={{ width: 80 }}>
              <h5 className="mb-0">$1199</h5>
            </div>
            <a href="#!" style={{ color: "#cecece" }}>
              <i className="fas fa-trash-alt" />
            </a>
          </div>
        </div>
      </div>
    </div></>
    )
  }
}
