Template.profile.events({
	'click button': function(){
		Meteor.logout(function(){
			Router.go('/');
		});
	}
});