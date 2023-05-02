import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component Tests', () => {
    let app;

    beforeEach(() => {
        app = shallow(<App />);
    });

    it('Renders without crashing', () => {
        expect(app).toBeDefined();
    });

    it('Contains Notifications component', () => {
        expect(app.find('Notifications')).toHaveLength(1);
    });

    it('Contains Header component', () => {
        expect(app.find('Header')).toHaveLength(1);
    });

    it('Contains Login component', () => {
        expect(app.find('Login')).toHaveLength(1);
    });

    it('Does not contain CourseList component', () => {
        expect(app.find('CourseList')).not.toBeDefined();
    });

    it('Contains Footer component', () => {
        expect(app.find('Footer')).toHaveLength(1);
    });
});

describe('Test <App isLoggedIn={true} />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App isLoggedIn={true} />);
    });

    it('Tests that Login component is not included', () => {
        expect(wrapper.find('Login')).not.toBeDefined();
    });

    it('Tests that CourseList component is included', () => {
        expect(wrapper.find('CourseList')).toBeDefined();
    });
});

describe("When ctrl + h is pressed", () => {
    it("calls logOut function", () => {
      const test = jest.fn();
      const wrapper = mount(<App logOut={test} />);
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(test).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });
  
    document.alert = jest.fn();
    it("checks that alert function is called", () => {
      const wrapper = mount(<App />);
      const win = jest.spyOn(window, "alert");
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(win).toHaveBeenCalled();
      win.mockRestore();
      wrapper.unmount();
    });
  
    it('checks that the alert is "Logging you out"', () => {
      const wrapper = mount(<App />);
      const win = jest.spyOn(window, "alert");
      const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
      document.dispatchEvent(event);
  
      expect(win).toHaveBeenCalledWith("Logging you out");
      jest.restoreAllMocks();
      wrapper.unmount();
    });
    document.alert.mockClear();
  });