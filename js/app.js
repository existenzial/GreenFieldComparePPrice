angular.module('booted', [])

    .controller('bootcampCtrl', function($scope, $http) {
        //Creates a new comment - you may use this in your angular front end
        $scope.create = function() {
            $http.post('/mainComments', $scope.comments) //make http post request to the server
                .success(function(response) {
                    $scope.all();
                });
        };

        // Passes the data to the mainComments array
        $scope.rendermainComments = function(response) {
            $scope.mainComments = response;
        };

        // Removes the comment from the database
        $scope.remove = function(id) {
            $http.delete('/mainComments/' + id)
                .success(function(response) {
                    $scope.all(); //after remove from database you retrieve all data again from the database
                });
        };

        // Selects the comment from the database
        $scope.select = function(id) {
            $http.get('/mainComments/' + id)
                .success(function(response) {
                    $scope.comments = response;
                });
        };

        // Displays all of the comments from the database
        $scope.all = function() { //get all on demand
            $http.get('/mainComments')
                .success($scope.rendermainComments);
        };

        $scope.all(); //call this the first time when the page first loads
    })

    .controller('submitCtrl', ['$rootScope', '$scope', '$http', function($rootScope, $scope, $http) {
        //submit function for new user
        $scope.submit = function() {
            //if there is text
            if ($scope.text) {
                //increment id
                num++;
                //split the name and email
                var data = $scope.text.split(' ');

                informationToSend = {
                    email: data[1],
                    id: num,
                    name: data[0]
                };
                //send the informatioon to the server
                $http.post('http://localhost:3000/api/users', JSON.stringify(informationToSend));
                ///empty the text box
                $scope.text = '';
            }
        };
    }])

    .controller("FakeVotingNotWorthyCtrl", function($scope) {
        $scope.love = 0 //FakeVoting.love
        $scope.addLove = function() {
            //add love
            $FakeVoting.love++;
            $scope.love++;
        };
    })

    .controller('bootListController', function($scope) {
        //Hardcoded dB Backup Bootcamp List Below - Use if Necessary For Demo.
        $scope.bootcampList = [{
            url: './schools/hackreactor.html',
            title: 'Hack Reactor',
            image_small: './images/bootcamp_images/hackreactor_small.png',
            image: './images/bootcamp_images/hackreactor.png',
            bio: 'Join the programming elite and learn all the cutting edge trends',
            votes: ''
        }, {
            url: './schools/tga.html',
            title: 'Telegraph Academy',
            image_small: './images/bootcamp_images/tga_small.png',
            image: './images/bootcamp_images/tga.png',
            bio: 'An extension of the Hack Reactor program with a unique approach looking to diversify the industry and expand opportunity',
            votes: ''
        }, {
            url: './schools/devbootcamp.html',
            title: 'Dev Bootcamp',
            image: './images/bootcamp_images/devboot_small.png',
            bio: '19-week immersive course focusing on multiple languages to give you a competitive edge on the job search',
            votes: ''
        }, {
            url: './schools/makersquare.html',
            title: 'Maker Square',
            image: './images/bootcamp_images/makersquare_small.png',
            bio: 'A program designed to teach you CS fundamentals and software engineering',
            votes: ''
        }, {
            url: './schools/hackbright.html',
            title: 'Hackbright Academy',
            image: './images/bootcamp_images/hackbright_small.jpg',
            bio: 'A program focused on giving women a leg up in tech',
            votes: ''
        }, ];

        var list = [];
        angular.forEach($scope.bootcampList, function(prop, val) {
            this.push(prop + ': ' + val)
        }, list);
    })

    .controller("FakeVotingNotWorthyCtrl", function($scope) {
        $scope.love = 0 //FakeVoting.love
        $scope.addLove = function() {
            //add love
            $FakeVoting.love++;
            $scope.love++;
        };
    });