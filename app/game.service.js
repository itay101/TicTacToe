app.factory('gameService', function () {

	var turn

	var setTurn = function () {
		turn = !turn || turn === 'o' ? 'x' : 'o'
	}

	var getTurn = function () {
		return turn
	}

	var checkBoard = function (B) {

		B = _.map(B,function (cell) {
			return cell.value;
		})
		//check rows
		for (var i = 0; i <= 6; i = i + 3) {
			if (B[i] && B[i] === B[i + 1] && B[i + 1] == B[i + 2]) {
				return true
			}
		}

		//check columns
		for (var i = 0; i <= 2; i++) {
			if (B[i] && B[i] === B[i + 3] && B[i + 3] === B[i + 6]) {
				return true
			}
		}

		//check diagonals
		for (var i = 0, j = 4; i <= 2; i = i + 2, j = j - 2) {
			if (B[i] && B[i] == B[i + j] && B[i + j] === B[i + 2 * j]) {
				return true
			}
		}
	}
	return {
		setTurn   : setTurn,
		getTurn   : getTurn,
		checkBoard: checkBoard
	}
})