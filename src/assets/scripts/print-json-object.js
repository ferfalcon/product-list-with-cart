export default function printJsonObject(jsonObject) {	

	let articlesHTML = '';
	jsonObject.forEach(product => {
		articlesHTML += `
			<li>
			<article>
				<picture>
					<source media="(min-width: 64rem)" srcset="${product.image.desktop}">
					<source media="(min-width: 32rem)" srcset="${product.image.tablet}">
					<img src="${product.image.mobile}" alt="${product.name}">
				</picture>
				<h2>${product.name}</h2>
				<span>${product.category}</span>
				<b>${product.price}</b>
				<button type="button">
					Add to Cart
				</button>
			</article>
			</li>
		`;
	});

	const articleList = document.querySelector('ul');
	articleList.innerHTML = articlesHTML;
}