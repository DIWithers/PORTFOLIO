var portfolioApp = angular.module("portfolioApp", ["ngRoute"]);

portfolioApp.config(function($routeProvider) {
	$routeProvider.when("/", {
		templateUrl: "main.html",
		controller: "mainController"
	})
	.when("/skills", {
		templateUrl: "skills.html",
		controller: "mainController"
	})
	.when("/projects", {
		templateUrl: "projects.html",
		controller: "mainController"
	})
	.when("/contact", {
		templateUrl: "contact.html",
		controller: "mainController"
	})

});