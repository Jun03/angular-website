var app = angular.module("computer", ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/main', {
    templateUrl: 'main.html',
    controller: 'MainCtrl'
  }).
  when('/about', {
    templateUrl: 'about.html',
    controller: 'MainCtrl'
  }).
  when('/services', {
    templateUrl: 'services.html',
    controller: 'ServicesCtrl'
  }).
  when('/contact', {
      templateUrl: 'contact.html',
      controller: 'ContactCtrl'
    })
    .otherwise({
      redirectTo: '/main'
    })



}])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('main.json').then(function(response) {
    $scope.services = response.data; //console.log(response);
  });

}]).
controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('services.json').then(function(response) {
    $scope.services = response.data; //console.log(response);
  });
}]).


controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('contact.json').then(function(response) {
    $scope.contacts = response.data; //console.log(response);
  });
}]);