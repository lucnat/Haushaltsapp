Meteor.publish('userData', function(userID){
    return Meteor.users.find({_id: this.userId},
        {fields: {'profile': 1, 'username': 1}});
});

Meteor.publish('myHousehold', function(householdID){
	return Households.find({_id: householdID});
});

