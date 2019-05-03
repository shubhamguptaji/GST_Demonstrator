import React, { Component } from "react";
import { Table, Row, Col, Preloader } from "react-materialize";

const center = {
  textAlign: "center",
  marginTop: "200px"
};

export default class ItemsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoading: true
    };
  }
  componentDidMount() {
    fetch("https://gst-demonstrator1.herokuapp.com/Products/")
      .then(res => res.json())
      .then(res => this.setState({ items: res, isLoading: false }));
  }
  render() {
    console.log(this.state);
    if (this.state.isLoading) {
      return (
        <div style={center}>
          <Preloader size="big" flashing />
        </div>
      );
    }
    return (
      <div>
        <Row>
          <Col s={0} m={0} l={2} />
          <Col s={12} m={12} l={8}>
            <h2 style={center}>Items</h2>
            <Table striped hoverable centered>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Item Price(Rs)</th>
                  <th>GST (%)</th>
                  <th>Date Added</th>
                  <th>Final Price (Rs)</th>
                </tr>
              </thead>
              <tbody>
                {this.state.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.GST_slab}</td>
                    <td>{item.timestamps.slice(0, 10)}</td>
                    <td>{item.finalPrice}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col s={0} m={0} l={2} />
        </Row>
      </div>
    );
  }
}
