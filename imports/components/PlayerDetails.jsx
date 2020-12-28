import React from 'react';

export default class PlayerDetails extends React.Component {

    render() {

        const player = this.props.player;

        return (
            <React.Fragment>
                <td className="text-center"><span>{player.pos}</span></td>
                <td>
                    <div className={this.props.backgroundColour}>
                        <h4>{player.name}</h4>
                    </div>
                    {/*<div>
                        <h6 className="text-muted"><small>{player.team.name}</small></h6>
                    </div>*/}
                </td>
            </React.Fragment>
        )
    }
}