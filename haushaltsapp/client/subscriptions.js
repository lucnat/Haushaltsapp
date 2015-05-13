

Tracker.autorun(function(){
	try{
		Meteor.subscribe('myHousehold', Meteor.user().profile.myHousehold);
		Meteor.subscribe('allUsers');
	}catch(e){ }
});
