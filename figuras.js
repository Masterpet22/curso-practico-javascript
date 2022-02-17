//Codigo del cuadrado

/**
 * @param {number} lado
 */
function perimetroCuadrado(lado){
	return lado * 4;
}

/**
 * @param {number} lado
 */
function areaCuadrado(lado){
	return lado ** 2;
}


//Codigo del triangulo
/**
 * @param {number} lado1
 * @param {number} lado2
 * @param {number} base
 */
function perimetroTriangulo (lado1, lado2, base){
	return (lado1 + lado2) + base;
}
/**
 * @param {number} base
 * @param {number} altura
 */
function areaTriangulo(base, altura){
	return (base * altura) / 2;
}

//Codigo del Circulos
/**
 * @param {number} radio
 */
const PI = Math.PI;
/**
 * @param {number} radio
 */
function diametroCirculo(radio){
	return radio * 2;
}

/**
 * @param {number} radio
 */
function perimetroCirculo(radio){
	const diametro = diametroCirculo(radio);
	return diametro * PI;
}

/**
 * @param {number} radio
 */
function areaCirculo(radio){
	return (radio**2) * PI;
}

//Aqui calculamos los elementos del cuadrado
function calcularPerimetroCuadrado(){
	// @ts-ignore
	const input = document.getElementById("cuadrado").value;
	
	const perimetro = perimetroCuadrado(input);
	alert(perimetro);
}
function calcularAreaCuadrado(){
	// @ts-ignore
	const input = document.getElementById("cuadrado").value;
	
	const perimetro = areaCuadrado(input);
	alert(perimetro);
}

//Aqui calculamos los elementos del triangulo
function calcularPerimetroTriangulo(){
	// @ts-ignore
	const input = Number(document.getElementById("triangulo").value);
	
	const perimetro = perimetroTriangulo(input,input,input);
	alert(perimetro);
}
function calcularAreatriangulo(){
	// @ts-ignore
	const input = document.getElementById("triangulo").value;
	
	const perimetro = areaTriangulo(input,input);
	alert(perimetro);
}

//Aqui calculamos los elementos del circulo
function calcularPerimetroCirculo(){
	// @ts-ignore
	const input = document.getElementById("circulo").value;
	
	const perimetro = perimetroCirculo(input);
	alert(perimetro);
}
function calcularAreaCirculo(){
	// @ts-ignore
	const input = document.getElementById("circulo").value;
	
	const perimetro = areaCirculo(input);
	alert(perimetro);
}