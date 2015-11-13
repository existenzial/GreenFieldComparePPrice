// Defines module for app. If there are dependencies, insert into array
var app = angular.module("froogie", []);

// Search filter, to be used with returned Google CS API request results

app.filter('searchFor', function(){

/*	 Filter must return a function. The first parameter is unfiltered data, and the second is an argument that may be passed with a colon (searchFor:searchString)*/

	return function(arr, searchString){
        //if no string in search box, return unfiltered data(arr)
		if(!searchString){
			return arr;
		}

		var results = [];

		searchString = searchString.toLowerCase(); //aesthetic enhancement for search box

		// forEach to loop through the array of unfiltered data, taking in each item
		angular.forEach(arr, function(item){
            //if the title of the item matches the searchString, push it to the results array
			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				results.push(item);
			}
		});
		return results;
	};

});

// The controller

function InstantSearchController($scope){

	//Data models below. Requested via Google CS API. Hardcoded Test Example included. 

	$scope.items = [
		{
			url: 'http://google.com',
			title: 'Default Google Test',
			image: 'http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg'
		}
	];

}