import React from 'react';

export default class Time extends React.Component {
  
  render() {
      const time = this.props.time;
      const local = new Date();

      return (
        <div>
          <h3>Current server time: {time}</h3>
          <h3>Current local time: {local.toTimeString()}</h3>
        </div>
      );
    }
  }
