console.log('HELLO WORLD')

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const markerFactory = require("./marker")


mapboxgl.accessToken = 'pk.eyJ1IjoidGluYWZ1biIsImEiOiJjazM0bjJ5ZDAwem9iM2JtbTEzcWVjYzV2In0.lOasmhJCmHmYpFk4ttIN1Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available
});


const marker = markerFactory("restaurant", [-74.009, 40.705])
const marker2 = markerFactory("hotel", [-74.008040, 40.705372])
marker.addTo(map)
marker2.addTo(map)
