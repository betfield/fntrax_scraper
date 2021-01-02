import React from 'react';
import PlayerStatsCell from './PlayerStatsCell';
import PlayerDetails from './PlayerDetails';

const HEADERS = require('../config/headers');
const CONFIG = require('../config/config');

export default class PlayerStatsRow extends React.Component {
  state = { backgroundColour: "" };
	
  componentWillUnmount() {
    if (this.updateTimer) {
      clearTimeout(this.updateTimer);
	  }
  }

  updateAndNotify = () => {
    if (this.updateTimer) return;
    this.setState({ backgroundColour: "text-warning" });
    this.updateTimer = setTimeout(() => {
      this.setState({ backgroundColour: "" });
	    this.updateTimer = null;
	  }, CONFIG.textChangeTimeout);
  }

  componentDidUpdate(prevProps) {
    if (JSON.stringify(prevProps.player.stats) !== JSON.stringify(this.props.player.stats)) {
      this.updateAndNotify();
    }
  }

  render() {
      
      const cells = [];
      let headers = [];
      const player = this.props.player;
      const playerDetails = {
        name: player.name,
        club: player.club,
        pos: player.pos,
        team: player.team
      };
      //const stats = player.stats;
      let stats = player.statsRaw;
      stats.FPts = player.stats.FPts;
      const headerType = this.props.type;

      // Set table headers based on the player type submitted to the component
      if (headerType === "OF") {
        headers = HEADERS.playerStatsHeaders;
      } else if (headerType === "GK") {
        headers = HEADERS.playerStatsHeadersGK;
      }

      // Iterate over all table header values and add respective value from player stats object
      headers.forEach((header) => {
        // If player stats object contains a value with the respective header key then set it as the cell value
        cells.push(
          <PlayerStatsCell
            data={stats[header]}
            key={header} />
        );
      });
      
      return (
        <tr>
          <PlayerDetails player={playerDetails} backgroundColour={this.state.backgroundColour}/>
          {cells}
        </tr>
      );
    }
  }


  function compare(arr1,arr2){
    arr1.forEach((val, iter) => {
      if (val !== arr2[iter]) {
        return false;
      }
    });

    return true;
  }