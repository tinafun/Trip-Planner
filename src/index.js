console.log('HELLO WORLD')

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken = 'pk.eyJ1IjoidGluYWZ1biIsImEiOiJjazM0bjJ5ZDAwem9iM2JtbTEzcWVjYzV2In0.lOasmhJCmHmYpFk4ttIN1Q';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});