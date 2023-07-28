/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Définition des variables */
var bikes = L.geoJson(adamaouaGeo).addTo(map);
var countersLayers = L.mapbox.featureLayer(adamaouaGeo).addTo(map);

countersLayers.eachLayer(function(layer){
    layer.bindPopup(
            '<h6><b>N° '+ layer.feature.properties.id +'</b></h6>'+
            '<p><b>Intitulé : </b>'+ layer.feature.properties.title +'</p>'+
            '<p><b>Lieu : </b>'+ layer.feature.properties.description +'</p>'+
            '<p><b>Statut : </b>'+ layer.feature.properties.etat +'</p>'
        , {closeButton: false}
    );
}).addTo(map);

countersLayers.on('click', function(e){
    e.layer.openPopup();
});

bikeIndex = leafletKnn(bikes);
map.fitBounds(bikes.getBounds());

map.on('click', function(e){
    var nearestResult = bikeIndex.nearest(e.latlng, 1)[0];
        nearestResult.layer.bindPopup("Je suis le plus proche de <a href=\"#\">Vous</a>")
            .openPopup();
    
    console.log(nearestResult);
});


