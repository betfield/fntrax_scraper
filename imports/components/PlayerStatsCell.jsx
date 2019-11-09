import React from 'react';

export default class PlayerRow extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      backgr: "white"
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.data !== prevProps.data) {
      
      this.setState({
        backgr: "yellow"
      });

      let updateTimer = setTimeout(() => {
        console.log("updated");

        this.setState({
          backgr: "white"
        });
        
        updateTimer = null;
      }, 5000);

    }
  }

  render() {
      const data = this.props.data;
      
      return (
        <td bgcolor={this.state.backgr}>{data}</td>
      );
    }
  }
