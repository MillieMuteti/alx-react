import { React, Fragment } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import img from '../assets/close-icon.png';

class Notifications extends React.Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }
    render() {
        return (
            <Fragment>
                <div className='menuItem'>
                    Your notifications
                </div>
                {this.props.displayDrawer &&
                    <div className='Notifications'>
                        <button
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                cursor: 'pointer',
                                border: 'none',
                                backgroundColor: 'transparent',
                            }}
                            aria-label='Close'
                            onClick={() => console.log('Close button has been clicked')}
                        >
                            <img src={img} alt='close button' />
                        </button>
                        {this.props.listNotifications.length !== 0 ?
                            <Fragment>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {this.props.listNotifications.map((val) => {
                                        return <NotificationItem
                                            key={val.id}
                                            type={val.type}
                                            value={val.value}
                                            html={val.html}
                                        />
                                    })}
                                </ul>
                            </Fragment> :
                            <ul>
                                <NotificationItem value="No new notification for now" />
                            </ul>
                        }
    
                    </div>
                }
            </Fragment>
        )
    }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;