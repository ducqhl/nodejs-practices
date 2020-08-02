const BookStore = require('book-stores');
const utils = require('utils');

const hobStore = new BookStore();
hobStore.importBooks(['The Clean Coder', 'Clean Code']);
hobStore.sell('Clean Code');
utils.printReport(hobStore);
