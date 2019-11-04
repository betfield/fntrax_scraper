import React from 'react';

export default class PlayerRow extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      backgr: "green"
    };
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.player !== prevProps.player) {
      
      this.setState({
        backgr: "red"
      });

      let updateTimer = setTimeout(() => {
        console.log("updated");

        this.setState({
          backgr: "green"
        });
        
        updateTimer = null;
      }, 3000);

    }
  }

  render() {
      const player = this.props.player;
      
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.team.name}</td>
          <td>{player.pos}</td>
          <td>{player.stats.G}</td>
          <td>{player.stats.KP}</td>
          <td>{player.stats.AT}</td>
          <td>{player.stats.SOT}</td>
          <td>{player.stats.TkW}</td>
          <td>{player.stats.DIS}</td>
          <td>{player.stats.YC}</td>
          <td>{player.stats.ACNC}</td>
          <td>{player.stats.Int}</td>
          <td>{player.stats.CLR}</td>
          <td>{player.stats.CoS}</td>
          <td>{player.stats.AER}</td>
          <td>{player.stats.GAO}</td>
          <td>{player.stats.CS}</td>
          <td bgcolor={this.state.backgr}>{player.stats.FPts}</td>
        </tr>
      );
    }
  }
