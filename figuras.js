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
	return lado1 + lado2 + base;
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