const fetchData = () => {
	const URL = 'https://pokeapi.co/api/v2/pokemon/';
	fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			console.log(data.results);
			let contentContainer = document.getElementsByClassName(
				'content'
			)[0];

			data.results.forEach((obj) => {
				let child = createCard(obj);
				contentContainer.appendChild(child);
			});
		})
		.catch((err) => {
			console.log(err);
		});
};

const createCard = (obj) => {
	let htmlString =
		'<div class="card"> <div class="image"> Some Image </div> <div class="name"> <h4>  ' +
		obj.name +
		' </h4></div> <div class="url"> <a href="' +
		obj.url +
		'"> ' +
		obj.url +
		' </a> </div> </div>';

	let doc = new DOMParser().parseFromString(htmlString, 'text/html');

	let child = doc.body.firstChild;

	return child;
};

fetchData();
