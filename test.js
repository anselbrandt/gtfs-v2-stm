const feed = require("./sample_feed.json");

const currentTime = new Date().toLocaleTimeString();
const timestamp = new Date(feed.header.timestamp * 1000).toLocaleTimeString();
console.log(`current time:     ${currentTime}
GTFS timestamp:   ${timestamp}`);

const vehicles = feed.entity;

const trains = [];

vehicles.forEach((vehicle, index) => {
  if (Object.keys(vehicle.vehicle).length > 7) {
    trains.push(index);
  }
});

trains.forEach((id) => console.log(vehicles[id]));
