// const myApi = 'CvpD6vPiCFT6eyc71AaRtkBtXMga9ujqZq6fgwtb';
// const techPortUrl = 'https://api.nasa.gov/techport/api/items/{id_parameter}';
// $(document).ready(() => {
// 	async function getData() {
// 		const rocketsUrl = 'https://api.spacexdata.com/v1/vehicles';
// 		try {
// 			let response = await fetch(rocketsUrl);
// 			if(response.ok) {
// 				const jsonResponse = await response.json();
// 				const rocket = jsonResponse[0];
// 				$('#rocket').append(JSON.stringify(rocket));
// 				console.log(jsonResponse, rocket);
// 			}
// 			// throw new Error('Request failed!');
// 		}catch(error) {
// 			console.log(error);
// 		}
// 	}
// 	$('#ticket_button').on('click', getData);
// });
class SpaceCraft {
	constructor(model, capacity) {
		this._model = model;
		this._capacity = capacity;
		this._speed = 36000;
		this._destination = 'Mars';
		this._timeToMars = '300 Days';
	}
	get model() {
		return this._model;
	}
	get capacity() {
		return this._capacity;
	}
	get speed() {
		return this._speed;
	}
	get destination() {
		return this._destination;
	}
	get timeToMars() {
		return this._timeToMars;
	}
	seatsTaken() {
		let amount = this._capacity;
		let onBoard = amount - Math.floor(Math.random() * amount);
		let total = amount - onBoard;
		if(onBoard >= amount) {
			return `<li class='seats_info_list'> Sorry this vehicle is full </li>`;
		}else {
			return `
			<li class='seats_info_list'> This shuttle can hold ${amount} passengers </li>
			<li class='seats_info_list'> There are ${onBoard} seats taken </li>
			<li class='seats_info_list'> There are ${total} seats left </li> `;	
		}
	}
	info() {
		return `
		<li class='space_craft_info_list'>	Space Craft: ${this._model} </li>
		<li class='space_craft_info_list'>	Capacity: ${this._capacity} people </li>
		<li class='space_craft_info_list'>	Speed: ${this._speed}/mph </li>
		<li class='space_craft_info_list'>	Destination: Planet ${this._destination} </li>
		<li class='space_craft_info_list'>	Time To Mars: ${this._timeToMars} </li>`;
	}
}

class SpaceCraftOne extends SpaceCraft {
	constructor(model, capacity) {
		super(model, capacity);
		this._speed = 24000;
		this._timeToMars = '400 Days'
	}
	get speed() {
		return this._speed;
	}
}
class SpaceCraftTwo extends SpaceCraft {
	constructor(model, capacity) {
		super(model, capacity);
	}
}
class SpaceCraftThree extends SpaceCraft {
	constructor(model, capacity) {
		super(model, capacity);
		this._speed = 500000;
		this._timeToMars = '10 Days';
	}
	get speed() {
		return this._speed;
	}
}

const ApolloEleven = new SpaceCraftOne('Apollo 11', 15);
const SpaceShuttle = new SpaceCraftTwo('Space Shuttle', 8);
const Ufo = new SpaceCraftThree('Ufo', 5);

const spaceCraftInfo = [ApolloEleven, SpaceShuttle, Ufo];
const spaceCraft = ['./img/apolloEleven.svg', './img/spaceShuttle.svg', './img/ufo.svg'];

const ticketButton = document.getElementById('right_selection');

let infoCounter = -1;
let spaceCraftCounter = -1;

ticketButton.addEventListener('click', () => {
	infoCounter++;
  spaceCraftCounter++;
	spaceCraftInfo.forEach(() => {
		if(infoCounter >= spaceCraftInfo.length) {
			infoCounter = 0;
		document.getElementById('rocket_info').innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
		document.getElementById('rocket_seats').innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
	}else {
		document.getElementById('rocket_info').innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
		document.getElementById('rocket_seats').innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
	}
	});
	spaceCraft.forEach(() => {
		if(spaceCraftCounter >= spaceCraft.length) {
			spaceCraftCounter = 0;
			document.getElementById('vehicle').style.background = `url(${spaceCraft[spaceCraftCounter]})`;
		}else {
			document.getElementById('vehicle').style.background = `url(${spaceCraft[spaceCraftCounter]})`;
		}
	});
});