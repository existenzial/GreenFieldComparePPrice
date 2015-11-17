ngular.module("froogie")
    .controller("MessageCrl", ['$rootScope','$scope', '$http', messageGet]);

    function messageGet($rootScope,$scope, $http) {
        $scope.getHackReactor = function() {
      //Make a get request to the server
        $http.get("http://localhost:3000/index/hackreactor")
        //if success then
          .then(function (response) {
            //array of user information. Unnecessary as we will have a database
              $scope.display = [];
              //loop through users information. This assumes the data we want is in response.data
//f
              for (var i = 0; i < response.data.length; i++){
                //format user's information. Assumes the id, name, email are properties. Can modify, will need proprety of message  however that users data is going to be formated. 
                var wholeUser = "Id:" + response.data[i].id +" Name: " + response.data[i].name + " Email: " + response.data[i].email ;
                //store user's information. This will be unnecessary as we have a database. 
                $scope.display.push(wholeUser);
              }
              
      //if error then
          }, function(error){
                  console.log("error message:", error);
        });

        }


}