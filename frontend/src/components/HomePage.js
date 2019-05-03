import React, { Component } from "react";
import { Grid, Form, Button, Message } from "semantic-ui-react";

const center = {
  textAlign: "center"
};

const inputBox = { height: "16px" };

const error = {
  color: "red"
};

const buttonStyle = {
  width: "100%"
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      NameError: false,
      PriceError: false,
      success: false,
      fail: false,
      finalPrice: 0
    };
  }

  onSubmit(event) {
    const name = event.target[0].value;
    const price = event.target[1].value;
    const gst = event.target[2].value;

    if (name === "" || name === undefined) {
      this.setState({ NameError: true });
    }
    if (price === "" || price === undefined) {
      this.setState({ PriceError: true });
    }
    if (name === "" || price === "" || name === undefined || price === undefined) {
      return;
    }
    this.setState({ NameError: false, PriceError: false });
    const data = {
      name,
      gst,
      price
    };

    fetch(`http://localhost:3001/Products/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.status === 200) {
        this.setState({ success: true });
      } else {
        this.setState({ fail: true });
      }
    });
  }

  render() {
    return (
      <div>
        <Grid columns={2} container>
          <Grid.Row>
            <Grid.Column width={16} style={center}>
              <h1>GST Demonstrator</h1>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={5} />
            <Grid.Column width={6}>
              <Form onSubmit={this.onSubmit}>
                <Form.Field>
                  <label>Item Name:</label>
                  <input type="text" placeholder="Enter name of the Item" style={inputBox} />
                </Form.Field>
                {this.state.NameError === true ? (
                  <div style={center}>
                    <div style={error}>!Please Enter the name of Item</div>
                  </div>
                ) : (
                  <div />
                )}
                <Form.Field>
                  <label>Price of Item:</label>
                  <input
                    placeholder="Enter the price of Item"
                    type="number"
                    step="0.01"
                    min="0"
                    style={inputBox}
                  />
                </Form.Field>
                {this.state.PriceError === true ? (
                  <div style={center}>
                    <div style={error}>!Please Enter the price of Item</div>
                  </div>
                ) : (
                  <div />
                )}
                <Form.Field>
                  <label>GST :</label>
                  <select>
                    <option value="5" defaultValue>
                      5%
                    </option>
                    <option value="12">12%</option>
                    <option value="18">18%</option>
                    <option value="28">28%</option>
                  </select>
                </Form.Field>
                <Form.Field>
                  <Button style={buttonStyle}>Calculate Final Price & Add Item</Button>
                </Form.Field>
              </Form>
              {this.state.success ? (
                <Message
                  color="green"
                  header="Item Succesfullly added"
                  content={"Check the Full list for more details!"}
                />
              ) : (
                <div />
              )}
              {this.state.fail ? (
                <Message
                  color="red"
                  header="Error Calculating GST"
                  content={
                    "There was an error calculating GST.\n Kindly check your Internet connection"
                  }
                />
              ) : (
                <div />
              )}
            </Grid.Column>
            <Grid.Column width={5} />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
