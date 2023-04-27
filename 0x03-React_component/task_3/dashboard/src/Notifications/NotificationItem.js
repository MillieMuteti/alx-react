import PropTypes from 'prop-types';
import React from 'react';

class NotificationItem extends React.Component{
    render() {
        const {type, value, html, markAsRead, id} = this.props
        return (
         <>
            {type && value ? (
              <li onClick={() => markAsRead(id)} data-notification-type={type}>
                {value}
              </li>
            ) : null}
            {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
          </>
        )
    }
}

NotificationItem.propTypes = {
    html: PropTypes.shape({__html: PropTypes.string}),
    type: PropTypes.string,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number,
}

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => {
      console.log("empty func");
    },
    id: 0,
  };

export default NotificationItem;