import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Celsius from "./Celsius";
import Fahrenheit from "./Fahrenheit";
import Kelvin from "./Kelvin";
// dev.to
// hashnode
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
    };
  }

  sicaklikArttir = () => {
    this.setState({ celsius: Number(this.state.celsius + 1) });
  };

  sicaklikAzalt = () => {
    this.setState({ celsius: Number(this.state.celsius - 1) });
  };

  sifirla = () => {
    this.setState({ celsius: 0 });
  };

  render() {
    return (
      <Container>
        <Row>
          <h1>Hava Nasıl</h1>
          <h4>Şu an sıcaklık: {this.state.celsius} derece.</h4>
          <Col xs="4">
            <Button
              onClick={() => {
                this.sicaklikArttir();
              }}
            >
              Sıcaklık Arttır
            </Button>
          </Col>

          <Col xs="4">
            <Button
              onClick={() => {
                this.sicaklikAzalt();
              }}
            >
              Sıcaklık Azalt
            </Button>
          </Col>

          <Col xs="4">
            <Button
              onClick={() => {
                this.sifirla();
              }}
            >
              Sıfırla
            </Button>
          </Col>
        </Row>

        <Row>
          <h5>3 Birimde Sıcaklık Ölçümü</h5>
          <Col sm="4">
            <Celsius celsius={this.state.celsius} />
          </Col>
          <Col sm="4">
            <Fahrenheit celsius={this.state.celsius} />
          </Col>
          <Col sm="4">
            <Kelvin celsius={this.state.celsius} />
          </Col>
        </Row>
      </Container>
    );
  }
}
