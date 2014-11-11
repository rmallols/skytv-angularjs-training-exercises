var app = angular.module('sATE', ['ui.router']);

app.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {

    //Avoid using hashes on the URL, whenever the browser supports this feature
    $locationProvider.html5Mode(true);

    // For any unmatched url, redirect to the home page
    $urlRouterProvider.otherwise("/home");

    // Now set up the states
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "src/app/home/home.html",
            controller: 'HomeCtrl'
        })
        .state('lesson1', {
            url: "/lesson1",
            templateUrl: "src/app/lessons/lesson1/lesson1.html",
            controller: 'Lesson1Ctrl'
        })
        .state('lesson2', {
            url: "/lesson2",
            templateUrl: "src/app/lessons/lesson2/lesson2.html",
            controller: 'Lesson2Ctrl'
        })
        .state('lesson3', {
            url: "/lesson3",
            templateUrl: "src/app/lessons/lesson3/lesson3.html",
            controller: 'Lesson3Ctrl'
        })
        .state('lesson4', {
            url: "/lesson4",
            templateUrl: "src/app/lessons/lesson4/lesson4.html",
            controller: 'Lesson4Ctrl'
        });
});