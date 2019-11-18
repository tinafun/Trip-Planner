const mapboxgl = require("mapbox-gl");
const markerFactory = (type, coor) => {
  const markerDomEl = document.createElement("div")
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "activity") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
  } else if (type === "hotel") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)"
  } else if (type === "restaurant") {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)"
  }
  console.log(markerDomEl)
  return new mapboxgl.Marker(markerDomEl).setLngLat(coor)
}

module.exports = markerFactory
