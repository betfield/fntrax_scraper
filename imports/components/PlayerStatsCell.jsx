import React from 'react';

const CONFIG = require('../config/config');

export default class PlayerStatsCell extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      textClass: ""
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      
      this.setState({
        textClass: "text-warning"
      });

      let updateTimer = setTimeout(() => {

        this.setState({
          textClass: ""
        });
        
        updateTimer = null;
      }, CONFIG.textChangeTimeout);

    }
  }

  render() {
      const data = this.props.data;
      
      return (
        <td className="text-center"><h3 className={this.state.textClass} >{data}</h3></td>
      );
    }
  }
