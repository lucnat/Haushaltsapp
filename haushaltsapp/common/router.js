Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'shoppingList'});

Router.route('/account', {name: 'account'});

