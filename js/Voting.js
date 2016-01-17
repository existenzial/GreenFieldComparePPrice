// //ISSUE with this is that the logic does not hold for users.The likes and dislikes are not added or subtracted according to individual users. The code does not check whether that individual user has already voted, instead it checks if voting has already been done on the page.


// angular.module("booted")
//     .factory('votingDataHackReactor', function clientIdFactory() {
//   return {
//     //love starts off as 0
//     love: 0, 
//     //hate starts off as 0
//     hate: 0,
//     //lovedAlready starts off as false. 
//     lovedAlready: false, 
//     //hatedAlready starts off as false. 
//     hatedAlready: false
//   };
// })
//     .controller("VotingCtrl", ['$rootScope','$scope','votingDataHackReactor', votingFunc]);    

//     function votingFunc($scope, votingDataHackReactor) {

//         $scope.addLove = function() {
//             //they have not already loved the bootcamp
//             if (!votedFunc.lovedAlready) {
//                 //add love
//                 votingFunc.love++; 
//                 //remember that we have already counted their love
//                 votedFunc.lovedAlready = true; 

//             }
//             //if they hated it already
//             if (hatedAlready) {
//                 //Take the hate away
//                 votingFunc.hate--;
//             }
//         };

//         $scope.addHate = function() {
//             //they have not already hated the bootcamp
//             if (!votedFunc.hatedAlready) {
//                 //add hate
//                 votingFunc.hate++; 
//                 //remember that we have already counted their hate
//                 votedFunc.hatedAlready = true; 
//             }
//             if (lovedAlready) {
//                 votingFunc.love--;
//                 votedFunc.lovedAlready = false; 
//             }
//         }
//     }