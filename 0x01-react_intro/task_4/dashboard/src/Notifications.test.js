import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('Notifications component tests', () => {
	it('renders Notification component without crashing', () => {
		const notification = shallow(<Notifications />);

		expect(notification).toBeDefined();
	});
// rendering unordered list and its components correctly
	it('renders ul', () => {
		const notification = shallow(<Notifications />);

		expect(notification.find('ul')).toBeDefined();
	});

	it('renders three list items', () => {
		const notification = shallow(<Notifications />);

		expect(notification.find('li')).toHaveLength(3);
	});

	it('renders correct text', () => {
		const notification = shallow(<Notifications />);

		expect(notification.find('p').text()).toBe(
			'Here is the list of notifications'
		);
	});
});