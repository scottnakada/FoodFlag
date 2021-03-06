'use strict';

angular.module('ionFoodFlagApp')
  .controller('AdminCtrl', function ($scope, Auth, toaster, $location) {

    // Make sure the user is an Admin before showing this page
    if (!Auth.isAdmin()) {
      toaster.pop('error', 'You need Admin privileges to access this page');
      // See if they are signed In
      if (!Auth.signedIn()) {
        // Not logged in, go to the login page
        $location.path("/login");
      } else {
        // Not authorized for this page; go back to the store
        $location.path("/home");
      }
    }

    // Provide access to the list of user profiles
    $scope.users = Auth.all;

  });
