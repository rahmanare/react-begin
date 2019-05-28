//rcc to make a react class component 

import React, { Component } from 'react';
import Notification from "./Notification"

export default class Confirmation extends Component {
  state = {
    notification: this.props.notification,
    showControl: true
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.notification !== prevProps.notification) {
      this.state({
        notification: this.props.notification
      })
    }
  }

  onClick = () => {
    this.setState({
      showControl: false
    })
  }

  render() {
    const { notification, showControl } = this.state;
    return (
      <div>
          {showControl ? (
            <Notification {...notification}>
              <div class="btn btn-primary" 
                onClick={this.onClick}>Sure</div>
              <div class="btn btn-danger" 
                onClick={this.onClick}>No Thanks</div>
            </Notification>
          ) : null}
        </div>
    )
  }
}