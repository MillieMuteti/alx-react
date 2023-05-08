import { React, Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import img from '../assets/close-icon.png';
import {StyleSheet, css} from 'aphrodite';

class Notifications extends Component {
    constructor(props) {
        super(props)
        this.markAsRead = this.markAsRead.bind(this)
    }
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`)
    }

    shouldComponentUpdate(nextProps) {
        return(nextProps.length > this.listNotifications.length ||
            this.props.displayDrawer != nextProps.displayDrawer)
    }

    render() {
        return (
            <Fragment>
                <div className={css(NotificationStyle.MenuItem)} onClick={this.props.handleDisplayDrawer()}>
                    Your notifications
                </div>
                {this.props.displayDrawer &&
                    <div className={css(NotificationStyle.Notification)}>
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
                            onClick={this.props.handleHideDrawer()}
                        >
                            <img style={{width: '15px'}} src={img} alt='close button' />
                        </button>
                        {this.props.listNotifications.length !== 0 ?
                            <Fragment>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {this.props.listNotifications.length === 0 ? <NotificationItem type="default" value="No new notification for now" /> : null}
                                    {this.props.listNotifications.map((val, idx) => {
                                    return <NotificationItem type={val.type} value={val.value} html={val.html} key={val.id} markAsRead={this.markAsRead} id={val.id} />;
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

const opacAnim = {
    "0%": { opacity: 0.5},
    "100%": { opacity: 1},
}

const bounceAnim = {
    "0%": { transform: 'translateY{0px}'},
    "30%": { transform: 'translateY{-5px}'},
    "60%": { transform: 'translateY{5px}'},
    "100%": { transform: 'translateY{0px}'},
}

const NotificationStyle = StyleSheet.create({
    Notification: {
        position: 'relative',
        border: '1.2px dashed red',
        padding: '.2rem .3rem',
        marginBottom: '1.5rem',
        animationName: 'testing',
        animationDuration: '4s',
        "@media(max-width: 900px)" : {
            width: '100%',
            padding: 0,
            fontSize: 20,
        },
    },
    MenuItem: {
        menuItem: {
            position: "relative",
            zIndex: 100,
            textAlign: "right",
            ":hover": {
              cursor: "pointer",
              animationName: [opacAnim, bounceAnim],
              animationDuration: "1s, 0.5s",
              animationIterationCount: "3",
            },
        },   
    },
})

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleHideDrawer: () => {},
    handleDisplayDrawer: () => {},
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
};

export default Notifications;