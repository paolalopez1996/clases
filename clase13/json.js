const vehicle =

{
	"name": "Snowspeeder",
	"model": "t-47 airspeeder",
	"manufacturer": "Incom corporation",
	"cost_in_credits": "unknown",
	"length": "4.5",
	"max_atmosphering_speed": "650",
	"crew": "2",
	"passengers": "0",
	"cargo_capacity": "10",
	"consumables": "none",
	"vehicle_class": "airspeeder",
	"pilots": [
		"https://swapi.dev/api/people/1/",
		"https://swapi.dev/api/people/18/"
	],
	"films": [
		"https://swapi.dev/api/films/2/"
	],
	"created": "2014-12-15T12:22:12Z",
	"edited": "2014-12-20T21:30:21.672000Z",
	"url": "https://swapi.dev/api/vehicles/14/"
}


console.log(vehicle.films[0]);
console.log(vehicle.pilots[1]);