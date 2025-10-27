mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsc21wYXJrIiwiYSI6ImNtaDlyZjNreTFjYnoybXB1bHJqa29lZWgifQ.zynQjHCJTpEk_7Po2XEhZA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/rachelsmpark/cmh9ripoj00qm01smceizfkhr', //Your Style URL goes here
  center: [-118.253777, 34.144427], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 15// starting zoom
    });