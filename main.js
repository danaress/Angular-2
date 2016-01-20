angular.module('module1', []);

angular.module('module1').controller('modcontroller', ['$scope', function($scope) {

var coloroptions = ['color: pink', 'color:black']

	$scope.change = function() {
		$scope.color = coloroptions[0];
	}
	$scope.changeback = function() {
		$scope.color= coloroptions[1];
	}


	$scope.changes = function() {
		$scope.color2 = coloroptions[0];
	}
	$scope.changebacks = function() {
		$scope.color2 = coloroptions[1];
	}


	$scope.excited = "!";

	$scope.confirm = function() {

		var x = confirm("HI"); {
			if (x == false) {
				event.preventDefault();
				$scope.visible = true;
			}
		}
	
	}

	$scope.boxclick = function() {
		$scope.popup = true;
	}

	$scope.boxbutton = function() {
		$scope.popup = false;
	}


}])