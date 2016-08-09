(function(){
angular.module("jobFinder").config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
        templateUrl: 'app/templates/homepage/index.html',
        controller: 'homepageController'
    })
    .when('/auth/login', {
        templateUrl: 'app/templates/loginpage/index.html',
        controller: 'loginpageController',
        controllerAs: 'loginpgCtrl'
    })
    .when('/auth/register', {
        templateUrl: 'app/templates/loginpage/register.html',
        controller: 'registerpageController',
        controllerAs: 'registerpgCtrl'
    })
    .when('/employee/profile', {
        templateUrl: '/app/templates/employeepage/index.html',
        controller: 'employeeController',
        controllerAs: 'employeeCtrl'
    })
    .when('/company/profile', {
        templateUrl: '/app/templates/companypage/index.html',
        controller: 'companyController',
        controllerAs: 'companyCtrl'
    })
  .otherwise({redirectTo: '/'});
}]);
})();
