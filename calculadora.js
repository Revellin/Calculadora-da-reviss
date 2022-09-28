class Calculadora {
	somar(a, b) {
		return a + b;
	}

	subtrair(a, b) {
		return a - b;
	}

	multiplicar(a, b) {
		return a * b;
	}

	dividir(a, b) {
		return a / b;
	}
}

var calculadora = new Calculadora();

function soma() {
	var tn1 = document.getElementById("n1");
	var tn2 = document.getElementById("n2");

	var n1 = Number(tn1.value);
	var n2 = Number(tn2.value);

	var resp = calculadora.somar(n1, n2);

	var result = document.getElementById("resp");

	result.innerHTML = `${n1} + ${n2} = ${resp}`;
}

function dividir() {
	var tn1 = document.getElementById("n1");
	var tn2 = document.getElementById("n2");

	var n1 = Number(tn1.value);
	var n2 = Number(tn2.value);

	var resp = calculadora.dividir(n1, n2);

	var result = document.getElementById("resp");

	result.innerHTML = `${n1} / ${n2} = ${resp}`;
}

function subtrair() {
	var tn1 = document.getElementById("n1");
	var tn2 = document.getElementById("n2");

	var n1 = Number(tn1.value);
	var n2 = Number(tn2.value);

	var resp = calculadora.subtrair(n1, n2);

	var resultado = document.getElementById("resp");

	resultado.innerHTML = `${n1} - ${n2} = ${resp}`;
}

function multiplicar() {
	var tn1 = document.getElementById("n1");
	var tn2 = document.getElementById("n2");

	var n1 = Number(tn1.value);
	var n2 = Number(tn2.value);

	var resp = calculadora.multiplicar(n1, n2);

	var result = document.getElementById("resp");

	result.innerHTML = `${n1} * ${n2} = ${resp}`;
}

function excluir() {
	var resp = document.getElementById("resp");
	var tn1 = document.getElementById("n1");
	var tn2 = document.getElementById("n2");
	

	tn1.innerHTML = ""
	tn2.innerHTML = ""
	resp.innerHTML = "";
}
