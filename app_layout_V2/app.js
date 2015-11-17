var app = angular.module("booted", []);

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
		angular.forEach(arr, function(bootcamp){
            //if the title of the item matches the searchString, push it to the results array
			if(bootcamp.title.toLowerCase().indexOf(searchString) !== -1){
				results.push(bootcamp);
			}
		});
		return results;
	};

});

// The controller

function InstantSearchController($scope){

	//Data models below. Hardcoded Test Example included. 

	$scope.bootcampList = [
		{
			url: 'http://telegraphacademy.com',
			title: 'Telegraph Academy',
			image: './images/bootcamp_images/tga.png'
		},
        {
			url: 'http://hackreactor.com',
			title: 'Hack Reactor',
			image: './images/bootcamp_images/hackreactor.png'
		}
	];

}