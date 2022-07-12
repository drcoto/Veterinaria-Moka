mapboxgl.accessToken =
  "pk.eyJ1Ijoic3VidnJheSIsImEiOiJjbDVodDl6NGgwMWkyM2JwYmYwNXNseTVlIn0.TLrcaCPVZopjKQ3Qhwpmog";
let Dmap = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: { lat: 9.915635614486694, lng: -84.03693278154675 },
  zoom: 16,
});

let element = document.createElement("div");
element.className = "marker";

let marker = new mapboxgl.Marker(element)
  .setLngLat({
    lng: -84.03693278154675,
    lat: 9.915635614486694,
  })
  .addTo(Dmap);

new mapboxgl.Popup()
.setLngLat({
  lng: -84.03693278154675,
  lat: 9.915635614486694,
})
  .setHTML("<h1>Veterinaria Moka</h1><p></p>")
  .addTo(Dmap);
Dmap.addControl(new mapboxgl.NavigationControl());
Dmap.addControl(new mapboxgl.FullscreenControl());
