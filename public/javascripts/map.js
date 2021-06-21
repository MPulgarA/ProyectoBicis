var mymap = L.map('mapid').setView([-37.4667, -72.35], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibXB1bGdhcmEiLCJhIjoiY2txNGpuOTRnMHU5dTJ2bXZrZG1uaG5jeSJ9.G9jx-xyseeSYjpYUxfGTig'
}).addTo(mymap);


$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: function(result){
        console.log(result);
        result.bicicletas.forEach((bici)=>{
            L.marker(bici.ubicacion, {title: bici.id}).addTo(mymap);
        });
    }
});