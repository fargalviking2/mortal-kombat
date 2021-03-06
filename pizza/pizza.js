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
			shrimpsCost: "379",
			superMeatCost: "379",
			shrimpsTsezCost: "379",
			barbecueCost: "349",
			baronCost: "349",
			fourChesCost: "349",
			runchCost: "349",
			carbonaraCost: "349",
			// counterLosos: 0,
			// counterLosos25: 0,
			// counterLosos30: 0,
			// counterLosos35: 0,
			// counterBlue25: 0,
			// counterBlue30: 0,
			// counterBlue35: 0,
			// counterAsian25: 0,
			// counterAsian30: 0,
			// counterAsian35: 0,
			// counterItalian25: 0,
			// counterItalian30: 0,
			// counterItalian35: 0,

			// infoCounter: 1,
			// infoCounter2: 1,
			// infoCounter3: 1,
			// infoCounter4: 1,

			basketCounter: 0,

			isActive: 0,

			inBascet: 0,
			inBascetSumm: 0,
			products: [
				// 'Заметка 1', 'Заметка 2'
				// { id: 1, title: 'hervam', cost: 349 },
				// { id: 2, title: 'hervam2', cost: 349 },
				// { id: 3, title: 'hervam3', cost: 349 },
			],
			pain: [
				{ title: 'hervam', counter: 1 }
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
			let resultTwo = this.products.findIndex(item => item.title === it.pizzaName);
			console.log(resultTwo);
			console.log(it.count);
			if (resultTwo == -1) {
				const newPizza = { title: 1 };
				this.inBascetSumm += Number(it.cost);
				this.inBascet++;
				newPizza.counter = 1;
				newPizza.title = it.pizzaName;
				newPizza.cost = Number(it.cost);
				this.products.push(newPizza)
			}
			else {
				this.inBascetSumm += Number(it.cost);
				this.inBascet++;
				let resultOne = this.products.find(item => item.title === it.pizzaName);
				resultOne.counter++;
				console.log(resultOne);
			}
		},
		onCounterMinus(it) {
			this.inBascet--;
			this.inBascetSumm -= Number(it.cost);
			let resultOne = this.products.find(item => item.title === it.pizzaName);
			resultOne.counter--;
			if (resultOne.counter == 0) {
				this.removeProduct(idx)
			}
		},
		removeProduct(idx) {

			this.products.splice(idx, 1)
		},
		counterPlus(idx) {
			this.products[idx].counter++;
			this.inBascet++;
			this.inBascetSumm += this.products[idx].cost;
			console.log(this.products[idx].title);
		},
		counterMinus(idx) {
			this.products[idx].counter--;
			this.inBascet--;
			this.inBascetSumm -= this.products[idx].cost;
		},
		sort() {
			// var exists = this.products.some(function (product) {
			// 	return products[idx].title === this.products[idx].title
			// });
			// if (!exists) { console.log('yes'); }
		}
	},

}
// Vue.createApp(App).mount('#app')
const app = Vue.createApp(App)
app.component('type-block', {
	data() {
		return {
			count: 1
		}
	},
	props: ['actualCost', 'counter'],
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
			this.count = this.counter;
			this.count--;
			this.$emit('counterMinus', {});
		}
	},
	watch: {
		count(v) {
			if (v == 0) {
				console.log('ye');
				this.$emit('counterNull', {
					// count: this.count
				});

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
		<slot></slot>
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
				cost: this.actualCost,
				count: this.count,
				pizzaName: this.pizzaName
			})
		}
	},
	props: ['actualCost', 'needCost', 'pizzaName'],
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
app.component('trans', {
	template: `
	<transition name="fade" mode="out-in">
		<slot></slot>
	</transition>
	`
})
app.component('trans-gr', {
	template: `
	<transition-group name="list" tag="p">
		<slot></slot>
	</transition-group>
	`
})
app.component('number', {
	data() {
		return {
			count: 0,
			her: 0,
			tweenedNumber: 0
		}
	},
	props: ['number',],
	template: `
	<p v-if="count == 0">{{ her + ' ₽'}}</p>
	<p v-if="count != 0">{{ animatedNumber + ' ₽'}}</p>
	`,
	computed: {
		animatedNumber() {

			return this.tweenedNumber.toFixed(0)
		}
	},
	watch: {
		number(newValue) {
			this.count++;
			gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
		}
	},
	mounted: function () {
		this.her = this.number
	},

})
app.component('number2', {
	data() {
		return {
			count: 0,
			her: 0,
			tweenedNumber: 0
		}
	},
	props: ['number',],
	template: `
	<template v-if="count == 0">{{ her + ' рублей'}}</template>
	<template v-if="count != 0">{{ animatedNumber + ' рублей'}}</template>
	`,
	computed: {
		animatedNumber() {

			return this.tweenedNumber.toFixed(0)
		}
	},
	watch: {
		number(newValue) {
			this.count++;
			gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
		}
	},
	mounted: function () {
		this.her = this.number
	},

})
app.component('info', {
	data() {
		return {
			infoCounter: 1,
		}
	},
	template: `
	<button @click="infoCounter++" type="submit" class="grid-template-pizza__info"
		:class="{checked: infoCounter % 2 == 0 }">i
		<trans>
			<template v-if="infoCounter % 2 == 0">
				<slot></slot>
			</template>
		</trans>
	</button>
	`
})
// app.mount('#type-blocks')
app.mount('#app')
