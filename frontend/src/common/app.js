var app = angular.module('starterProject', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

    //Avoid using hashes on the URL, whenever the browser supports this feature
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to the home page
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: "src/app/home/home.html",
            controller: 'HomeCtrl'
        })
        .state('details', {
            url: "/details",
            templateUrl: "src/app/details/details.html",
            controller: 'DetailsCtrl'
        });
});