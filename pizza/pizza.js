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
			counter: 0,
			counter2: 0,
			counter3: 0,
			counter4: 0,
			infoCounter: 1,
			infoCounter2: 1,
			infoCounter3: 1,
			infoCounter4: 1,
		}
	},
	methods: {

	},
	computed: {


	},
}

Vue.createApp(App).mount('#app')