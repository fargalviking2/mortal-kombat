// const redButton = document.querySelector('.her');
// const redBlocks = document.getElementsByClassName('grid-template-pizza__info2');
// console.log(redButton); console.log('dsds');
// redButton.addEventListener("click", function (e) {
// 	console.log('dsds');
// 	for (var i = 0; i < redBlocks.length; i++) {
// 		redBlocks[i].classList.toggle('_active');
// 		console.log('dsd');
// 	}
// });

const App = {
	data() {
		return {
			lolososCost: '379',
			chickenBlueCost: "349",
			asiaChickenCost: "279",
			italianCost: "299",

			counterLosos: 0,
			counterLosos25: 0,
			counterLosos30: 0,
			counterLosos35: 0,
			counterBlue25: 0,
			counterBlue30: 0,
			counterBlue35: 0,
			counterAsian25: 0,
			counterAsian30: 0,
			counterAsian35: 0,
			counterItalian25: 0,
			counterItalian30: 0,
			counterItalian35: 0,

			infoCounter: 1,
			infoCounter2: 1,
			infoCounter3: 1,
			infoCounter4: 1,

			basketCounter: 0,



			inBascet: 0,
			inBascetSumm: 0,
			products: [
				// 'Заметка 1', 'Заметка 2'
				// { id: 1, title: 'hervam', cost: 349 },
				// { id: 2, title: 'hervam2', cost: 349 },
				// { id: 3, title: 'hervam3', cost: 349 },
			],
		}
	},
	methods: {
		// addToBasket() {
		// 	this.counterLosos25++;
		// 	if (this.counterLosos25 !== 0) { console.log(this.counterLosos25); }
		// 	else { console.log('her'); }
		// },

		onCounter(it) {
			const newPizza = { title: 1 };
			this.inBascetSumm += Number(it.cost);

			this.inBascet++;
			newPizza.title = it.pizzaName;
			newPizza.cost = Number(it.cost);
			this.products.push(newPizza)

		},
		onCounterMinus() {
			this.inBascet--;
		},
		removeProduct(idx) {
			this.products.splice(idx, 1)
		},
		counterPlus(idx) {
			this.inBascet++;
			this.inBascetSumm += this.products[idx].cost;
			console.log(this.products[idx].cost);
		},
		counterMinus(idx) {
			this.inBascet--;
			this.inBascetSumm -= this.products[idx].cost;
		},
	},
	// computed: {

	// },
}
// Vue.createApp(App).mount('#app')
const app = Vue.createApp(App)
app.component('type-block', {
	data() {
		return {
			count: 1
		}
	},
	props: ['actualCost'],
	methods: {
		countPlus() {
			this.count++;
			this.$emit('counterPlus', {

			});
			// this.$emit('counter', {
			// 	cost: this.actualCost,
			// 	count: this.count,
			// 	pizzaName: this.pizzaName
			// });
		},
		countMinus() {
			this.count--;
			this.$emit('counterMinus', {});
		}
	},
	watch: {
		count(v) {
			if (v == 0) {
				this.$emit('counterNull', {
					// count: this.count
				});
				console.log('fss');
			}
		}
	},
	// props: ['actualCost', 'needCost',],
	template: `
	<button v-if="count < 1" @click="countPlus"
		class="grid-template-pizza__to-bascet-button">В
		корзину</button>
	<div v-else class="grid-template-pizza__in-bascet">
		<div class="grid-template-pizza__gal">
			<img src="img/gal.svg" alt="">
		</div>
		<button @click="countMinus" type="submit" class="counter--">-</button>
		<div class="counter">{{count}}</div>
		<button @click="countPlus" type="submit" class="counterplus">+</button>
	</div>
`
})
app.component('type-block2', {
	data() {
		return {
			count: 0
		}
	},
	methods: {
		addToBasket() {
			this.count++;
			if (this.count == 1) {
				this.$emit('counter', {
					cost: this.actualCost,
					count: this.count,
					pizzaName: this.pizzaName
				})
			}
			else {
				this.$emit('counter', {
					cost: this.actualCost,
					count: this.count,
					pizzaName: this.pizzaName
				})
			};

			// if (this.count !== 0) { console.log(this.actualCost); }
			// else {
			// 	console.log('her');
			// }
		},
		removeFromBasket() {
			this.count--;
			this.$emit('counterMinus', {
				count: this.count
			})
		}
	},
	props: ['actualCost', 'needCost', 'pizzaName',],
	template: `
	
	<template v-if="actualCost == needCost">
	<button v-if="count < 100" @click="addToBasket"
		class="grid-template-pizza__to-bascet-button">В
		корзину</button>
	<div v-else class="grid-template-pizza__in-bascet">
		<div class="grid-template-pizza__gal">
			<img src="img/gal.svg" alt="">
		</div>
		<button @click="removeFromBasket" type="submit" class="counter--">-</button>
		<div class="counter">{{count}}</div>
		<button @click="addToBasket" type="submit" class="counterplus">+</button>
	</div>
</template>
`
})
// app.mount('#type-blocks')
app.mount('#app')
