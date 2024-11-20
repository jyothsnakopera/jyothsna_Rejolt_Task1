// Initialize and add the map
function initMap() {
    // Define a map center location
    const center = { lat: 20.5937, lng: 78.9629 }; // Center of India (India-wide view)

    // Create a map centered at the specified location
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5, // Zoom level set to show the entire country
        center: center,
    });

    // Array of locations to add as markers
    const locations = [
        { position: { lat: 17.385044, lng: 78.486671 }, info: "Hyderabad is known as the City of Pearls" }, // Hyderabad
        { position: { lat: 17.247088, lng: 80.150055 }, info: "Khammam is known for rich cultural heritage" }, // Khammam
        { position: { lat: 13.0827, lng: 80.2707 }, info: "Chennai is a vibrant city with a blend of modernity and tradition" }, // Chennai
        { position: { lat: 10.8505, lng: 76.2711 }, info: "Kerala, known as God's Own Country" }, // Kerala
        { position: { lat: 25.3216, lng: 82.9876 }, info: "Varanasi is one of the oldest living cities in the world" } // Varanasi
    ];

    // Loop through locations to create markers with info windows
    locations.forEach(({ position, info }) => {
        const marker = new google.maps.Marker({
            position: position,
            map: map,
        });

        const infoWindow = new google.maps.InfoWindow({
            content: info,
        });

        // Add click event to open info window when marker is clicked
        marker.addListener("click", () => {
            infoWindow.open(map, marker);
        });
    });

    // Adjust map bounds to fit all markers
    const bounds = new google.maps.LatLngBounds();
    locations.forEach(({ position }) => {
        bounds.extend(position);
    });
    map.fitBounds(bounds); // Automatically adjust the map to fit all markers
}
