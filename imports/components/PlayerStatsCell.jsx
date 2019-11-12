import React from 'react';

export default class PlayerRow extends React.Component {
  
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
      }, 5000);

    }
  }

  render() {
      const data = this.props.data;
      
      return (
        <td className="text-center"><h4 className={this.state.textClass} >{data}</h4></td>
      );
    }
  }
