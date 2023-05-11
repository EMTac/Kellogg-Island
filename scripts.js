var toggleButton = document.getElementById('button');
var descriptionDiv = document.getElementById('description');
var mapDiv = document.getElementById('map');

toggleButton.addEventListener('click', function() {
  if (descriptionDiv.style.display === 'none') {
    descriptionDiv.style.display = "flex";
    toggleButton.style.backgroundColor = '#ffe2ac';
    toggleButton.style.color = '#63146F';
  } else {
    descriptionDiv.style.display = 'none';
    mapDiv.style.height = "100%";
    toggleButton.style.backgroundColor = '#63146F';
    toggleButton.style.color = '#ffe2ac';
    map.invalidateSize();
  }
});

const accessToken = 'pk.eyJ1IjoiZW10YWMiLCJhIjoiY2w5ejR0bXZyMGJpbDNvbG5jMTFobGJlZCJ9.UMi2J2LPPuz0qbFaCh0uRA';

var dark = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id:'mapbox/dark-v10',
    accessToken: accessToken,
    tileSize: 512,
    zoomOffset: -1,
});

const map = L.map('map', {
    layers:[dark]
})

map.fitWorld();
map.setView([47.55764035697381, -122.34699039109186], 18);

map.createPane('left');
map.createPane('right');

var heightImageUrl = 'KelloggCanopy_Projected.png',
    heightBounds = [[47.5560318, -122.3492237], [47.5596691, -122.3445345]];
var heightImageOverlay = L.imageOverlay(heightImageUrl, heightBounds, {pane: 'left'}).addTo(map);
heightImageOverlay.getElement().classList.add('renderClass');

var densityImageUrl = 'CanopyDensity_Projected.png',
    densityBounds = [[47.5560318, -122.3492237], [47.5596691, -122.3445345]];
var densityImageOverlay = L.imageOverlay(densityImageUrl, densityBounds, {pane: 'right'}).addTo(map);
densityImageOverlay.getElement().classList.add('renderClass');

L.control.sideBySide(heightImageOverlay, densityImageOverlay).addTo(map);

var selector = document.getElementsByClassName('leaflet-sbs-range')[0];
selector.addEventListener('mousedown', function(event) {
  event.stopPropagation();
});

var circleOptions = {
    radius: 5,
    fillColor: "#000",
    color: '#fff',
    weight: 2,
    opacity: 1,
    fillOpacity: 1,
    pane: 'right'
};

var rightA = L.geoJSON(treePts, {
    filter: function(feature, layer) {
      return feature.properties.RASTERVALU >= 6 && feature.properties.RASTERVALU <= 12.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#360961';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  })
  
  var rightB = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 13 && feature.properties.RASTERVALU <= 17.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#63146F';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });
  
  var rightC = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 18 && feature.properties.RASTERVALU <= 24.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#912569';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });
  
  var rightD = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 25 && feature.properties.RASTERVALU <= 37.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#BB3655';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });
  
  var rightE = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 38 && feature.properties.RASTERVALU <= 45.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#E9602D';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });
  
  var rightF = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 46 && feature.properties.RASTERVALU <= 62.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#FDA108';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });

  var rightG = L.geoJSON(treePts, {
    filter: function(feature, layer) {
        return feature.properties.RASTERVALU >= 63 && feature.properties.RASTERVALU <= 95.99999;
    },
    pointToLayer: function(feature, latlng) {
        var color = '#F5F98E';
        var updatedOptions = Object.assign({}, circleOptions, { fillColor: color });
        var circleMarker = L.circleMarker(latlng, updatedOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU) + 'ft');
        return circleMarker;
      }
  });

var leftTreePts = L.geoJSON(treePts, {
    pointToLayer: function (feature, latlng) {
        var color;
        var value = feature.properties.RASTERVALU;
        
        if (value >= 6 && value <= 12.99999) {
            color = '#360961';
        } else if (value >= 13 && value <= 17.99999) {
            color = '#63146F';
        } else if (value >= 18 && value <= 24.99999) {
            color = '#912569';
        } else if (value >= 25 && value <= 37.99999) {
            color = '#BB3655';
        } else if (value >= 38 && value <= 45.99999) {
            color = '#E9602D';
        } else if (value >= 46 && value <= 62.99999) {
            color = '#FDA108';
        } else if (value >= 63 && value <= 95.99999) {
            color = '#F5F98E';
        } else {
            color = 'black';
        }
        var circleOptions = {
            radius: 5,
            color: '#fff',
            fillColor: '#4d91ff',
            weight: 1.5,
            opacity: 1,
            fillOpacity: 0,
            pane: 'left'
        };
        var circleMarker = L.circleMarker(latlng, circleOptions);
        circleMarker.bindPopup('Tree Height: ' + Math.round(feature.properties.RASTERVALU)+"ft");
        return circleMarker;
    }
})

var pointGroup = L.layerGroup([rightA, rightB, rightC, rightD, rightE, rightF, rightG, leftTreePts]).addTo(map);
var overlayMaps = {
    "Deep Learning Points": pointGroup
  };
L.control.layers(null, overlayMaps).addTo(map);

var legend = L.control.Legend({
    position: "bottomleft",
    title: "Tree Height",
    fillColor: "#000",
    opacity: 0.8,
    legends: [
      {
        label: "Tree Centroids Identified by Deep Learning",
        type: "circle",
        layers: pointGroup,
        color: "#fff",
        radius: 5,
        weight: 1.5,
        fill: false,
        fillOpacity: "0.5"
      },
      {
        label: "",
        type: "image",
        layers: heightImageOverlay,
        url: "resources/ColorRamp.png",
        fillOpacity: "0.5"
      },
  ]
  }).addTo(map);

var legend2 = L.control.Legend({
    position: "bottomright",
    title: "Canopy Density",
    fillColor: "#000",
    opacity: 0.8,
    legends: [
      {
        label: "Tree Centroids Identified by Deep Learning",
        type: "circle",
        layers: pointGroup,
        color: "#fff",
        radius: 5,
        weight: 0.0001,
        fillOpacity: 0,
      },
      {
        label: "6-13ft",
        type: "circle",
        layers: rightA,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#360961",
      },
      {
        label: "13-18ft",
        type: "circle",
        layers: rightB,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#63146F",
      },
      {
        label: "18-25ft",
        type: "circle",
        layers: rightC,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#912569",
      },
      {
        label: "25-38ft",
        type: "circle",
        layers: rightD,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#BB3655",
      },
      {
        label: "38-46ft",
        type: "circle",
        layers: rightE,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#E9602D",
      },
      {
        label: "46-63ft",
        type: "circle",
        layers: rightF,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#FDA108",
      },
      {
        label: "63-95ft",
        type: "circle",
        layers: rightG,
        color: "#fff",
        radius: 5,
        weight: 2,
        fillColor: "#F5F98E",
      },
      {
        label: "",
        type: "image",
        layers: densityImageOverlay,
        url: "resources/DensityRamp.png",
        fillOpacity: "0.5"
      },
  ]
  }).addTo(map);

  var legendStyles = document.querySelectorAll('.leaflet-legend');
// Selecting the first legend
var firstLegendStyle = legendStyles[0];
firstLegendStyle.style.backgroundColor = '#000';
firstLegendStyle.style.opacity = 0.8;
firstLegendStyle.style.height = "150px";

// Selecting the second legend
var secondLegendStyle = legendStyles[1];
secondLegendStyle.style.backgroundColor = '#000';
secondLegendStyle.style.opacity = 0.8;
secondLegendStyle.style.height = "330px";