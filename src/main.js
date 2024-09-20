import loadData from './assets/scripts/async-fetch-json-data.js';
import printProducts from './assets/scripts/print-products.js';

const productsData = "/data.json";

loadData(productsData)
	.then (data => {
		printProducts(data)
	});