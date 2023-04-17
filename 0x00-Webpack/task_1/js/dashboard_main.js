import $ from 'jquery';
import debounce from 'lodash/debounce';

let count = 0;
const updateCounter = debounce(() => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}, 300);

$(document).ready(() => {
    $('<p>', {text: 'Holberton Dashboard'}).appendTo('body');
    $('<p>', {text: 'Dashboard data for the students'}).appendTo('body');
    $('<button>', {text: 'Click here to get started'}).appendTo('body').click(updateCounter);
    $('<p>', {id: 'count'}).appendTo('body');
    $('<p>', {text: 'Copyright - Holberton School'}).appendTo('body');
});
