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
      },
      monster: {
        health: 130,
        maxHealth: 130,
        maxAttack: 20,
        minAttack: 2
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
        if ((current + heal) >= max) {
          return max;
        } else {
          return (current + heal);
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

    attackMonster(special) {
      let attack = 0;
      console.log(`ATTACK ROUND`);
      console.log(`Player health: ${this.player.health}`);
      console.log(`Monster health: ${this.monster.health}`);
      if (!special) {
        attack = this.getRandomValue(this.player.minAttack, this.player.maxAttack, false);
        console.log(`Player attacked for ${attack} damage!`);
      } else {
        attack = this.getRandomValue(this.player.minAttack, this.player.maxAttack, false) + 5;
        console.log(`Player special attacked for ${attack} damage!`);
      }
      this.monster.health = this.changeHealth(this.monster.health, this.monster.maxHealth, attack, false);
      console.log(`Monster health now ${this.monster.health}`);
      console.log(`---`);
      this.checkDeath();
      this.attackPlayer();
    },

    attackPlayer() {
      console.log(`COUNTER ATTACK ROUND`);
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
      console.log(`ATTACK ROUND`);
      console.log(`Player health: ${this.player.health}`);
      console.log(`Monster health: ${this.monster.health}`);
      let heal = this.getRandomValue(this.player.health, this.player.maxHealth, heal, true);
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
    }
  }
});

//Link it to corrosponding HTML component
APP.mount('#game');
