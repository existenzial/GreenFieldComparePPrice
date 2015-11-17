// Defines module for app. If there are dependencies, insert into array
var app = angular.module("booted", [])
    // The controller
    .controller('bootListController', function($scope, $http){
    $scope.bootcampList = [
        {
            url: 'http://telegraphacademy.com',
            title: 'Telegraph Academy',
            image: './images/bootcamp_images/tga.png',
            bio: 'An extension of the Hack Reactor program with a unique approach looking to diversify the industry and expand opportunity'
        },
        {
            url: 'http://hackreactor.com',
            title: 'Hack Reactor',
            image: './images/bootcamp_images/hackreactor.png',
            bio: ''
        }
    ];

        //Bootcamp List below. Hardcoded Test Example included. 

        angular.forEach(bootcampList, function(bootcamp){
            bootcamp.title = title;
            bootcamp.url = url;
            bootcamp.image = image;
            bootcamp.bio = bio;
        });
    });