import React, {Component} from 'react';
import './Main.css';
import {Button} from 'antd'
import {Col, Row} from 'antd';
import Occupant from './Room.js'
import axios from 'axios'
import TimeAgo from 'react-timeago'
import baseUrl from './appData'

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    }
  }

  getData = async () => {
    let res = await axios.get(baseUrl + '/status?userid=' + 'demo@demo.com'
      + '&roomid=' + 'ed91a75f-68e0-4cc2-b453-1bb61571fc11'
    );
    if (res.status == 200) {
      this.setState({data: res.data, loading: false})
    }
  }

  onStatusChange = async (e) => {
    console.log(e.target.value)
    let res = await axios.get(baseUrl + "/update?userid=" + "demo@demo.com"
      + '&roomid=' + 'ed91a75f-68e0-4cc2-b453-1bb61571fc11' + '&statusname='
      + this.state.data.current_user.statuses[e.target.value].status_name)
    if (res.status == 200) {
      await this.getData();
    }
    return;
  }

  async componentDidMount() {
    await this.getData();
    this.interval = setInterval(async () => {
      await this.getData()
    }, 30000);
  }



  renderOccupants = () => {
    let occupantElements = [];
    if (this.state.data != null) {
      let currentUserData = this.state.data.current_user;
      occupantElements.push(
        <Occupant data={currentUserData} type={"currentUser"} onStatusChange={this.onStatusChange} loading={false}/>
      )
      let otherOccupantsData = this.state.data.other_occupants;
      otherOccupantsData.forEach((v) => {
         occupantElements.push(
          <Occupant data={v} type={"otherOccupant"} loading={false}/>
        );
      });
    }
    return occupantElements;
  }

  render() {
    console.log("render main")
    console.log(this.state)
    if (this.state.data == null) {
      return (
        <div className="Main">
          <Occupant loading={this.state.loading} />
        </div>
      );
    } else {
      return (
        <div className="Main">
          {this.renderOccupants()}
          <Row type="flex" align="middle" style={{marginTop: "10px", minHeight: "50px"}}>
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

export default Main;
