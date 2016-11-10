angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo ) {

  $scope.currentUser = userInfo;
  $scope.friends = userInfo.friends;

  // $scope.getUser();

});
