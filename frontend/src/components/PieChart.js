import React, { Component } from "react";
import { RadialChart } from "react-vis";
import { Row, Col } from "react-materialize";

const center = {
  textAlign: "center"
};

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: [],
      five: 0,
      twelve: 0,
      eighteen: 0,
      twentyEight: 0
    };
  }

  componentDidMount() {
    fetch("https://gst-demonstrator1.herokuapp.com/Products/gst")
      .then(res => res.json())
      .then(res => {
        res.map(res => {
          if (res.GST_slab === 5) {
            this.setState({ five: this.state.five + 1 });
          } else if (res.GST_slab === 12) {
            this.setState({ twelve: this.state.twelve + 1 });
          } else if (res.GST_slab === 18) {
            this.setState({ eighteen: this.state.eighteen + 1 });
          } else {
            this.setState({ twentyEight: this.state.twentyEight + 1 });
          }
        });
        this.setState({ result: res });
      });
  }

  render() {
    const data = [
      {
        angle: parseInt(this.state.five),
        label: this.state.five > 0 ? " 5% GST Slab" : ""
      },
      {
        angle: parseInt(this.state.twelve),
        label: this.state.twelve > 0 ? "12% GST Slab" : ""
      },
      {
        angle: parseInt(this.state.eighteen),
        label: this.state.eighteen > 0 ? "18% GST Slab " : ""
      },
      {
        angle: parseInt(this.state.twentyEight),
        label: this.state.twentyEight > 0 ? "28% GST Slab" : ""
      }
    ];

    return (
      <div>
        <Row>
          <Col s={0} m={4} l={4} />
          <Col s={12} m={4} l={4} style={center}>
            <h2 style={center}>Pie Chart Representing various GST Slabs</h2>
            <RadialChart data={data} width={300} height={300} showLabels={true} style={center} />
          </Col>
          <Col s={0} m={4} l={4} />
        </Row>
      </div>
    );
  }
}
