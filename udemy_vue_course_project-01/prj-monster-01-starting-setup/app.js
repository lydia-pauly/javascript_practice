//Create app variable
const APP = Vue.createApp({
  data() {
    return {
      player: {
        health: 100,
        maxHealth: 100,
        maxAttack : 13,
        minAttack: 5,
        minHeal : 1,
        maxHeal : 10,
        specialRecharge: 0
      },
      monster: {
        health: 130,
        maxHealth: 130,
        maxAttack: 20,
        minAttack: 2
      },
      game : {
        currentRound: 0
      }
    }
  },

  computed: {
    playerPercentageBar() {
      return {width:((this.player.health / this.player.maxHealth)*100) + '%'};
    },
    monsterPercentageBar() {
      return {width:((this.monster.health / this.monster.maxHealth)*100) + '%'};
    },
    playerAlive() {
      return this.player.health !== 0;
    },
    canUseSpecialAttack() {
      return this.player.specialRecharge === 0;
    }
  },

  methods: {
    getRandomValue(min, max, ceil) {
      if (ceil) {
        return value = Math.ceil(Math.random() * (max - min));
      } else {
        return value = Math.floor(Math.random() * (max - min));
      };
    },

    checkDeath() {
      if (this.player.health <= 0) {
        console.log(`You died!`);
        return;
      };
      if (this.monster.health <= 0) {
        console.log(`You won!`);
        return;
      }
    },

    changeHealth(current, max, change, heal) {
      if (heal) {
        if ((current + change) >= max) {
          return max;
        } else {
          return (current + change);
        }
      }
      if (!heal) {
        if ((current - change) < 0) {
        return 0;
      } else {
        return (current - change);
        };
      };
    },

    specialRecharge(recharge) {
      if (recharge > 0) {
        return recharge--;
      } else {
        return 0;
      }
    },

    attackMonster(special) {
      let attack = 0;
      console.log(`ROUND ${this.game.currentRound}`);
      console.log(`Player health: ${this.player.health}`);
      console.log(`Monster health: ${this.monster.health}`);
      if (!special) {
        attack = this.getRandomValue(this.player.minAttack, this.player.maxAttack, false);
        console.log(`Player attacked for ${attack} damage!`);
      } else {
        attack = this.getRandomValue(this.player.minAttack, this.player.maxAttack, false) + 25;
        console.log(`Player special attacked for ${attack} damage!`);
      }
      this.monster.health = this.changeHealth(this.monster.health, this.monster.maxHealth, attack, false);
      console.log(`Monster health now ${this.monster.health}`);
      console.log(`---`);
      this.checkDeath();
      this.player.specialRecharge = this.specialRecharge(this.player.specialRecharge);
      this.attackPlayer();
      this.game.currentRound ++;
    },

    attackPlayer() {
      console.log(`COUNTER ATTACK`);
      console.log(`Player health: ${this.player.health}`);
      console.log(`Monster health: ${this.monster.health}`);
      let attack = this.getRandomValue(this.monster.minAttack, this.monster.maxAttack, true);
      this.player.health = this.changeHealth(this.player.health, this.player.maxHealth, attack, false);
      console.log(`Monster attacked for ${attack} damage!`);
      console.log(`Player health now ${this.player.health}`);
      console.log(`---`);
      this.checkDeath();
    },
    healPlayer() {
      console.log(`ROUND ${this.game.currentRound}`);
      console.log(`Player health: ${this.player.health}`);
      console.log(`Monster health: ${this.monster.health}`);
      let heal = this.getRandomValue(this.player.minHeal, this.player.maxHeal);
      if ((this.player.health + heal) > this.player.maxHealth) {
        console.log(`Player max healed for ${this.player.maxHealth - this.player.health} points`);
      } else {
        console.log(`Player healed for ${heal} points`)
        };
      this.player.health = this.changeHealth(this.player.health, this.player.maxHealth, heal, true);
      console.log(`Player health now ${this.player.health}`);
      console.log(`---`);
      this.attackPlayer();
      this.checkDeath();
      this.player.specialRecharge = 3;
      this.game.currentRound ++;
    }
  }
});

//Link it to corrosponding HTML component
APP.mount('#game');
