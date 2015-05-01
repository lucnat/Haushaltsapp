

Tracker.autorun(function(){
	try{
		Meteor.subscribe('userData', Meteor.user()._id);
		Meteor.subscribe('myHousehold', Meteor.user().profile.myHousehold);
	}catch(e){ }

});
