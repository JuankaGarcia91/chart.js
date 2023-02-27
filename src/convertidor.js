// URL de la API que proporciona los datos de cambio de divisas
const apiUrl = 'https://api.exchangeratesapi.io/latest';

// Monedas que queremos convertir
const fromCurrency = 'USD';
const toCurrency = 'EUR';

// Llamada a la API utilizando fetch
fetch(`${apiUrl}?base=${fromCurrency}&symbols=${toCurrency}`)
  .then(response => response.json())
  .then(data => {
    // procesamiento de los datos recibidos de la API
    const rate = data.rates[toCurrency];
    console.log(`1 ${fromCurrency} = ${rate} ${toCurrency}`);
  })
  .catch(error => {
    // manejo de errores
    console.error(error);
  });
