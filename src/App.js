import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd'
import { Col, Row } from 'antd';
import Room from './Room.js'
import axios from 'axios'
import TimeAgo from 'react-timeago'
import baseUrl from './appData'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  getData = () => {
    console.log("called")
    axios.get(baseUrl + '/init').then(res => {
      this.setState({ data: res.data })
    })
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.getData()
    }, 30000)
  }

  render() {
    console.log("render")
    console.log(this.state)
    if (this.state.data == null) {
      this.getData()
      return (
        <div className="App">
          <Room loading={true} />
          <Room loading={true} />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Room name={this.state.data[0].name} quietLevel={this.state.data[0].status} getData={this.getData} />
          <Room name={this.state.data[1].name} quietLevel={this.state.data[1].status} getData={this.getData} />
          <Row type="flex" algin="middle" style={{ marginTop: "10px", minHeight: "50px" }}>
            <Col span={12}>
              Last Updated:
          <TimeAgo date={Date.now()}></TimeAgo>
            </Col>
            <Col span={12}>
              <Button shape="round" icon="reload" onClick={this.getData}>Refresh</Button>
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default App;
