import React, { Component } from "react";
import { Col, Row } from 'antd';
import { Radio } from 'antd';
import { Typography } from 'antd'
import { Card } from 'antd'
import axios from "axios";
import baseUrl from './appData'

const { Title } = Typography;


class Room extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      quietLevel: null,
      loading: false
    };
  }


  render() {
    console.log("1234");
    console.log(process.env);
    const radioStyle = {
      margin: "15px",
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    var roomStyle
    const sleepStyle = {
      backgroundColor: "rgb(46, 64, 89)",
    }
    const normalStyle = {}
    console.log(this.props.name);
    console.log(this.props.quietLevel);

    if (this.props.quietLevel === 4) {
      roomStyle = sleepStyle
    } else {
      roomStyle = normalStyle
    }

    return (
      <div>
        <Card loading={this.props.loading} style={roomStyle}>
          <Row type="flex" align="middle">
            <Col span={12}>
              <Title>{this.props.name}</Title>
            </Col>
            <Col span={12}>
              <Radio.Group disabled={this.state.loading} buttonStyle="solid" value={String(this.props.quietLevel)}
                onChange={(e) => {
                  this.setState({ loading: true });
                  axios.get(baseUrl + '/update?name='
                    + this.props.name
                    + '&status='
                    + e.target.value)
                    .then((res) => { this.props.getData() }).then(this.setState({ loading: false }));
                }}
              >
                <div>
                  <Radio.Button value="1" style={radioStyle}>Away</Radio.Button>
                </div>
                <div>
                  <Radio.Button value="2" style={radioStyle}>Working</Radio.Button>
                </div>
                <div>
                  <Radio.Button value="3" style={radioStyle}>Chilling</Radio.Button>
                </div>
                <div>
                  <Radio.Button value="4" style={radioStyle}>Sleeping</Radio.Button>
                </div>
              </Radio.Group>
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Room