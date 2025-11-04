mapboxgl.accessToken = 'pk.eyJ1IjoicmFjaGVsc21wYXJrIiwiYSI6ImNtaDlyZjNreTFjYnoybXB1bHJqa29lZWgifQ.zynQjHCJTpEk_7Po2XEhZA';
const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/rachelsmpark/cmh9ripoj00qm01smceizfkhr',
        center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90
        zoom: 10 // starting zoom
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/rachelsmpark/BAHA-Map/refs/heads/main/data/183data.geojson'
    });

    map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
         paint: {
            'circle-color': '#ff2abf',
            'circle-radius': 6,
            'circle-stroke-width': 1,
            'circle-stroke-color': '#ffffff'
        }
    });
    map.on('click', 'points-layer', (e) => {
        // Copy coordinates array
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        // Create popup content using the actual data properties
        const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;
        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });
   // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });

});
