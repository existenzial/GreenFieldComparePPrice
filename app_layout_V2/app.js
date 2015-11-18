// Defines module for app. If there are dependencies, insert into array
var app = angular.module("booted", [])
    
    // The controller
    .controller('bootListController', function($scope, $http){
    
    //Bootcamp List below. Hardcoded Test Example included. 
	$scope.bootcampList = [
        {
			url: './hackreactor.html',
			title: 'Hack Reactor',
            image_small: './images/bootcamp_images/hackreactor_small.png',
			image: './images/bootcamp_images/hackreactor.png',
            bio: ''
		},
		{
			url: './hackreactor.html',
			title: 'Telegraph Academy',
            image_small: './images/bootcamp_images/tga_small.png',
			image: './images/bootcamp_images/tga.png',
            bio: 'An extension of the Hack Reactor program with a unique approach looking to diversify the industry and expand opportunity'
		},
        {
			url: './devbootcamp.html',
			title: 'Dev Bootcamp',
			image: './images/bootcamp_images/devboot_small.png',
            bio: '19-week immersive course focusing on multiple languages to give you a competitive edge on the job search'
		},
        {
			url: './makersquare.com',
			title: 'Maker Square',
			image: './images/bootcamp_images/makersquare_small.png',
            bio: 'A program designed to teach you CS fundamentals and software engineering'
		},
        {
			url: './hackbright.com',
			title: 'Hackbright Academy',
			image: './images/bootcamp_images/hackbright_small.jpg',
            bio: 'A program focused on giving women a leg up in tech'
		},
	];

        var list = [];
        
        angular.forEach($scope.bootcampList, function(prop, val){
            this.push(prop + ': ' + val)
        }, list);
    });

