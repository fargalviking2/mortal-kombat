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

			types: [
				{ id: 1, title: 'hervam' },
				{ id: 2, title: 'hervam2' },
			],
		}
	},
	// methods: {
	// 	counterLososPlus() {
	// 		this.counterLosos++;
	// 	}
	// },
	// computed: {

	// },
}
// Vue.createApp(App).mount('#app')
const app = Vue.createApp(App)
app.component('type-block', {
	data() {
		return {
			count: 0
		}
	},
	props: ['actualCost', 'needCost',],
	template: `
	<template v-if="actualCost == needCost">
	<button v-if="count < 1" @click="count++"
		class="grid-template-pizza__to-bascet-button">В
		корзину</button>
	<div v-else class="grid-template-pizza__in-bascet">
		<div class="grid-template-pizza__gal">
			<img src="img/gal.svg" alt="">
		</div>
		<button @click="count--" type="submit" class="counter--">-</button>
		<div class="counter">{{count}}</div>
		<button @click="count++" type="submit" class="counterplus">+</button>
	</div>
</template>
`
})
// app.mount('#type-blocks')
app.mount('#app')
