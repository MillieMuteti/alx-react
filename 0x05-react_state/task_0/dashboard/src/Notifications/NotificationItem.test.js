import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component Tests', () => {
    let notificationItem;

    it('NotificationItem renders without crashing', () => {
        notificationItem = shallow(<NotificationItem />);
        expect(notificationItem).toBeDefined();
    });

    it('Passing type and value props to NotificationItem works as expected', () => {
        notificationItem = shallow(
            <NotificationItem type='default' value='test' />
        );
        expect(notificationItem.find('li').text()).toBe('test');
        expect(notificationItem.find('li').props('data-notification-type')).toBe('default')
    })

    it('Passing a dummy html prop renders the correct html', () => {
        notificationItem = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
        expect(notificationItem.find('li').props().dangerouslySetInnerHTML.__html).toBe('test');
    })
});

describe("onclick event behaves as it should", () => {
    it("should call console.log", () => {
      const wrapper = shallow(<NotificationItem />);
      const spy = jest.fn();
  
      wrapper.setProps({ value: "test item", markAsRead: spy, id: 1 });
      wrapper.find("li").props().onClick();
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith(1);
      spy.mockRestore();
    });
  });