Template.hello.helpers({
	'myHousehold': function(){
		return Households.findOne();
	}
});
