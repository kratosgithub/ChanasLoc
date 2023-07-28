/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var countersLayersGo = L.mapbox.featureLayer(geoCounters).addTo(map);

countersLayersGo.eachLayer(function(layer) {
    layer.bindPopup(
            '<p><b>Site: </b>'+ layer.feature.properties.title +'</p>'+
            '<p><b>Lieu: </b>'+ layer.feature.properties.description +'</p>'+
            '<p><b>Etat: <b>' + layer.feature.properties.etat +'</p>'
            , {closeButton: false});
}).addTo(map);

countersLayersGo.on('mouseover', function(e) {
    e.layer.openPopup();
});


