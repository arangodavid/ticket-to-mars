// Parent class for spaceships
class SpaceCraft {
	constructor(model, capacity, price) {
		this._model = model;
		this._capacity = capacity;
		this._speed = 36000;
		this._destination = 'Mars';
		this._timeToMars = '300 Days';
		this._price = 2000;
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
	get price() {
		return this._price;
	}
	// Checks to see how many seats are left on what vehicle
	seatsTaken() {
		let amount = this._capacity;
		let onBoard = amount - Math.floor(Math.random() * amount);
		let total = amount - onBoard;
		if(onBoard >= amount) {
			return `
				<li class ='seats_info_list'> Sorry this vehicle is full </li> `;
		}else {
			return `
			<li class='seats_info_list'> This shuttle can hold ${amount} passengers </li>
			<li class='seats_info_list'> There are ${onBoard} seats taken </li>
			<li class='seats_info_list'> There are ${total} seats left </li> 
			<li class='seats_info_list'> NOTE: Ticket prices fluxuate based on available seats </li> `;	
		}
	}
	// Returns general information on the vehicle
	info() {
		return `
		<li class ='space_craft_info_list'>	Space Craft: ${this._model} </li>
		<li class ='space_craft_info_list'>	Capacity: ${this._capacity} people </li>
		<li class ='space_craft_info_list'>	Speed: ${this._speed}/mph </li>
		<li class ='space_craft_info_list'>	Destination: Planet ${this._destination} </li>
		<li class ='space_craft_info_list'>	Time To Mars: ${this._timeToMars} </li>
		<li class = 'space_craft_info_list'> Ticket Price: $${this._price} </li>
		<li class = 'space_craft_info_list'> NOTE: Children are 75% off, and Elderly are 15% off</li> `;
	}
}
// Child class 
class SpaceCraftOne extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._speed = 24000;
		this._timeToMars = '400 Days';
	}
}
// Child class 
class SpaceCraftTwo extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._price = 5000;
	}
}
// Child class 
class SpaceCraftThree extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._speed = 500000;
		this._timeToMars = '1 Day';
		this._price = 10000;
	}
}
// New child class instances
const ApolloEleven = new SpaceCraftOne('Apollo 11', 15);
// New child class instances
const SpaceShuttle = new SpaceCraftTwo('Space Shuttle', 8);
// New child class instances
const Ufo = new SpaceCraftThree('Ufo', 5);
// Array of child class instances
const spaceCraftInfo = [ApolloEleven, SpaceShuttle, Ufo];
// Array of aircraft images to cycle through selection
const spaceCraft = ['img/apolloEleven.svg', 'img/spaceShuttle.svg', 'img/ufo.svg'];
// Right button when on click changes vehicle and stats
const rightButton = document.getElementById('right_selection');
// Left button, when on click changes vehicle and stats
const leftButton = document.getElementById('left_selection');
// Where the rocket info stats will be appended to
const rocketInfo = document.getElementById('rocket_info');
// Where the rocket seat stats will populated
const rocketSeats = document.getElementById('rocket_seats');
// spaceCraft will be appended to this section
const vehicle = document.getElementById('vehicle');

const total = document.getElementById('total');

let infoCounter = -1;
let spaceCraftCounter = -1;
// Function below cycles through both child instances and spacecraft arrays and appends to the DOM, the selected vehicle of choice
function selectVehicleRight() {
	infoCounter++;
  	spaceCraftCounter++;
	spaceCraftInfo.forEach(() => {
		if(infoCounter >= spaceCraftInfo.length) {
			infoCounter = 0;
			rocketInfo.innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
			rocketSeats.innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
		}else {
			rocketInfo.innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
			rocketSeats.innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
		}
	});
	spaceCraft.forEach(() => {
		if(spaceCraftCounter >= spaceCraft.length) {
			spaceCraftCounter = 0;
			vehicle.style.visibility = 'visible';
			vehicle.src = `${spaceCraft[spaceCraftCounter]}`;
		}else {
			vehicle.style.visibility = 'visible';
			vehicle.src = `${spaceCraft[spaceCraftCounter]}`;
		}
	});
}
// Function below cycles through both child instances and spacecraft arrays and appends to the DOM, the selected vehicle of choice
function selectVehicleLeft() {
	infoCounter--;
	spaceCraftCounter--;
	spaceCraftInfo.forEach(() => {
		if(infoCounter < 0) {
			infoCounter = spaceCraftInfo.length - 1;
			rocketInfo.innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
		  rocketSeats.innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
		}else {
			rocketInfo.innerHTML = ` ${spaceCraftInfo[infoCounter].info()}` ;
			rocketSeats.innerHTML = ` ${spaceCraftInfo[infoCounter].seatsTaken()} ` ;
		}
	});
	spaceCraft.forEach(() => {
		if(spaceCraftCounter < 0) {
			spaceCraftCounter = spaceCraft.length - 1;
			vehicle.style.visibility = 'visible';
			vehicle.src = ` ${spaceCraft[spaceCraftCounter]} `;
		}else {
			vehicle.style.visibility = 'visible';
			vehicle.src = ` ${spaceCraft[spaceCraftCounter]} `;
		}
	});
}
rightButton.addEventListener('click', selectVehicleRight);
leftButton.addEventListener('click', selectVehicleLeft);
class Ticket {
	constructor(children, adults, seniors, pets) {
		this._children = children;
		this._adults = adults;
		this._seniors = seniors;
		this._pets = pets;
	}
	get children() {
		return this._children;
	}
	get adults() {
		return this._adults;
	}
	get seniors() {
		return this._seniors;
	}
	get pets() {
		return this._pets;
	}

	ticketPrice(numOfChild, numOfAdult, numOfSenior, numOfPet) {
		let type = 0;
		if(vehicle.src === 'file:///Users/davidarango/Desktop/my-work/ticket-to-mars/img/apolloEleven.svg') {
			type = 2000;
			this.print(numOfChild, numOfAdult, numOfSenior, numOfPet, type);
		}else if(vehicle.src === 'file:///Users/davidarango/Desktop/my-work/ticket-to-mars/img/spaceShuttle.svg'){
			type = 5000;
			this.print(numOfChild, numOfAdult, numOfSenior, numOfPet, type);
		}else if(vehicle.src === 'file:///Users/davidarango/Desktop/my-work/ticket-to-mars/img/ufo.svg') {
			type = 10000;
			this.print(numOfChild, numOfAdult, numOfSenior, numOfPet, type);
		}else {

		}
	}
	print(numOfChild, numOfAdult, numOfSenior, numOfPet, type) {
		//Apollo variables
		// Child price variables
		let childDiscount = 75;
		let childProduct = type * childDiscount;
		let childAmountSaved = childProduct / 100;
		let childTotalSaved = childAmountSaved * numOfChild
		let childSum = type - childAmountSaved;
		let childTotal = childSum * numOfChild;
		// Adult price variables
		let adultTotal = type * numOfAdult;
		// Senior price variables
		let seniorDiscount = 15;
		let seniorProduct = type * seniorDiscount;
		let seniorAmountSaved = seniorProduct / 100;
		let seniorTotalSaved = seniorAmountSaved * numOfSenior;
		let seniorSum = type - seniorAmountSaved;
		let seniorTotal = seniorSum * numOfSenior;
		// Pet price variables
		let petTotal = type * numOfPet;

			total.innerHTML = `
				<li> Children(${numOfChild}): $${childTotal} - You Saved $${childTotalSaved}! </li>
				<li> Adults(${numOfAdult}): $${adultTotal}</li>
				<li> Seniors(${numOfSenior}): $${seniorTotal} - You Saved $${seniorTotalSaved}! </li>
				<li> Pets(${numOfPet}): $${petTotal}</li>`;
	}
}
let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
	let numOfChild = document.getElementById('child').value;
	let numOfAdult = document.getElementById('adult').value;
	let numOfSenior = document.getElementById('senior').value;
	let numOfPet = document.getElementById('pet').value;
	const ticket = new Ticket();
	ticket.ticketPrice(numOfChild, numOfAdult, numOfSenior, numOfPet);	
});

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
