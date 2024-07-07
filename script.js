function hw1_1() {
	console.clear();
	let degreesCelsius = 100;
	let degreesFahrenheit = (9 / 5) * degreesCelsius + 32;
	console.log(`Температура в градусах Цельсия: ${degreesCelsius}`);
	console.log(`Температура в градусах Фаренгейта: ${degreesFahrenheit}`);
}

function hw1_2() {
	console.clear();
	const myName = "Artem";
	let admin = myName;
	console.log(`admin: ${admin}`);
}

function hw2_1() {
	console.clear();
	let num1 = +prompt("Введите пеервое число num1: ", "1");
	let num2 = +prompt("Введите второе число num2: ", "5");
	console.log(num1 <= 1 ? `Условие "num1(${num1})<=1" выполнено.` : `Условие "num1(${num1})<=1"  не выполнено.`);
	console.log(num2 >= 3 ? `Условие "num2(${num2})>=3" выполнено.` : `Условие "num2(${num2})>=3""  не выполнено.`);
}

function hw2_2() {
	console.clear();
	let test = true;
	console.log(test === true ? "+++" : "---");
}

function hw2_3() {
	console.clear();
	let day = +prompt("Введите число из интервала от 1 до 31: ", "11");
	if (day >= 1 && day <= 10) {
		console.log(`Число ${day} попадает в первую декаду месяца.`);
	} else if (day >= 11 && day <= 20) {
		console.log(`Число ${day} попадает во вторую декаду месяца.`);
	} else if (day >= 21 && day <= 31) {
		console.log(`Число ${day} попадает в третью декаду месяца.`);
	} else {
		console.log(`Ошибка ввода.`);
	}
}

function hw2_4() {
	console.clear();
	let userNum = +prompt("Введите положительное целое число: ", "4321");
	console.log(
		`В числе ${userNum} количество сотен: ${((userNum / 100) ^ 0) % 10}, десятков:
		${((userNum / 10) ^ 0) % 10}, единиц: ${userNum % 10}.`);
}

function hw3_1() {
	console.clear();
	const numDegree = (degree = 3) => {
		let num = +prompt("Введите число", 5);
		return num ** degree;
	};

	console.log(`${numDegree() + numDegree()}`);
}

function hw3_2() {
	console.clear();
	const salaryWithoutTax = (tax = 13) => {
		const inputError = "Ошибка ввода!";
		let salary = prompt("Введите размер Вашей заработной платы: ", 100000);
		return isNaN(salary) ? inputError : (salary * (100 - tax)) / 100;
	};

	console.log(`Размер заработной платы за вычетом налогов равен: ${salaryWithoutTax()}`);
}

function hw3_3() {
	console.clear();
	const maxNum = () => {
		let num1 = +prompt("Введите певрвое число:", 1);
		let num2 = +prompt("Введите второе число:", 2);
		let num3 = +prompt("Введите третье число:", 3);
		if (isNaN(num1 + num2 + num3)) {
			return "Input Error!";
		}
		if (num1 >= num2 && num1 >= num3) {
			return num1;
		} else if (num2 >= num3) {
			return num2;
		} else {
			return num3;
		}
	};

	console.log(`Максимальное введенное число: ${maxNum()}`);
}

function hw3_4() {
	console.clear();
	let num1 = +prompt("Введите певрвое число:", 5);
	let num2 = +prompt("Введите второе число:", 7);
	const sum = (num1, num2) => num1 + num2;
	const dif = (num1, num2) => (num1 >= num2 ? num1 - num2 : num2 - num1);
	const mult = (num1, num2) => num1 * num2;
	const division = (num1, num2) => num1 / num2;

	console.log(
		`Введены числа: ${num1}, ${num2}. Сумма: ${sum(num1, num2)}, разность: ${dif(num1, num2)}, умножение: ${mult(
			num1,
			num2
		)}, деление: ${division(num1, num2)}.`
	);
}
