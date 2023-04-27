import { Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import React from 'react';

class App extends React.Component {
  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  listNotifications = [
    {id: 1, value: "New course available", type: "default"},
    {id: 2, value: "New resume available", type: "urgent"},
    {id: 3, html: getLatestNotification(), type: "urgent"},
  ];

  render() {
    return (
      <Fragment>
            <Notifications listNotifications={this.listNotifications} />
      <div className="App">
        <Header />
        {this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
        <Footer />
      </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;