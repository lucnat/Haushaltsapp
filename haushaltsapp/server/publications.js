
Meteor.publish('myHousehold', function(householdID){
	return Households.find({_id: householdID});
});

Meteor.publish('allUsers', function() {
	return Users.find({},  {fields: {'username': 1, 'emails': 1, 'profile': 1}});
});
