// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.controller('MyCtrl', function($scope) {
  $scope.items = [];
  for (var i = 0; i < 10; i++) {
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id turpis vitae eros cursus viverra non eget ligula. Maecenas et mauris at justo auctor molestie pharetra bibendum dui. Fusce id dui vulputate, dictum diam ac, rhoncus erat. Integer facilisis dignissim iaculis. Aliquam imperdiet viverra dui, ac malesuada dolor dictum sit amet. Nulla cursus tellus at blandit suscipit. Cras tempus, eros sed luctus gravida, lacus ipsum lacinia nulla, in gravida leo mauris eu leo. Praesent in sem sed augue rutrum tempor. Nam at lectus iaculis metus lobortis euismod sit amet non nulla. Nullam vel magna pharetra, vehicula lacus malesuada, tincidunt mi. Vivamus sapien nibh, pulvinar et felis et, tristique consequat lacus. Curabitur sed venenatis turpis, condimentum mattis orci. Vestibulum maximus, nulla nec mattis lacinia, nibh purus sollicitudin orci, a iaculis nibh erat non leo.'
    $scope.items[i] = {
      Text: text
    };
    $scope.expandItem = function(item) {
      if ($scope.isItemExpanded(item)) {
        $scope.shownItem = null;
      } else {
        $scope.shownItem = item;
      }
    };
    $scope.isItemExpanded = function(item) {
      return $scope.shownItem === item;
    };

  }
});
