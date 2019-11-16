import React from 'react';

export default class PlayerDetails extends React.Component {

    render() {

        const player = this.props.player;

        return (
            <React.Fragment>
                <td className="text-center"><h4>{player.pos}</h4></td>
                <td>
                    <div>
                        {player.name}
                    </div>
                    <div>
                        <h6 className="text-muted"><small>{player.team.name}</small></h6>
                    </div>
                </td>
            </React.Fragment>
        )
    }
}