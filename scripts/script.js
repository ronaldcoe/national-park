
function displayInformation(data) {
  document.querySelector("#name").innerHTML = data.data[0].fullName;  
  document.querySelector("#parkImage").setAttribute("src", data.data[0].images[0].url);
  document.querySelector("#hoursDesc").innerHTML = data.data[0].operatingHours[0].description;
  document.querySelector("#mo").innerHTML = "Monday: " + data.data[0].operatingHours[0].standardHours.monday;
  document.querySelector("#tu").innerHTML = "Tuesday: " + data.data[0].operatingHours[0].standardHours.tuesday;
  document.querySelector("#we").innerHTML = "Wednesday: " + data.data[0].operatingHours[0].standardHours.wednesday;
  document.querySelector("#th").innerHTML = "Thursday: " + data.data[0].operatingHours[0].standardHours.thursday;
  document.querySelector("#fr").innerHTML = "Friday: " + data.data[0].operatingHours[0].standardHours.friday;

  document.querySelector("#sa").innerHTML = "Saturday: " + data.data[0].operatingHours[0].standardHours.saturday;

  document.querySelector("#su").innerHTML = "Sunday: " + data.data[0].operatingHours[0].standardHours.sunday;
  document.querySelector("#parkPhone").innerHTML = data.data[0].contacts.phoneNumbers[0].phoneNumber;
  document.querySelector("#emailPark").innerHTML = data.data[0].contacts.emailAddresses[0].emailAddress;


  
}

function getLocation (loc) {
  let url = `https://developer.nps.gov/api/v1/parks?parkCode=${loc}&api_key=mlLlL5wSXZuSGJVqwtUvDJ0e7cwqmdP55KdHcEQz`;

  fetch(url).then(res => res.json()).then(data => displayInformation(data) )
  // fetch(url).then(res => res.json()).then(data => console.log(data));
}





// Accordion script
var acc = document.getElementsByClassName("accordion");
var i;
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      }
  });
  }

let lat = 37.0902;
let long = -95.7129;
let zoom = 2;

function createMap(zoom, long, lat) {
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/GraphicsLayer",
  ], function (esriConfig, Map, MapView, Graphic, GraphicsLayer) {

  esriConfig.apiKey = "AAPK3f1e9dc65d464f33a8369785931fe4f9lid5dlFL7fQDNX0WvsFgeWIDQNltNdsyy54IcmlZs4DXoqR6kBdNY8_wTAN6BIQP";

  const map = new Map({
      basemap: "arcgis-navigation" // Basemap layer service
  });

  const view = new MapView({
      map: map,
      center: [long, lat], // Longitude, latitude
      zoom: zoom, // Zoom level
      container: "viewDiv" // Div element
  });
  const graphicsLayer = new GraphicsLayer();
  map.add(graphicsLayer);

  
  const popupTemplate = {
      title: "{Name}",
      content: "{Description}"
  }
      
  const pointMarkerSymbol = {
      type: "simple-marker",
      color: [226, 119, 40],  // Orange
      outline: {
          color: [255, 255, 255], // White
          width: 1
      }
  };

  function createPoints(data1) {    
          
      const point = { //Create a point
          type: "point",
          longitude: data1.data[0].longitude,
          latitude: data1.data[0].latitude
          };
      
          
          const attributes = {
              Name: data1.data[0].fullName,
              Description: data1.data[0].description
          }
      
          const newPoint = new Graphic({
          geometry: point,
          symbol: pointMarkerSymbol,
          attributes: attributes,
          popupTemplate: popupTemplate
          });
      
          graphicsLayer.add(newPoint);
  }



  let locations = ["denali","gaar","glba","katm","kefj","kova","lacl","wrst","npsa","grca","pefo","sagu","orpi","hosp","chis","deva","jotr","seki","lavo","redw","yose","blca","grsa","meve","romo","bisc","drto","ever","hale","havo","yell","maca","isro","voya","glac","grba","cave","grsm","thro","cuva","crla","cong","badl","wica","bibe","gumo","viis","arch","brca","cany","care","zion","shen","mora","noca","olym","grte"] ;
  let j;
  

  for(j = 0; j<locations.length; j++) {
      
      let url1 = `https://developer.nps.gov/api/v1/parks?parkCode=${locations[j]}&api_key=mlLlL5wSXZuSGJVqwtUvDJ0e7cwqmdP55KdHcEQz`;

      fetch(url1).then(res => res.json()).then(data1 => createPoints(data1) )
      
  }
    


  
  
});
}
createMap(zoom, long, lat)