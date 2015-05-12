Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', {name: 'shoppingList'});

Router.route('/profile', {name: 'profile'});
Router.route('/household', {name: 'household'});

