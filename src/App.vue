<template>
  <div id="app">
    <h1>Simon Says</h1>
    <div class="game">
      <div class="game-circle">
        <div class="game-button" :class="{active: activeElement === 1}" @click="gameButtonHandler(1)"></div>
        <div class="game-button" :class="{active: activeElement === 2}" @click="gameButtonHandler(2)"></div>
        <div class="game-button" :class="{active: activeElement === 3}" @click="gameButtonHandler(3)"></div>
        <div class="game-button" :class="{active: activeElement === 4}" @click="gameButtonHandler(4)"></div>
      </div>

      <div class="game-info">
        <div class="game-stats">
          <h2>Раунд: {{ round }}</h2>
          <button @click="startGame">Старт</button>
          <span v-if="countRoundsBeforeLoose && round === 0">Вы проиграли на {{ countRoundsBeforeLoose }} раунде</span>
        </div>

        <div class="game-options">
          <h2>Выбор сложности</h2>

          <div class="radio-group">
            <input type="radio" id="easy-mode" name="mode" value="easy" v-model="mode">
            <label for="easy-mode">Легкий</label>
          </div>

          <div class="radio-group">
            <input type="radio" id="normal-mode" name="mode" value="normal" v-model="mode">
            <label for="normal-mode">Средний</label>
          </div>

          <div class="radio-group">
            <input type="radio" id="hard-mode" name="mode" value="hard" v-model="mode">
            <label for="hard-mode">Сложный</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const soundSrc1 = require('@/assets/1.ogg');
const soundSrc2 = require('@/assets/2.ogg');
const soundSrc3 = require('@/assets/3.ogg');
const soundSrc4 = require('@/assets/4.ogg');
export default {
  name: 'App',
  data() {
    return {
      round: 0,
      activeElement: 0,
      mode: 'easy',
      delay: 1.5,
      sequence: [],
      isPlayerRestoreOrder: false,
      countRoundsBeforeLoose: 0
    }
  },
  methods: {
    startGame() {
      if (this.round === 0) {
        this.nextRound();
      }
    },
    generateSequence() {
      this.sequence = [];
      for (let i = 0; i < this.round; i++) {
        let randomNumber = Math.random();
        if (randomNumber < 0.25) {
          this.sequence.push(1);
        } else if (randomNumber < 0.5) {
          this.sequence.push(2);
        } else if (randomNumber < 0.75) {
          this.sequence.push(3);
        } else {
          this.sequence.push(4);
        }
      }
    },
    displayCurrentGameButton(index) {
      if (index < this.sequence.length) {
        this.activeElement = this.sequence[index];
        let audio;
        switch (this.sequence[index]) {
          case 1: {
            audio = new Audio(soundSrc1);
            break;
          }
          case 2: {
            audio = new Audio(soundSrc2);
            break;
          }
          case 3: {
            audio = new Audio(soundSrc3);
            break;
          }
          default: {
            audio = new Audio(soundSrc4);
          }
        }
        audio.play();

        setTimeout(() => {
          this.displayCurrentGameButton(index + 1);
        }, this.delay * 1000);
      } else {
        this.activeElement = 0;
        this.isPlayerRestoreOrder = true;
      }
    },
    gameButtonHandler(num) {
      if (this.isPlayerRestoreOrder) {
        if (this.sequence[0] === num) {
          this.sequence.shift();
          if (this.sequence.length === 0) {
            this.sequence = [];
            this.isPlayerRestoreOrder = false;
            this.nextRound();
          }
        } else {
          this.sequence = [];
          this.countRoundsBeforeLoose = this.round;
          this.round = 0;
          this.isPlayerRestoreOrder = false;
        }
      }
    },
    nextRound() {
      this.round += 1;
      this.generateSequence();
      this.displayCurrentGameButton(0);
    },
  },
  watch: {
    mode(mode) {
      switch (mode) {
        case "easy":
          this.delay = 1.5;
          break;
        case "normal":
          this.delay = 1;
          break;
        case "hard":
          this.delay = 0.4;
      }
    }
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  font-size: 16px;

  .game {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3rem;

    .game-circle {
      box-sizing: border-box;
      border-radius: 150px;
      width: 300px;
      height: 300px;

      :nth-child(1) {
        border-radius: 150px 0 0 0;
        background: blue;
      }

      :nth-child(2) {
        border-radius: 0 150px 0 0;
        background: red;
      }

      :nth-child(3) {
        border-radius: 0 0 0 150px;
        background: green;
      }

      :nth-child(4) {
        border-radius: 0 0 150px 0;
        background: yellow;
      }

      .game-button {
        box-sizing: border-box;
        height: 50%;
        width: 50%;
        float: left;
        opacity: 0.6;

        &:hover {
          border: 1px solid black;
        }

        &.active {
          border: 1px solid black;
          opacity: 1;
        }
      }
    }

    .game-info {
      h2 {
        margin-bottom: 0.5rem;
      }

      .game-stats {
        display: flex;
        flex-direction: column;
        align-items: center;

        button {
          width: 5rem;
          box-sizing: border-box;
          font-size: 1.4rem;
          border-radius: 10px 10px 10px 10px;
          background: #6DABE8;
          border: none;
          padding: 0.3rem 0.6rem;
          margin-bottom: 0.7rem;
          cursor: pointer;

          &:hover {
            background: #78BCFF;
          }
        }
      }

      .game-options {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 0.5rem;

        .radio-group {
          font-size: 1.5rem;
        }
      }
    }
  }
}
</style>
