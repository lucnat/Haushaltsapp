

Template.household.helpers({
	'household': function(){
		return Households.findOne();
	},

	'members': function(){
		try{
			var householdID = Households.findOne()._id;
			return Users.find({ 'profile.myHousehold': householdID}).fetch();
		} 
		catch(e){};
	}
});
