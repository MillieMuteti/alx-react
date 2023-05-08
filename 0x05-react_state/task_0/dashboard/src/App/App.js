import { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import { getLatestNotification } from '../utils/utils';
import React from 'react';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'
import {StyleSheet, css} from "aphrodite"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.state = {
      displayDrawer: false
    }
    this.handleBtn = this.handleBtn.bind(this)
    this.handledisplayDrawer = this.handledisplayDrawer.bind(this)
    this.handleHideDrawer = this.handleHideDrawer.bind(this)

    this.listCourses = [
      {id: 1, name: 'ES6', credit: 60},
      {id: 2, name: 'Webpack', credit: 20},
      {id: 3, name: 'React', credit: 40},
    ];
  
    this.listNotifications = [
      {id: 1, value: "New course available", type: "default"},
      {id: 2, value: "New resume available", type: "urgent"},
      {id: 3, html: getLatestNotification(), type: "urgent"},
    ];
  }


  handledisplayDrawer() {
    this.setState({
      displayDrawer: true
    })
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    })
  }
  
  handleBtn(h) {
    if (h.ctrlKey && h.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  }

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
      <div className={css(bodyStyles.App)}>
        <Header />
        {this.props.isLoggedIn ?
        <BodySectionWithMarginBottom title="Course List">
          <CourseList listCourses={this.listCourses} />
        </BodySectionWithMarginBottom>  
        : (
        <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
        </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>In today's school news, the principal announced that the annual talent show will take place next month and encouraged students to sign up for auditions. The school's robotics team also brought home first place in a regional competition, and their victory was celebrated with a pizza party. In other news, the art club is hosting a fundraiser to raise money for new supplies, and the drama club is putting on a production of Romeo and Juliet this weekend. Finally, the school's debate team is preparing for an upcoming tournament and has been practicing vigorously after school.</p>
        </BodySection>
        <Footer />
      </div>
      </Fragment>
    );
  }
}

const bodyStyles= StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh',
  }
})

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