var crime_data = angular.module('crime_data', ['ngRoute'])


crime_data.config(function($routeProvider){
	$routeProvider
	.when('/san_francisco', {
		templateUrl: '/static/partials/san_francisco.html'
	})
	.when('/miami', {
		templateUrl: '/static/partials/miami.html'
	})
	.when('/los_angeles', {
		templateUrl: '/static/partials/los_angeles.html'
	})
	.when('/new_orleans', {
		templateUrl: '/static/partials/new_orleans.html'
	})
	.otherwise("/", {
		redirectTo: '/'
	})
});
/////////////FACTORIES ///////////////////////////////////
crime_data.factory('sfcrimeFactory', function($http){
	var crimes = [];
	var factory = {};

	factory.sfindex = function(callback){
		$http.get('/sf_crimes').success(function(output){
			callback(output)
		});
	}
	return factory;

});
crime_data.factory('miamicrimeFactory', function($http){
	var crimes = [];
	var factory = {};
	factory.miamiindex = function(callback){
		$http.get('/miami_crimes').success(function(output){
			callback(output)
		});
	}
	return factory;
});
crime_data.factory('lacrimeFactory', function($http){
	var crimes = [];
	var factory = {};
	factory.laindex = function(callback){
		$http.get('/la_crimes').success(function(output){
			callback(output)
		});
	}
	return factory;
});
crime_data.factory('nocrimeFactory', function($http){
	var crimes = [];
	var factory = {};
	factory.noindex = function(callback){
		$http.get('/no_crimes').success(function(output){
			callback(output)
		});
	}
	return factory;
})

////////////////CONTROLLERS//////////////////////
///////-------san francisco---------/////////////
crime_data.controller('sfcrimesController', function(sfcrimeFactory, $scope){

	$scope.get_position = function(){
		$scope.position = $scope.new_position;
		console.log($scope.position);
		$scope.map.center = $scope.position;
		console.log(google.maps.Map);
	}

	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(37.773972, -122.431297),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener($scope.map, 'click', function(event){
		placeMarker(event.latLng, map);
	});
	function placeMarker(position, map){
		var marker = new google.maps.Marker({
			position: position,
			map: $scope.map
		});
		// marker.content = '<div class="infoWindowContent">' + This location + '</div>';

	}

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();
	$scope.getCrimes = function(){
			sfcrimeFactory.sfindex(function(data){
			$scope.crimes = data.body;
			})
			console.log($scope.crimes);

			var iconBase = '/static/images/';
			// var icons = {

			// }
		
	    var createMarker = function(info){
	    	var marker = new google.maps.Marker({
	    		map: $scope.map,
	    		position: new google.maps.LatLng(info.lat, info.long),
	    		icon: iconBase + 'crimescene.png'
	    	});
	    	marker.content = '<div class="infoWindowContent">' + info.description + '<br />' + info.datetime + '</div>';

	    	google.maps.event.addListener(marker, 'click', function(){
	    		infoWindow.setContent('<h2>' + marker.content + '</h2>');
	    		infoWindow.open($scope.map, marker);
	    	});

	    	$scope.markers.push(marker);
	    }
	    for (i=0;i<$scope.crimes.length; i++){
	    	createMarker($scope.crimes[i]);
	    }
	    $scope.openInfoWindow = function(e, selectedMarker){
	    	e.preventDefault();
	    	google.maps.event.trigger(selectedMarker, 'click');
	    }
	}
});
//////////--------miami---------///////////
crime_data.controller('miamicrimesController', function(miamicrimeFactory, $scope){

	$scope.get_position = function(){
		$scope.position = $scope.new_position;
		console.log($scope.position);
		$scope.map.center = $scope.position;
		console.log(google.maps.Map);
	}

	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(25.768641, -80.192558),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    google.maps.event.addListener($scope.map, 'click', function(event){
		placeMarker(event.latLng, map);
	});
	function placeMarker(position, map){
		var marker = new google.maps.Marker({
			position: position,
			map: $scope.map
		});
		// marker.content = '<div class="infoWindowContent">' + This location + '</div>';

	}

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();
	$scope.getCrimes = function(){
			miamicrimeFactory.miamiindex(function(data){
			$scope.crimes = data.body;
			})
			console.log($scope.crimes);

			var iconBase = '/static/images/';
			// var icons = {

			// }
		
	    var createMarker = function(info){
	    	var marker = new google.maps.Marker({
	    		map: $scope.map,
	    		position: new google.maps.LatLng(info.lat, info.long),
	    		icon: iconBase + 'crimescene.png'
	    	});
	    	marker.content = '<div class="infoWindowContent">' + info.description + '<br />' + info.datetime + '</div>';

	    	google.maps.event.addListener(marker, 'click', function(){
	    		infoWindow.setContent('<h2>' + marker.content + '</h2>');
	    		infoWindow.open($scope.map, marker);
	    	});

	    	$scope.markers.push(marker);
	    }
	    for (i=0;i<$scope.crimes.length; i++){
	    	createMarker($scope.crimes[i]);
	    }
	    $scope.openInfoWindow = function(e, selectedMarker){
	    	e.preventDefault();
	    	google.maps.event.trigger(selectedMarker, 'click');
	    }
	}
});
/////////-------los angeles----////////////////////
crime_data.controller('lacrimesController', function(lacrimeFactory, $scope){

	$scope.get_position = function(){
		$scope.position = $scope.new_position;
		console.log($scope.position);
		$scope.map.center = $scope.position;
		console.log(google.maps.Map);
	}

	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(34.033837, -118.237364),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	google.maps.event.addListener($scope.map, 'click', function(event){
		placeMarker(event.latLng, map);
	});
	function placeMarker(position, map){
		var marker = new google.maps.Marker({
			position: position,
			map: $scope.map
		});
		// marker.content = '<div class="infoWindowContent">' + This location + '</div>';

	}

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();
	$scope.getCrimes = function(){
			lacrimeFactory.laindex(function(data){
			$scope.crimes = data.body;
			})
			console.log($scope.crimes);

			var iconBase = '/static/images/';
			// var icons = {

			// }
		
	    var createMarker = function(info){
	    	var marker = new google.maps.Marker({
	    		map: $scope.map,
	    		position: new google.maps.LatLng(info.lat, info.long),
	    		icon: iconBase + 'crimescene.png'
	    	});
	    	marker.content = '<div class="infoWindowContent">' + info.description + '<br />' + info.datetime + '</div>';

	    	google.maps.event.addListener(marker, 'click', function(){
	    		infoWindow.setContent('<h2>' + marker.content + '</h2>');
	    		infoWindow.open($scope.map, marker);
	    	});

	    	$scope.markers.push(marker);
	    }
	    for (i=0;i<$scope.crimes.length; i++){
	    	createMarker($scope.crimes[i]);
	    }
	    $scope.openInfoWindow = function(e, selectedMarker){
	    	e.preventDefault();
	    	google.maps.event.trigger(selectedMarker, 'click');
	    }
	}
});
//////////---------new orleans-----/////////////////
crime_data.controller('nocrimesController', function(nocrimeFactory, $scope){



	var mapOptions = {
		zoom: 13,
		center: new google.maps.LatLng(30.017714, -89.972090),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

	google.maps.event.addListener($scope.map, 'click', function(event){
		placeMarker(event.latLng, map);
	});
	function placeMarker(position, map){
		var marker = new google.maps.Marker({
			position: position,
			map: $scope.map
		});
		// marker.content = '<div class="infoWindowContent">' + This location + '</div>';

	}

    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();
	$scope.getCrimes = function(){
			nocrimeFactory.noindex(function(data){
			$scope.crimes = data.body;
			})
			console.log($scope.crimes);

			var iconBase = '/static/images/';
			// var icons = {

			// }
		
	    var createMarker = function(info){
	    	var marker = new google.maps.Marker({
	    		map: $scope.map,
	    		position: new google.maps.LatLng(info.lat, info.long),
	    		icon: iconBase + 'crimescene.png'
	    	});
	    	marker.content = '<div class="infoWindowContent">' + info.description + '<br />' + info.datetime + '</div>';

	    	var str = info.description;
	    	// console.log(str.includes("THEFT"));
	    	// if(str.includes("THEFT"){
	    	// 	marker.category = THEFT;
	    	// })
	    	
	    	// console.log($scope.markers);
	    	google.maps.event.addListener(marker, 'click', function(){
	    		infoWindow.setContent('<h2>' + marker.content + '</h2>');
	    		infoWindow.open($scope.map, marker);
	    	});

	    	$scope.markers.push(marker);
	    }
	    for (i=0;i<$scope.crimes.length; i++){
	    	createMarker($scope.crimes[i]);
	    }
	    $scope.openInfoWindow = function(e, selectedMarker){
	    	e.preventDefault();
	    	google.maps.event.trigger(selectedMarker, 'click');
	    }
	}
});








