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
		`В числе ${userNum} количество сотен: ${((userNum / 100) ^ 0) % 10}, десятков: ${
			((userNum / 10) ^ 0) % 10
		}, единиц: ${userNum % 10}.`
	);
}
