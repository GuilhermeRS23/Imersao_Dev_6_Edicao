let nome = 'Guilherme';
let valor = 30;

let cotacaoDoDolar = 4.86;
let cotacaoDoLibras = 6.04;
let cotacaoDoEuro = 5.28;

let valorEmReisDolar = (valor * cotacaoDoDolar).toFixed(2);
let valorEmReisLibras = (valor * cotacaoDoLibras).toFixed(2);
let valorEmReisEuro = (valor * cotacaoDoEuro).toFixed(2);

alert(`Conversor de Moeda \n
Olá, ${nome}, o valor de  US$${valor} é equivalente a R$ ${valorEmReisDolar}. \n
O valor de £${valor} é equivalente a R$ ${valorEmReisLibras}. \n
O valor de €${valor} é equivalente a R$ ${valorEmReisEuro}. \n`);

//Graus
let grausCelsius = 32;

let grausEmFahreheit = (grausCelsius * (9 / 5) + 32);
let grausEmKevin = grausCelsius + 273.15;

alert(`Coversor de Temperatura\n
${grausCelsius}°C em fahrenheit é igual a ${grausEmFahreheit}°F. \n
Em Kevin é equivalente a ${grausEmKevin}K.`);

//Bitcoin
let cotacaoDoBit = 178583.80;
let Bitcoin = 5;

let valorConvertido = (cotacaoDoBit * Bitcoin).toFixed(2);

alert(`${Bitcoin} Bitcoin é equivalente a R$${valorConvertido}`);