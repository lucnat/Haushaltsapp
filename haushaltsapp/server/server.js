Meteor.methods({
	'householdValidation': function(name, secret){
		check(name, String);
    	check(secret, String);
    	try{
    		return Households.findOne({name: name, secret: secret})._id
    	}
    	catch(e){};
    	return null;
	},

	'userInfos': function(userIDs){
		// erwartet Array von userIDs und gibt public info her über diese accounts (name, email)
		try{
			var userInfos = Users.find({_id: {$in: userIDs}}).fetch();
			var projection = [];
			userInfos.forEach(function(user){
				projection.push({
					username: user.username,
					email: 		user.emails[0].address,
				});
			});
			return projection;
		} catch(e) {};
		return null;
	}
});