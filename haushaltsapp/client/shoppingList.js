Template.shoppingList.helpers({
	'household': function(){
		/*
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
		*/
		return household = Households.findOne();
	}
})

Template.shoppingList.events({
	'submit form, click #addButon': function(event){
		event.preventDefault();
		if($('#newItem').val().length > 1){
			var produkt = {
				name: $('#newItem').val(),
				amount: '',
				checked: false,
				added: new Date(),
			}
			addToShoppingList(produkt);
			$('#newItem').val('');
		}
	}
});


Template.listItem.events({
	'click #checkbox': function(event, template){
		var checked = event.target.checked;
		console.log(this);
		var list = Households.findOne({ _id: Meteor.user().profile.myHousehold }).shoppingList;
		for(var i=0; i<list.length; i++){
			if(list[i].name == this.name)
				list[i].checked = checked
		}
		Households.update({_id: Meteor.user().profile.myHousehold}, {"$set" : {"shoppingList" : list}});
	}
});