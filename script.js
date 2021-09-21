const search = document.querySelector('.search');
const btn = document.querySelector('.find');
const container = document.querySelector('.container');
const subregion = document.querySelector('.subregion');

search.addEventListener('keyup', e => {
	e.preventDefault();
	if (e.key == 'Enter') {
		const value = search.value;
		console.log();
		function press() {
			fetch('https://restcountries.eu/rest/v2/name/' + search.value)
				.then(res => res.json())
				.then(date => {
					// const borders1 = date[0].borders[1];

					console.log(date[0].borders);
					console.log(date[0].borders);
					const markup = `
					<div class="card">
					<img src="${date[0].flag}" />
					<p><strong>Country: </strong><span>${date[0].name} </span></p>
					<p><strong>Capital: </strong><span>${date[0].capital}</span></p>
					<p><strong>Population: </strong><span>${date[0].population}</span></p>
					</div>`;

					container.innerHTML = markup;
					search.value = '';

					const borders = date[0].borders[0];
					function card(e) {
						fetch('https://restcountries.eu/rest/v2/name/' + e)
							.then(res => res.json())
							.then(date => {
								console.log(date);
								const markup = `
								<div class="subcard">
									<p>Subregion</p>
									<img src="${date[0].flag}" />
									<p><strong>Country: </strong><span>${date[0].name}</span></p>
									<p><strong>Capital: </strong><span>${date[0].capital}</span></p>
									<p><strong>Population: </strong><span>${date[0].population}</span></p>
									</div>`;
								subregion.innerHTML = markup;
							});
					}
					card(borders);
				});
			return;
		}
		press();
		btn.addEventListener('click', press());
	}
});
