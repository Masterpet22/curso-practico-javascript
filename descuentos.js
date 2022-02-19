const precioBase = 120;
const descuento = 15;

/**
 * @param {number} precio
 * @param {number} descuento
 */
function calcularPrecioConDescuento(precio,descuento){
	const porcertanjePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcertanjePrecioConDescuento) / 100;

	return precioConDescuento
}

function calcularDescuento(){
	// @ts-ignore
	const btnPrecio = document.getElementById('btnPrecio').value;
	// @ts-ignore
	const btnDescuento = document.getElementById('btnDescuento').value;

	const precioConDescuento = calcularPrecioConDescuento(btnPrecio, btnDescuento);

	const resultado = document.getElementById('resultadoPrecio');
	resultado.innerText = "El precio con descuento son : $ " + precioConDescuento;
}
