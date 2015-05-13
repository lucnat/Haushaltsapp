Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
});

Router.route('/', function(){
	if(!Meteor.user() && !Meteor.loggingIn()){
		Router.go('/login');
	}
	else{
		if(Households.findOne()){
			Router.go('/shoppingList');
		} else{
			Router.go('/firstLogin')
		}
	}
});

Router.route('/shoppingList', {name: 'shoppingList'});
Router.route('/login', {name: 'login'});
Router.route('firstlogin', {name: 'firstLogin'});
Router.route('/profile', {name: 'profile'});
Router.route('/household', {name: 'household'});

