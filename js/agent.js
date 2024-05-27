
class Agent {
    // MAXSCORE == -Infinity 3 tries: 736
    constructor(gameManager) {
        this.gameManager = gameManager;

        //console.log("agent" + this.gameManager);
    }

    selectMove(gameManager) {
        //console.log("selectMove() called");
        //console.log("Current game state:", this.gameManager.grid.serialize());
        //var brain = new AgentBrain(this.gameManager);

        // Use the brain to simulate moves
        // brain.move(i) 
        // i = 0: up, 1: right, 2: down, 3: left
        // brain.reset() resets the brain to the current game board

        // if (brain.move(0)) return 0;
        // if (brain.move(1)) return 1;
        // if (brain.move(3)) return 3;
        // if (brain.move(2)) return 2;


        let depth = 5; // Adjust the depth as needed
        let bestMove = 0;
        let maxScore = -Infinity;
        var openCells = gameManager.grid.availableCells().length;
        var score;
        var brain = new AgentBrain(gameManager);

        for (let move = 0; move < 4; move++) {
            //console.log("for loop " + move);
            if (brain.move(move)) {
                if (openCells > 6) {
                    score = this.expectimax(gameManager.grid, 4, true);
                } else {
                    score = this.expectimax(gameManager.grid, 6, true);
                }

                if (score > maxScore) {
                    maxScore = score;
                    bestMove = move;
                }
                brain.reset();
            }

        }

        //console.log("best move " + bestMove)
        return bestMove;
    };

    expectimax(grid, depth, isMaximizingPlayer) {
        let brain = new AgentBrain(this.gameManager);
        brain.grid = new Grid(grid.size, grid.serialize().cells);

        if (depth === 0 || !this.gameManager.movesAvailable()) {
            return this.evaluateGrid(brain.grid);
        }

        const oldGrid = brain.grid.serialize(); //--------------
        const oldScore = brain.score; //--------------
        if (isMaximizingPlayer) {
            let maxScore = -Infinity;
            //let maxScore = 0;


            for (let dir = 0; dir < 4; dir++) {
                if (brain.move(dir)) { //--------------------
                    maxScore = Math.max(maxScore, this.expectimax(brain.grid, depth - 1, false));
                    brain.score = oldScore;
                    brain.grid = new Grid(oldGrid.size, oldGrid.cells);


                    //brain.reset(); //---------------- 
                }
            }
            return maxScore;
        } else {
            let availableCells = brain.grid.availableCells();
            var freeCellAmount = availableCells.length;
            let sum = 0;

            //console.log("touched else");
            for (let cell of availableCells) {
                brain.addTileAtPosition(cell, 2);
                sum += this.expectimax(brain.grid, depth - 1, true) * (1.0 / freeCellAmount) * 0.9; //---------------------
                brain.score = oldScore;
                brain.grid = new Grid(oldGrid.size, oldGrid.cells);


            }

            for (let cell of availableCells) {
                brain.addTileAtPosition(cell, 4);
                sum += this.expectimax(brain.grid, depth - 1, true) * (1.0 / freeCellAmount) * 0.1;
                brain.score = oldScore;
                brain.grid = new Grid(oldGrid.size, oldGrid.cells);
            }

            return sum;
        }


    }

    evaluateGrid(grid) {
        let score = 0;

        // Assign higher scores to tiles in the bottom-left corner
        let weights = [
            [0, -100, -100, -1000],
            [10, 0, -100, -100],
            [100, 10, 0, -100],
            [1000, 100, 10, 0]
        ];

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                let tile = grid.cellContent({ x: i, y: j });

                if (tile) {
                    // console.log("weight: " + weights[i][j] + " -------------- tile   " + tile.value);
                    score += weights[i][j] * Math.log2(tile.value);

                    // Reward for tiles with value greater than 64
                    if (tile.value = 64) {
                       // console.log("       tilevalue 64");
                        score += 1000; // Adjust the reward value as needed
                    } else if (tile.value >= 128) {
                        //console.log("       tilevalue 128");
                        score += 10000;
                    }
                }
            }
        }

        // Penalize for having too many tiles on the grid
        score -= grid.availableCells().length * 10;

        return score;
    }

}