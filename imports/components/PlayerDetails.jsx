import React from 'react';

export default class PlayerDetails extends React.Component {

    render() {

        const player = this.props.player;

        return (
            <React.Fragment>
                <td className={this.props.textClass}>{player.name}</td>
                <td>{player.club}</td>
                <td>{player.pos}</td>
                <td>{player.team.name}</td>
            </React.Fragment>
        )
    }
}