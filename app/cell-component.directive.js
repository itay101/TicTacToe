app.directive('cellComponent',function () {
	return {
		templateUrl:'app/templates/cell-component.html',
		replace:true,
		scope:{
			cell:'=',
			clickCallback:'='
		},
		controller:function ($scope,gameService) {

			$scope.handleClick = function () {
				$scope.clickCallback($scope.cell)
				$scope.selected = true;
			}

			$scope.handleHover = function () {
				$scope.turn =	gameService.getTurn();
			}
		}
	}
})