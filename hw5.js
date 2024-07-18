export function hw5_1() {
	console.clear();

	const numbers = {
		keyin1: 1,
		keyin2: 2,
		keyin3: 3,
		keyin4: 4,
		keyin5: 5,
		keyin6: 6,
		keyin7: 7,
	};

	const findMumbersMoreThanXNumInObj = (object, XNum) => {
		return Object.values(object).filter((item) => item >= XNum);
	};

	console.log(`Все значения больше или равные 3: ${findMumbersMoreThanXNumInObj(numbers, 3)}`);
}

export function hw5_2() {
	console.clear();

	const post = {
		author: "John", // вывести этот текст
		postId: 23,
		comments: [
			{
				userId: 10,
				userName: "Alex",
				text: "lorem ipsum",
				rating: {
					likes: 10,
					dislikes: 2, // вывести это число
				},
			},
			{
				userId: 5, // вывести это число
				userName: "Jane",
				text: "lorem ipsum 2", // вывести этот текст
				rating: {
					likes: 3,
					dislikes: 1,
				},
			},
		],
	};
	console.log(
		post.author +
			"\n" +
			post.comments[0].rating.dislikes +
			"\n" +
			post.comments[1].userId +
			"\n" +
			post.comments[1].text
	);
}

export function hw5_3() {
	console.clear();

	const products = [
		{
			id: 3,
			price: 200,
		},
		{
			id: 4,
			price: 900,
		},
		{
			id: 1,
			price: 1000,
		},
	];

	products.forEach((element) => {
		element.price = Math.round(element.price * 115) / 100;;
	});

	console.log(products);
}

export function hw5_4() {
	console.clear();

	const products = [
		{
			id: 3,
			price: 127,
			photos: ["1.jpg", "2.jpg"],
		},
		{
			id: 5,
			price: 499,
			photos: [],
		},
		{
			id: 10,
			price: 26,
			photos: ["3.jpg"],
		},
		{
			id: 8,
			price: 78,
		},
	];

	const findProductsWithPhotos = products.filter((product) => {
		if (Array.isArray(product.photos) && product.photos.length != 0) return true;
		return false;
	});

	const productsSortedPriceMinToMax = products.sort((product_a, product_b) => product_a.price - product_b.price);

	console.log(findProductsWithPhotos);
	console.log(productsSortedPriceMinToMax);
}

export function hw5_5() {
	console.clear();

	const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
	const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
	const weekday = {};

	const twoArraysInObject = (toObject, keyArray, valueArray) => {
		if (Array.isArray(keyArray, valueArray) && keyArray.length == valueArray.length && keyArray.length != 0) {
			for (let i = 0; i < keyArray.length; i++) {
				toObject[keyArray[i]] = valueArray[i];
			}
		} else console.log("error");
	};
	twoArraysInObject(weekday, en, ru);

	console.log(weekday);
}
