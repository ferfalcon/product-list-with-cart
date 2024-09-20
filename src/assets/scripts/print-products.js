export default function printJsonObject(jsonObject) {	

	let productsMarkup = '';
	jsonObject.forEach( product => {
		productsMarkup += `
			<li>
			<article>
				<picture>
					<source media="(min-width: 64rem)" srcset="${product.image.desktop}">
					<source media="(min-width: 32rem)" srcset="${product.image.tablet}">
					<img src="${product.image.mobile}" alt="${product.name}">
				</picture>
				<h2>${product.name}</h2>
				<p>${product.category}</p>
				<b>${product.price}</b>
				<button type="button">
					Add to Cart
				</button>
			</article>
			</li>
		`;
	});

	document.querySelector('[data-products-list]').innerHTML = productsMarkup;
}