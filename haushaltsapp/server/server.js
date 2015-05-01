Meteor.methods({
	'householdValidation': function(name, secret){
		check(name, String);
    	check(secret, String);
    	try{
    		return Households.findOne({name: name, secret: secret})._id
    	}
    	catch(e){}
    	return null;
	}
})