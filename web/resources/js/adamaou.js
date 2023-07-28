/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * Store the places counters
 * emplacements des guichets JSON sur la carte 
 */

var adamaouaGeo = {
    type: 'FeatureCollection',
    features: [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.55320299999994, 7.41622]
            },
            
            "properties": {
                "id": 1,
                "title": "CSIP de Dang",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.41622,
                "longitude": 13.55320299999994,
                "marker-color": "#1fa055", // guichet vert 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 1
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.58910800000001, 7.34297]
            },
            
            "properties": {
                "id": 2,
                "title": "CSIP de Mabanga-Djalingo",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.34297,
                "longitude": 13.58910800000001,
                "marker-color": "#1fa055", // guichet jaune
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 2
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.57135029999995, 7.296073299999999]
            },
            
            "properties": {
                "id": 3,
                "title": "CSI OISA de Bamyanga",
                "description": "ADAMOUA",
                "etat": "Agréé",
                "latitude": 7.296073299999999,
                "longitude": 13.57135029999995,
                "marker-color": "#1fa055", // guichet rouge 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 3
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.5861789, 7.3145889]
            },
            
            "properties": {
                "id": 4,
                "title": "CSI De Boumdjere",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.3145889,
                "longitude": 13.5861789,
                "marker-color": "#1fa055", // guichet rouge 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 4
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.5881152, 7.3296219]
            },
            
            "properties": {
                "id": 5,
                "title": "CS de Sabongari",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.3296219,
                "longitude": 13.5881152,
                "marker-color": "#1fa055", // guichet jaune
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 5
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.5848589, 7.3203692]
            },
            
            "properties": {
                "id": 6,
                "title": "CS LAMIDAT",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.3203692,
                "longitude": 13.5848589,
                "marker-color": "#1fa055", // guichet violet
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 6
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.573861800000032, 7.2881902]
            },
            
            "properties": {
                "id": 7,
                "title": "CS Catholique de Bamyanga-Marza",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 7.2881902,
                "longitude": 13.573861800000032,
                "marker-color": "#1fa055", // guichet rouge 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 7
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.59932809999998, 13.59932]
            },
            
            "properties": {
                "id": 8,
                "title": "CS Lakenpa",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 13.59932,
                "longitude": 13.59932809999998,
                "marker-color": "#1fa055", // guichet vert 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 8
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [13.585272, 7.315518799999999]
            },
            
            "properties": {
                "id": 10,
                "title": "Hopital Regional de Ngaoundere",
                "description": "ADAMAOUA",
                "etat": "Agréé",
                "latitude": 4.040439840360875,
                "longitude": 9.687581444234524,
                "marker-color": "#1fa055", // guichet vert 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 9
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [9.7026727, 4.0468614]
            },
            
            "properties": {
                "id": 10,
                "title": "Hopital Laquintinie",
                "description": "Douala",
                "etat": "Agréé",
                "latitude": 4.0468614,
                "longitude": 9.7026727,
                "marker-color": "#1fa055", // guichet vert 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 10
        },
        
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [9.7143093, 4.0648826]
            },
            
            "properties": {
                "id": 11,
                "title": "Hopital District de DEIDO",
                "description": "Douala",
                "etat": "Agréé",
                "latitude": 4.0648826,
                "longitude": 9.7143093,
                "marker-color": "#1fa055", // guichet vert 
                "marker-size": "large",
                "marker-symbol": "hospital"
            },
            
            "id": 11
        }
    ]
};// fin de la variable geoCounters


