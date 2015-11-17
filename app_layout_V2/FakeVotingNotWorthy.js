//ISSUE with this is that the logic does not hold for users.The likes and dislikes are not added or subtracted according to individual users. The code does not check wheter that individual user has already voted, instead it checks if voting has already been done on the page.


myApp = angular.module("booted");
myApp.factory('FakeVoting', function clientIdFactory() {
  return {
    //love starts off as 0
    love: 0
  };
});
   myApp.controller("FakeVotingNotWorthyCtrl", ['$rootScope','$scope','FakeVoting', fakeVotingFunc]);    

    function fakeVotingFunc($scope, FakeVoting) {
      // $scope.vote
      console.log("FakeVoting", FakeVoting.love)
      $scope.love = 0//FakeVoting.love
        $scope.addLove = function() {
            //add love
            $FakeVoting.love++; 
            $scope.love++;

        };

        // $scope.addHate = function() {
        //     //they have not already hated the bootcamp
        //     if (!votedFunc.hatedAlready) {
        //         //add hate
        //         votingFunc.hate++; 
        //         //remember that we have already counted their hate
        //         votedFunc.hatedAlready = true; 
        //     }
        //     if (lovedAlready) {
        //         votingFunc.love--;
        //         votedFunc.lovedAlready = false; 
        //     }
        // }
    }