import React, {Component} from "react";
import {Col, Row} from 'antd';
import {Radio} from 'antd';
import {Typography} from 'antd'
import {Card} from 'antd'
import TimeAgo from 'react-timeago'
const {Title} = Typography;


class Occupant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      quietLevel: null,
      loading: false
    };
  }

  timeAgoFormatter = (e1, e2) => {
    return e1 + " " + e2;
  }

  renderStatus = (radioStyle) => {
    if (this.props.type === "currentUser") {
      var selectedValue = 0;
      for (; selectedValue < this.props.data.statuses.length; selectedValue++) {
        if (this.props.data.statuses[selectedValue].selected === 1) {
          break;
        }
      }
      return (
        <Radio.Group disabled={this.props.loading} buttonStyle="solid" value={selectedValue}
          onChange={this.props.onStatusChange}
        >
          {
            this.props.data.statuses.map((v, i) => {
              if (i == selectedValue) {
                return (
                  <div>
                    <Radio.Button value={i}
                      style={radioStyle}>

                      {v.status_name + " for "}
                      <TimeAgo date={v.selected_at * 1000} formatter={this.timeAgoFormatter} />

                    </Radio.Button>
                  </div>
                )
              }
              return (
                <div>
                  <Radio.Button value={i} style={radioStyle}>{v.status_name}</Radio.Button>
                </div>
              )
            })
          }
        </Radio.Group>
      )
    } else if (this.props.type === "otherOccupant") {

      return (
        <Radio.Group disabled={this.props.loading} buttonStyle="solid" value={1}>
          {
            <div>
              <Radio.Button value={1} style={radioStyle}>{this.props.data.status.status_name + " for "}
                <TimeAgo date={this.props.data.status.selected_at * 1000} formatter={this.timeAgoFormatter} />
              </Radio.Button>
            </div>
          }
        </Radio.Group>
      )
    }
  }


  render() {
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

    if (this.props.quietLevel === 4) {
      roomStyle = sleepStyle
    } else {
      roomStyle = normalStyle
    }
    var nickname = this.props.data != null ? this.props.data.nickname : "";

    return (
      <div>
        <Card loading={this.props.loading} style={roomStyle}>
          <Row type="flex" align="middle">
            <Col span={12}>
              <Title>{nickname}</Title>
            </Col>
            <Col span={12}>
              {this.renderStatus(radioStyle)}
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default Occupant;
