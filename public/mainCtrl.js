angular.module('userProfiles')
.controller('mainCtrl', function( $scope, friendService, $location ) {


	$scope.login = function( user ) {
		console.log(user);
		friendService.login(user).then(function( response ) {
			console.log(response.data);
			if (response.data.userFound) {
				$location.path('/profile');
			} else {
				alert('user not found');
			}
		});
	};


});
