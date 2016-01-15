// angular.module("booted")
     .controller('submitCtrl',['$rootScope','$scope', '$http', function($rootScope,$scope,$http) {
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
     }]);




// }