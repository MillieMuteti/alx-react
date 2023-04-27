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
  constructor(props) {
    super(props)
    this.handleBtn = this.handleBtn.bind(this)
  }

  
  handleBtn(h) {
    if (h.ctrlKey && h.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

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

  

  componentDidMount() {
    document.addEventListener("keydown", this.handleBtn)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleBtn)
  }

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
  logOut: () => {
    return;
  },
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;