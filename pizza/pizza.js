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
			snacks: [
				{
					title: 'Салат Итальянский',
					description: 'Салат айсберг, листики рукколы, свежие огурчики и томаты черри, шарики молодой моцареллы, соус Песто и прованские травы',
					img: 'img/italianSalad.jpg',
					cost: 229, type: 'New',
					counter: 0,
					id: 1,
					// disabled: false,
				},
				{
					title: 'Салат  Греческий',
					description: 'Свежий салат айсберг, томаты черри, оливки, свежий огурец, кубики феты, оливковое масло, базилик, 205 г',
					img: 'img/grekSalad.jpg',
					cost: 169,
					counter: 0,
					id: 1
				},
				{
					title: 'Салат Цезарь с креветками',
					description: 'Отборные креветки, салат айсберг, сыр пармезан, томаты черри, итальянские травы, гренки, соус цезарь, 220 г',
					img: 'img/sezarSaladShrimps.jpg',
					cost: 249,
					counter: 0,
					id: 1
				},
				{
					title: 'Салат Цезарь',
					description: 'Копченое куриное филе, гренки, салат айсберг, томаты черри, пармезан, итальянские травы, соус цезарь, 220 г',
					img: 'img/sezarSalad.jpg',
					cost: 199,
					counter: 0,
					id: 1
				},
				{
					title: 'Томатный суп с гренками',
					description: 'Горячий суп с пшеничными гренками, оливками, сыром Пармезан на основе фирменного соуса',
					img: 'img/supGrenki.jpg',
					cost: 169,
					counter: 0,
					id: 1
				},
				{
					title: 'Томатный суп с митболами',
					description: 'Горячий суп с митболами и оливками на основе фирменного соуса',
					img: 'img/supMitball.jpg',
					cost: 184,
					counter: 0,
				},
				{
					title: 'Томатный суп острый',
					description: 'Томатный суп с копченым цыпленком, острым перчиком халапеньо, соусом Сальса и свежим луком',
					img: 'img/supOstr.jpg',
					cost: 184, type: 'Hot',
					counter: 0,
				},
				{
					title: 'Куриные кусочки',
					description: 'Нежные куриные кусочки в хрустящей панировке, 240 г',
					img: 'img/chickenPieseBig.jpg',
					cost: 299,
					counter: 0,
				},
				{
					title: 'Куриные крылья Острые 8 шт',
					description: 'Большая порция сочных крыльев из печи с острым соусом Шрирача, 315 грамм',
					img: 'img/krOs.jpg',
					cost: 349,
					counter: 0,
				},
				{
					title: 'Куриные крылья Grill',
					description: 'Большая порция сочных крыльев Grill из горячей печи, 290 г',
					img: 'img/krGr.jpg',
					cost: 349,
					counter: 0,
				},
				{
					title: 'Картофель запеченный',
					description: 'Большие порции запеченного картофеля с перцем или солью на выбор, 180г',
					img: 'img/poZa.jpg',
					cost: 169,
					counter: 0,
				},
				{
					title: 'Картофель детский Улыбка',
					description: 'Запеченные картофельные оладьи в форме смайлика, 8 шт',
					img: 'img/poCh.jpg',
					cost: 99,
					type: 'New',
					counter: 0,
				},
			],
			desserts: [
				{
					title: 'Мороженое классическое',
					description: 'Нежное ванильное мороженое, 150 гр',
					img: 'img/des1.jpg',
					cost: 99,
					type: 'cold',
					counter: 0,
				},
				{
					title: 'Мороженое с карамелью',
					description: 'Нежное ванильное мороженое с карамельным сиропом, 150 гр',
					img: 'img/des2.jpg',
					cost: 129, type: 'Cold',
					counter: 0,
				},
				{
					title: 'Мороженое с шоколадом',
					description: 'Нежное ванильное мороженое с шоколадным сиропом, 150 гр',
					img: 'img/des3.jpg',
					cost: 129, type: 'cold',
					counter: 0,
				},
				{
					title: 'Мороженое с клубникой',
					description: 'Нежное ванильное мороженое с клубничным сиропом, 150 гр',
					img: 'img/des4.jpg',
					cost: 129, type: 'cold',
					counter: 0,
				},
				{
					title: 'Рулетики с брусникой',
					description: 'Cладкие рулетики с брусникой, сгущенным молоком, только что из печи, 16 шт.',
					img: 'img/r1.jpg',
					cost: 149,
					counter: 0,
				},
				{
					title: 'Рулетики с ананасами',
					description: 'Сладкие рулетики со сгущенным молоком и сочными ананасами и пряной корицей 16 шт.',
					img: 'img/r2.jpg',
					cost: 169,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Рулетики с корицей',
					description: 'Cладкие рулетики с брусникой, сгущенным молоком, только что из печи, 16 шт.',
					img: 'img/r3.jpg',
					cost: 139,
					counter: 0,
				},
				{
					title: 'Рулетики с ананасами и брусникой ',
					description: 'Микс сочных рулетиков со сгущенным молоком: 8 шт с ананасом и корицей и 8 шт с брусникой ( 8+8 шт)',
					img: 'img/r4.jpg',
					cost: 149,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Чизкейк',
					description: 'Классический десерт из нежного творожного суфле',
					img: 'img/ch1.jpg',
					cost: 139,
					counter: 0,
				},
				{
					title: 'Чизкейк шоколадный',
					description: 'Классический десерт из нежного творожного шоколадного суфле',
					img: 'img/ch2.jpg',
					cost: 139,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Пончик с ванильной глазурью',
					description: 'Воздушный пончик с ванильной глазурью',
					img: 'img/po1.jpg',
					cost: 85,
					counter: 0,
				},
				{
					title: 'Пончик с шоколадной глазурью',
					description: 'Воздушный пончик с шоколадной глазурью и посыпкой',
					img: 'img/po2.jpg',
					cost: 85,
					counter: 0,
				},
			],
			beverages: [
				{
					title: 'Коктейль Ананасовый',
					description: 'Коктейль молочный с кусочками свежих ананасов, 390 мл',
					img: 'img/co1.jpg',
					cost: 179,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Коктейль Ягодный',
					description: 'Коктейль молочный со свежими ягодами черной смородины, 390 мл',
					img: 'img/co2.jpg',
					cost: 169,
					counter: 0,
				},
				{
					title: 'Смузи Киви',
					description: 'Коктейль фруктовый со льдом из свежих киви и банана с мятным сиропом, 390 мл',
					img: 'img/co3.jpg',
					cost: 159,
					counter: 0,
				},
				{
					title: 'Смузи Ягодный',
					description: 'Коктейль фруктовый со льдом из свежих ягод черной смородины, мякоти банана с ванильным сиропом, 390 мл',
					img: 'img/co4.jpg',
					cost: 159, type: 'New',
					counter: 0,
				},
				{
					title: 'Коктейль Шоколадный',
					description: 'Напиток из молока и мороженого с шоколадным сиропом, 390 мл',
					img: 'img/mi1.jpg',
					cost: 169,
					counter: 0,
				},
				{
					title: 'Коктейль Клубничный',
					description: 'Напиток из молока и мороженого с клубничным сиропом, 390 мл',
					img: 'img/mi2.jpg',
					cost: 169,

					counter: 0,
				},
				{
					title: 'Коктейль Классический',
					description: 'Любимый с детства напиток из молока и мороженого, 390 мл',
					img: 'img/mi3.jpg',
					cost: 149,
					counter: 0,
				},
				{
					title: 'Коктейль Айс Капучино',
					description: 'Напиток из молока и мороженого с добавлением эспрессо и шоколадным сиропом, 350 мл',
					img: 'img/mi4.jpg',
					cost: 169,
					type: 'New',
					counter: 0,
				},
				{
					title: 'Кофе Капучино',
					description: 'Горячий напиток на основе эспрессо со вспененным молоком 0,3 л',
					img: 'img/ko1.jpg',
					cost: 99,
					type: 'Hot',
					counter: 0,
				},
				{
					title: 'Кофе Латте',
					description: 'Горячий напиток на основе эспрессо с удвоенной порцией молока 0,3 л',
					img: 'img/ko2.jpg',
					cost: 109,
					type: 'Hot',
					counter: 0,
				},
				{
					title: 'Кофе Американо',
					description: 'Бодрящий напиток на основе эспрессо 0,3 л',
					img: 'img/ko3.jpg',
					cost: 89,
					type: 'Hot',
					counter: 0,
				},
				{
					title: 'Какао',
					description: 'Тонизирующий напиток из молока и какао порошка 0,3 л',
					img: 'img/ko4.jpg',
					cost: 99,
					type: 'Hot',
					counter: 0,
				},
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
		snackCounterMinus(idx) {
			this.snacks[idx].counter--; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost
			// if (this.snacks[idx].counter > 1) { this.snacks[idx].counter--; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost }
			// else { this.snacks[idx].disabled = true; this.snacks[idx].counter = 0; this.inBascet--; this.inBascetSumm -= this.snacks[idx].cost }
		},
		dessertsCounterMinus(idx) {
			this.desserts[idx].counter--; this.inBascet--; this.inBascetSumm -= this.desserts[idx].cost
		},
		beveragesCounterMinus(idx) {
			this.beverages[idx].counter--; this.inBascet--; this.inBascetSumm -= this.beverages[idx].cost
		},
		sort() {
			// var exists = this.products.some(function (product) {
			// 	return products[idx].title === this.products[idx].title
			// });
			// if (!exists) { console.log('yes'); }
		},
		scrollTo(value) {
			window.scrollTo({
				top: value,
				left: 0,
				behavior: "smooth"
			});
			console.log('dd');
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
	<transition-group name="list" tag="">
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