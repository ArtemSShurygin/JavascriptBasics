export function hw4_1() {
	console.clear();
	for (let i = 0; i <= 10; i++) {
		if (i === 0) {
			console.log(`${i} - это ноль`);
		} else if (i % 2 !== 0) {
			console.log(`${i} - нечетое число`);
		} else {
			console.log(`${i} - четое число`);
		}
	}
}

export function hw4_2() {
	console.clear();
	const array = [1, 2, 3, 4, 5, 6, 7];
	array.splice(3, 2);
	console.log(array);
}

export function hw4_3() {
	console.clear();
	const array = [];
	let sumArrayNum = 0;
	let minArrayNum = Infinity;
	let findNum = 3;
	let findNumCount = 0;

	for (let i = 0; i <= 5; i++) {
		array.push(Math.floor(Math.random() * (Math.ceil(9) - Math.floor(0) + 1)));
		sumArrayNum += array[i];
		if (array[i] < minArrayNum) {
			minArrayNum = array[i];
		}
		if (array[i] === findNum) {
			findNumCount++;
		}
	}

	console.log(`Массив: ${array}`);
	console.log(`Cумму элементов этого массива: ${sumArrayNum}`);
	console.log(`Минимальное число: ${minArrayNum}`);
	console.log(`Цифра ${findNum} встречается раз: ${findNumCount}`);
}

export function hw4_4() {
	console.clear();
	let stringX = "";
	for (let i = 1; i <= 20; i++) {
		stringX += "x";
		console.log(stringX);
	}
}

