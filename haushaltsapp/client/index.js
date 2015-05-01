Template._createModal.events({
	'submit form': function(event){
		event.preventDefault();
		var name = $('#name').val();
		var secret = $('#secret').val();
		if(name.length < 4 || secret.length < 4){
			alert('use more than 4 characters for both name and secret.');
		} else {
			createHousehold(name, secret);
			$('#name').val('');
			$('#secret').val('');
			alert('Household with name '+ name + 'and secret '+ secret + 'has been created.');
			IonModal.close();
		}
	}
});

Template._enterModal.events({
	'submit form': function(event){
		event.preventDefault();
		var name = $('#name').val();
		var secret = $('#secret').val();
		if(name.length < 4 || secret.length < 4){
			alert('use more than 4 characters for both name and secret.');
		} else {
			Meteor.call('householdValidation', name, secret, function(error, result){
				if(result){
					alert('success');
					IonModal.close();
					enterHousehold(result);
				}
				else{
					alert('not found.');
				}
			});
		}
	}
});

createHousehold = function(name, secret){
	// erstellt neuen Haushalt mit name und secret und fügt momentan aktuellen Benutzer zu Members. 
	// es wird danach automatisch dem Haushalt beigetreten.
	var haushalt = {
		name: name,
		secret: secret,
		shoppingList: [
		],
		members: []
	}
	var householdID = Households.insert(haushalt);
	console.log(householdID);
	enterHousehold(householdID);
}

enterHousehold = function(householdID){
	// aktueller user tritt dem Haushalt mit der ID householdID bei
	Meteor.users.update({_id: Meteor.user()._id}, { $set: {profile: {myHousehold: householdID} } });
	Households.update({_id: Meteor.user().profile.myHousehold }, { $push: {members: Meteor.user()._id }});
}

addToShoppingList = function(produkt){
	// fuegt Produkt zu Shoppingliste hinzu. Kann erst aufgerufen werden, wenn Benutzer in einem Haushalt ist.
	Households.update({
			_id: Meteor.user().profile.myHousehold
		}, {
		$push: { 
			shoppingList: produkt
		}
	});
}

