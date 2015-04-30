Template.mainContainer.helpers({
	'loggedIn': function(){
		return !!Meteor.user();
	}
});

Template.mainContainer.events({
	'click button': function(event, template){
		$('#myButton')
	}
});
