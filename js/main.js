////
// Author : David Arango
///
$(document).ready(() => {
	// Api variables from NASA and NY Times
	const nasaUrl = 'https://api.nasa.gov/planetary/apod?date=';
	const nasaUrlTwo = 'http://crossorigin.me/https://api.nasa.gov/techport/api/items/10856.json?api_key=';
	const apiKey = '&api_key=yt7WhJOrDXyKi63Q7jMDj8A59xyWfTgfdBqW11m8';
	// Elements where Api JSON objects will be appended to
	const picOfDay = $('#pic-of-day');
	const newsOfMars = $('#news-of-mars');
	const picOfDayButton = $('#button-one');
	const picOfMarsButton = $('#button-two');
	const nasaImage = $('#nasa-image');
	// Call back function returns a promise of a nasa JSON object
	async function getData() {
		let randYear = Math.floor(Math.random() * 18 + 2000);
		let randMonth = Math.floor(Math.random()* 13);
		let randDay = Math.floor(Math.random()* 30);
		console.log(randYear);
		try {
			let response = await fetch(`${nasaUrl}${randYear}-${randMonth}-${randDay}${apiKey}`);
			if(response.ok) {
				let jsonResponse = await response.json();
				picOfDay.css('display', 'block');
				picOfDay.css('height', '20rem');
				nasaImage.attr('src', jsonResponse.hdurl);
				console.log(jsonResponse);
			}

		}catch(error){
			console.log(error);
		}
	};
	// Call back function returns a promise of a NY Times JSON object
	async function getDataTwo() {
		try {
			let response = await fetch(nasaUrlTwo + apiKey);
			if(response.ok) {
				let jsonResponse = await response.json();
				console.log(jsonResponse);
			}
		}catch(error) {
			console.log(error);
		}
	};
	// Event Listeners
	picOfDayButton.on('click', getData);
	picOfMarsButton.on('click', getDataTwo);

});

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
};
// Child class 
class SpaceCraftOne extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._speed = 24000;
		this._timeToMars = '400 Days';
	}
};
// Child class 
class SpaceCraftTwo extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._price = 5000;
	}
};
// Child class 
class SpaceCraftThree extends SpaceCraft {
	constructor(model, capacity, price) {
		super(model, capacity, price);
		this._speed = 500000;
		this._timeToMars = '1 Day';
		this._price = 10000;
	}
};
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
const rightButton = document.getElementById('right-selection');
// Left button, when on click changes vehicle and stats
const leftButton = document.getElementById('left-selection');
// Where the rocket info stats will be appended to
const rocketInfo = document.getElementById('rocket-info');
// Where the rocket seat stats will populated
const rocketSeats = document.getElementById('rocket-seats');
// spaceCraft will be appended to this section
const vehicle = document.getElementById('vehicle');
// Ticket price total will be shown here
const total = document.getElementById('total');
// This button will execute a callback function and append ticket information 
const submitButton = document.getElementById('submit');
// This button will activate the take off animation into space
const buyButton = document.getElementById('purchase-button');
// Grabbing this element to change background into a space background
const vehicleBackground = document.getElementById('vehicle-container'); 
// Grabbed this element in order to change display property to none when user clicks the 'buy' button
const landingPad = document.getElementById('landing-pad');
// Grabbed this element in order to change display property to none when user clicks the 'buy' button
const buttonContainer =  document.getElementById('button-container');
// This button opens up the news menu located below the spaceCraft on the app
const openNewsMenuButton = document.getElementById('news-menu');
// This is the element whose class I am adding and removing to add transition affect
const newsMenuContainer = document.getElementById('nasa-news-container');
// This element listens for closing function to close news menu
const closeNewsMenuButton = document.getElementById('close-news-menu');
// This button listens for function that opens the stats menu
const openStatsButton = document.getElementById('open-stats');
// Grabbed this element to append and remove class that allows transition affect
const closeStatsButton = document.getElementById('close-stats');

const statsContainer = document.getElementById('stats');

const openTicketButton = document.getElementById('open-tickets');

const closeTicketButton = document.getElementById('close-tickets');

const ticketContainer = document.getElementById('right-container');

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
};
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
};
// New Ticket class for calculating ticket prices
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
	//File/Form Handler fucntion has a conditional which checks to see what aircraft should be assigned what price
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
			console.log(vehicle.src);
		}
	}
	// Estimates and appends ticket prices
	print(numOfChild, numOfAdult, numOfSenior, numOfPet, type) {
		//Apollo variables
		// Child price variables
		const childDiscount = 75;
		const childProduct = type * childDiscount;
		const childAmountSaved = childProduct / 100;
		const childTotalSaved = childAmountSaved * numOfChild
		const childSum = type - childAmountSaved;
		const childTotal = childSum * numOfChild;
		// Adult price variables
		const adultTotal = type * numOfAdult;
		// Senior price variables
		const seniorDiscount = 15;
		const seniorProduct = type * seniorDiscount;
		const seniorAmountSaved = seniorProduct / 100;
		const seniorTotalSaved = seniorAmountSaved * numOfSenior;
		const seniorSum = type - seniorAmountSaved;
		const seniorTotal = seniorSum * numOfSenior;
		// Pet price variables
		const petTotal = type * numOfPet;
		// Price variables total
		const grandTotal = childTotal + adultTotal + petTotal;
		// This appends calculations based on user input of passenger counts
			total.innerHTML = `
				<li class="total_price_info"> Children(${numOfChild}): $${childTotal} - You Saved $${childTotalSaved}! </li>
				<li class="total_price_info"> Adults(${numOfAdult}): $${adultTotal}</li>
				<li class="total_price_info"> Seniors(${numOfSenior}): $${seniorTotal} - You Saved $${seniorTotalSaved}! </li>
				<li class="total_price_info"> Pets(${numOfPet}): $${petTotal}</li>
				<li class="total_price_info"> ${numOfChild} Children, ${numOfAdult} Adults, ${numOfSenior} Seniors, ${numOfPet} Pets</li>
				<li class="total_price_info"> Grand Total: $${grandTotal}</li>`;
	}
};
// Call back function to print ticket price on screen
const printTicket = () => {
	const numOfChild = document.getElementById('child').value;
	const numOfAdult = document.getElementById('adult').value;
	const numOfSenior = document.getElementById('senior').value;
	const numOfPet = document.getElementById('pet').value;
	const ticket = new Ticket();
	ticket.ticketPrice(numOfChild, numOfAdult, numOfSenior, numOfPet);	
};
// Call back function to animate spaceCraft upon buying ticket
const toMars = () => {
	ticketContainer.className = 'right_container';
	vehicle.className = 'space_craft space_craft_takeOff';
	const spaceLaunch = setTimeout(() => {
		if(vehicle.style.visibility === 'visible') {
			buttonContainer.style.display = 'none';
			landingPad.style.visibility = 'hidden';
			vehicleBackground.style.height = '100%';
			vehicleBackground.style.background = `black url('file:///Users/davidarango/Desktop/my-work/ticket-to-mars/img/space.gif') no-repeat center`;
			vehicle.style.transition = 'unset';
			vehicle.className = 'space_craft';
		}else {
			alert('Please choose a SpaceCraft');
		}
	}, 1700);
};
// Call back function which slides the news menu up
const newsSlideUp = () => {
	newsMenuContainer.className = 'nasa_news_container nasa-news-container-active';
};
// Call back function which slides down the news menu
const newsClose = () => {
	newsMenuContainer.className = 'nasa_news_container';
};

const statsOpen = () => {
	statsContainer.className = 'left_container left_container-active';
	console.log(statsContainer.className);
};

const statsClose = () => {
	statsContainer.className = 'left_container';
};

const openTickets = () => {
	ticketContainer.className = 'right_container right_container-active';
	console.log(ticketContainer);
};

const closeTickets = () => {
	ticketContainer.className = 'right_container';
};

// Event Listeners
rightButton.addEventListener('click', selectVehicleRight);
leftButton.addEventListener('click', selectVehicleLeft);
submitButton.addEventListener('click', printTicket);
buyButton.addEventListener('click', toMars);
openNewsMenuButton.addEventListener('click', newsSlideUp);
closeNewsMenuButton.addEventListener ('click', newsClose);
openStatsButton.addEventListener('click', statsOpen);
closeStatsButton.addEventListener('click', statsClose);
openTicketButton.addEventListener('click', openTickets);
closeTicketButton.addEventListener('click', closeTickets);


