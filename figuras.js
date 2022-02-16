//Codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrados miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrados es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado ** 2;
console.log("El area del cuadrados es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`la altura del triangulo es de : ${alturaTriangulo}`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perimetro del triangulo es de : ${perimetroTriangulo}`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Codigo del Circulos
console.group("Circulos");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perimetro del Circulos es de : ${perimetroCirculo} cm`);

const areaCirculo = (radioCirculo**2) * PI;
console.log("El area del Circulos es: " + areaCirculo + "cm^2");

console.groupEnd();