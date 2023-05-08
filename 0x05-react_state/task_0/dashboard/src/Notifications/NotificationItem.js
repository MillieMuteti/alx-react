import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, css} from 'aphrodite'

class NotificationItem extends React.Component{
  constructor(props) {
    super(props);
    this.selected_style = this.props.type === 'default' ?  ItemStyles.default : ItemStyles.urgent;
  }
    render() {
        const {type, value, html, markAsRead, id} = this.props
        return (
         <>
            {type && value ? (
              <li onClick={() => markAsRead(id)} className={css(this.selected_style)}data-notification-type={type}>
                {value}
              </li>
            ) : null}
            {html ? <li onClick={() => markAsRead(id)} className={css(this.selected_style)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
          </>
        )
    }
}

const ItemStyles = StyleSheet.create({
  urgent: {
    color: 'red',
    "@media(max-width: 900px)" : {
      width: '100%',
      borderBottom: 'solid 2px black',
      fontSize: '20px',
      padding: '10px 8px',
  }
  },
  default: {
    color: 'blue',
  }


})

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