/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  // input: board size and num of rooks
  // output: matrix, array of arrays with length === n
  var solution;
  var board = new Board({ n });
  var findSolution = (row = 0) => {
    if (row < n && !solution) {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyRooksConflicts()) {
          findSolution(row + 1);
        }
        board.togglePiece(row, col);
      }
    } else if (row === n) {
      solution = board.rows().slice().map(row => row.slice());
    }
  }
  findSolution();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution || board.rows();// || if n was 0
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  // create new board
  var board = new Board({ n });
  var findSolution = function(row) {
    // if all rows are exhausted
    if (row === n) {
      // increment the solution count by 1
      solutionCount++;
      // stop
      return;
    }
    // iterate over all possible decisions
    for (var i = 0; i < n; i++) {
      // place a piece
      board.togglePiece(row, i);
      // if there is no conflict
        // recurse into remaining problem
      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }
      // unplace a piece
      board.togglePiece(row, i);
    }
  };
  // invoke the recursive function with the argument set to 0
  findSolution(0);
  // return the solution count
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  // input: board size and num of queens
  // output: matrix, array of arrays with length === n
  var solution;
  var board = new Board({ n });
  var findSolution = (row = 0) => {
    if (row < n && !solution) {
      for (var col = 0; col < n; col++) {
        board.togglePiece(row, col);
        if (!board.hasAnyQueensConflicts()) {
          findSolution(row + 1);
        }
        board.togglePiece(row, col);
      }
    } else if (row === n) {
      solution = board.rows().slice().map(row => row.slice());
    }
  }
  findSolution();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution || board.rows();// || if n was 0
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0;
  // create new board
  var board = new Board({ n });
  var findSolution = function(row) {
    // if all rows are exhausted
    if (row === n) {
      // increment the solution count by 1
      solutionCount++;
      // stop
      return;
    }
    // iterate over all possible decisions
    for (var i = 0; i < n; i++) {
      // place a piece
      board.togglePiece(row, i);
      // if there is no conflict
        // recurse into remaining problem
      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }
      // unplace a piece
      board.togglePiece(row, i);
    }
  };
  // invoke the recursive function with the argument set to 0
  findSolution(0);
  // return the solution count
  return solutionCount;
};
