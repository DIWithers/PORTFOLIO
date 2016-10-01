portfolioApp.controller("mainController", function($scope, $timeout) {

	$scope.showCover1 = true;
	$scope.hoverIn = function(imageSrc) {
		if ($scope.showCover1) {
			$scope.cover2 = imageSrc;
			$scope.fadeImg1 = {"opacity" : "0"};
			$scope.fadeImg2 = {"opacity" : "1"};
			$timeout(function() {$scope.zoomClass = ''; }, 1000);
			$scope.zoomClass2 = "kenBurnseffect";
			$scope.showCover1 = false;
		}
		else {
			$scope.cover1 = imageSrc;
			$scope.fadeImg1 = {"opacity" : "1"};
			$scope.fadeImg2 = {"opacity" : "0"};
			$scope.zoomClass1 = "kenBurnseffect";
			$timeout(function() {$scope.zoomClass2 = ""; }, 1000);
			$scope.showCover1 = true;

		}
	}


	$scope.portfolio = [
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		},
		{
			projectName: "Placeholder",
			imageSrc: "images/placeholdit350x150.png",
			cover: "images/placeholdit350x150.png",
			coverSmall: "images/placeholdit350x150.png",
			url: "",
			desc: ""
		}


	]


});