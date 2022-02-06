<template>
  <div class="hello">
    <table class="center">
      <tr v-for="row in board" :key="row.id">
        <td v-for="cell in row" :key="cell.id" class="cell" v-bind:class="{ active: cell }">o</td>
      </tr>
    </table>
  </div>
</template>

<script>

import countNeighbors from '../countNeighbors'
import init from '../init'

let initBoard = function () {
  const flatBoard = [[true]];
  const board = init(100, 100, 500);

  for (let i = 0; i < board.length; i++) {
    flatBoard[i] = [];
    for (let j = 0; j < board[i].length; j++) {
        flatBoard[i][j] = board[i][j].active;
    }
  }

  return flatBoard;
};

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      interval: null,
      board: initBoard()
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      let prevBoard = this.board;
      this.board = countNeighbors(this.board);
      if (prevBoard.toStrictEqual(this.board)) {
        this.board = initBoard();
      }
    }, 3000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.cell {
  border: #42b983;
}

.cell.active {
  background-color: red;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

</style>
