import React from 'react';

export default class Offset extends React.Component {
  
  render() {
      const offset = this.props.offset;

      return (
        <div>
          <h3>Update time offset: {offset}</h3>
        </div>
      );
    }
  }
