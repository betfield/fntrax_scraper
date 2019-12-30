import React from 'react';
import NotificationAlert from 'react-notification-alert';
import { getEventMessage, getUpdates } from '../src/events';

export default class Event extends React.Component {
    
    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.home) !== JSON.stringify(this.props.home)) {

            let prev = prevProps.home;
            let curr = this.props.home;

            let updates = getUpdates(curr, prev);

            updates.forEach( e => {
                let options = getEventMessage(e.update);
                options.place = "bl";
                options.player = e.player;

                if (options.type !== undefined) {
                    this.notify(options);
                }
            });
                        
        }

        if (JSON.stringify(prevProps.away) !== JSON.stringify(this.props.away)) {
            let prev = prevProps.away;
            let curr = this.props.away;

            let updates = getUpdates(curr, prev);

            updates.forEach( e => {
                let options = getEventMessage(e.update);
                options.place = "br";
                options.player = e.player;

                if (options.type !== undefined) {
                    this.notify(options);
                }
            });
        }
    }

    notify = params => {

        let options = {
            message: (
                <div>
                    <div>
                        <h3>{params.message} {params.player}</h3>
                    </div>
                </div>
            ),
            closeButton: false,
            autoDismiss: 10,
            place: params.place,
            type: params.type,
            icon: params.icon
        }
        
        this.refs.notificationAlert.notificationAlert(options);
    };

    render() {
        return (
            <div className="react-notification-alert-container">
                <NotificationAlert ref="notificationAlert" />
            </div>
        );
    }
}

