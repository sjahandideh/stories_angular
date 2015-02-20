// Routes

Stories.App.config(['$routeProvider', '$locationProvider', function(routeProvider, locationProvider) {
  locationProvider.html5Mode({enabled:true, requireBase: false});

  routeProvider
    .when("/", {
      templateUrl: 'app/components/home/home.html',
      controller:  'HomeController'
    })
    .when("/about", {
      templateUrl: 'app/components/about/about.html',
      controller:  'AboutController'
    });
}]);
