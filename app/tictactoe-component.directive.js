app.directive('tictactoeComponent', function () {
	return {
		templateUrl: 'app/templates/tictactoe-component.html',
		replace    : true,
		controller : function ($scope,gameService) {

			function resetCells () {
				$scope.win = false;
				$scope.cells = [
					{id:'a',value:null},
					{id:'b',value:null},
					{id:'c',value:null},

					{id:'e',value:null},
					{id:'f',value:null},
					{id:'g',value:null},

					{id:'h',value:null},
					{id:'i',value:null},
					{id:'j',value:null}
				]
			}

			var init = function () {
					resetCells();
					gameService.setTurn()
			};

			$scope.cellClicked = function (cell) {
				var index = _.findIndex($scope.cells,{id:cell.id})
				$scope.cells[index]['value'] = gameService.getTurn();
				$scope.win = gameService.checkBoard($scope.cells)

				if(!$scope.win)
					gameService.setTurn();
				else
					alert(gameService.getTurn() + ' win')
			}
			$scope.resetGame = resetCells

			init();
		}
	}
})