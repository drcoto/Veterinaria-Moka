function iniciarMap() {
  let coord = { lat: 9.915635614486694, lng: -84.03693278154675 };
  let map = new google.maps.Map(document.getElementById("map"), {
    zoom:10,
    center: coord,
  });
  let marker = new google.maps.Marker({
    position: coord,
    map: map,
    icon: ""
  });

  function addMarker(property) {
    const marker = new google.maps.Marker({
      position:property.location,
      map: map,
      icon: property.ImageIcon
    });
    // check for custom Icon
    if(property.ImageIcon){
        // set image icon
        marker.setIcon(property.ImageIcon)
    }

    if(property.content){
        const detailwindow = new google.maps.InfoWindow({
            content: property.content
          });
          marker.addListener("click", () => {
            detailwindow.open(map, marker);
          });
    }
  }
  // mora icons map
  addMarker({location:{ lat:  9.915635614486694, lng: -84.03693278154675 },ImageIcon:"",
  content: 
  `<h2>Veterinaria Moka</h2>
  <p>San José, Curridabat<br>
  11801<br>
  Costa Rica</p>
  <a href='https://www.google.com/maps'>Ver en google maps</a>`,
});
  addMarker({location:{ lat: 9.914172391872446, lng: -84.03946259864865 },ImageIcon:"",
  content: 
  `<h2>Veterinaria Moka</h2>
  <p>San José, Curridabat<br>
  11801<br>
  Costa Rica</p>
  <a href='https://www.google.com/maps'>Ver en google maps</a>`,
});
ddd
  // informacion del waypoint
//   `<h2>Veterinaria Moka</h2>
//   <p>San José, Curridabat<br>
//   11801<br>
//   Costa Rica</p>
//   <a href='https://www.google.com/maps'>Ver en google maps</a>
// `,
}
