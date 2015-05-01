Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});


Template.shoppingList.helpers({
	'household': function(){
		var household = [];
		var sortedList = [];
		try{
			console.log('sorting...');
			household = Households.findOne();
			var unsortedList = household.shoppingList;
			for(var i=0; i<unsortedList.length; i++){
				if(!unsortedList[i].checked)
					sortedList.push(unsortedList[i]);
			}
			for(var i=0; i<unsortedList.length; i++){
				if(unsortedList[i].checked){
					sortedList.push(unsortedList[i]);
				}
			}
			household.shoppingList = sortedList;
		} catch(e) {}
		return household;
	}
})

Template.shoppingList.events({
	'click #add': function(){
		var produkt = {
			name: $('#newItem').val(),
			amount: '',
			checked: false,
			added: new Date(),
		}
		addToShoppingList(produkt);
		IonPopup.alert({
			title: 'Success',
			template: 'Added ',
		});
		$('#newItem').val('');
	}
});

Template.listItem.events({

});

createHousehold = function(){
	var haushalt = {
		name: 'Geile 2. WG',
		secret: 'cervelat',
		shoppingList: [
		],
		members: [ Meteor.user()._id ]
	}
	var householdID = Households.insert(haushalt);
	console.log(householdID);
	enterHousehold(householdID);
}

enterHousehold = function(householdID){

	Meteor.users.update({_id:Meteor.user()._id}, { $set: {profile: {myHousehold: householdID} } });

}

addToShoppingList = function(produkt){
	Households.update({
			_id: Meteor.user().profile.myHousehold
		}, {
		$push: { 
			shoppingList: produkt
		}
	});
}

