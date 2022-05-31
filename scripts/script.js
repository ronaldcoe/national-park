// NPS API
function displayInformation(data) {
  document.querySelector("#name").innerHTML = data.data[0].fullName;  
  document.querySelector("#desc").innerHTML = data.data[0].description
}

function getLocation (loc) {
  let url = `https://developer.nps.gov/api/v1/parks?parkCode=${loc}&api_key=mlLlL5wSXZuSGJVqwtUvDJ0e7cwqmdP55KdHcEQz`;

  fetch(url).then(res => res.json()).then(data => displayInformation(data) )
  // fetch(url).then(res => res.json()).then(data => console.log(data));
}


// Accordion script
var acc = document.getElementsByClassName("accordion");
var i;
console.log("Hello")
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
      

      // Denali
      const pointDenali = { //Create a point
        type: "point",
        longitude: -151.1926,
        latitude: 63.1148
      };
    
      
      const denaliAttributes = {
          Name: "Denali",
          Description: "Denali National Park and Preserve encompasses 6 million acres of Alaska’s interior wilderness. Its centerpiece is 20,310-ft.-high Denali (fka Mount McKinley), North America’s tallest peak. With terrain of tundra, spruce forest and glaciers, the park is home to wildlife including grizzly bears, wolves, moose, caribou and Dall sheep. Popular activities in summer include biking, backpacking, hiking and mountaineering. ― Google"
      }
    
      const denaliPoint = new Graphic({
        geometry: pointDenali,
        symbol: pointMarkerSymbol,
        attributes: denaliAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(denaliPoint);

      // Gates of the Artic
      const pointgatesArtic = { //Create a point
        type: "point",
        longitude: -153.1861,
        latitude: 67.8819
      };
    
      
      const gatesArticAttributes = {
          Name: "Gates of the Arctic",
          Description: "Gates of the Arctic National Park and Preserve is an American national park that protects portions of the Brooks Range in northern Alaska. The park is the northernmost national park in the United States, situated entirely north of the Arctic Circle. ― Wikipedia"
      }
    
      const gatesArticPoint = new Graphic({
        geometry: pointgatesArtic,
        symbol: pointMarkerSymbol,
        attributes: gatesArticAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(gatesArticPoint);
    
      
      // Glacier Bay
      const pointGlacierBay = { //Create a point
        type: "point",
        longitude: -136.9002,
        latitude: 58.6658
      };
    
      
      const glacierBayAttributes = {
          Name: "Glacier Bay",
          Description: "Glacier Bay National Park and Preserve is an American national park located in Southeast Alaska west of Juneau. President Calvin Coolidge proclaimed the area around Glacier Bay a national monument under the Antiquities Act on February 26, 1925. ― Wikipedia"
      }
    
      const glacierBayPoint = new Graphic({
        geometry: pointGlacierBay,
        symbol: pointMarkerSymbol,
        attributes: glacierBayAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(glacierBayPoint);


      // Katmai
      const pointKatmai = { //Create a point
        type: "point",
        longitude: -155.0631,
        latitude: 58.6126
      };
    
      
      const katmaiAttributes = {
          Name: "Katmai",
          Description: "Katmai National Park and Preserve is on a peninsula in southern Alaska. Its wild landscapes span tundra, forests, lakes and mountains. The park is known for the many brown bears that are drawn to the abundant salmon in Brooks Falls. Lookout platforms at adjacent Brooks Camp offer close-up views of the bears. The Valley of Ten Thousand Smokes is an area of lava flows and ash formed by a massive volcanic eruption. ― Google"
      }
    
      const katmaiPoint = new Graphic({
        geometry: pointKatmai,
        symbol: pointMarkerSymbol,
        attributes: katmaiAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(katmaiPoint);



      // kenai
      const pointKenai = { //Create a point
        type: "point",
        longitude: -150.1879,
        latitude: 59.8487
      };
    
      
      const kenaiAttributes = {
          Name: "Kenai Fjords",
          Description: "Kenai Fjords National Park is an American national park that maintains the Harding Icefield, its outflowing glaciers, and coastal fjords and islands. The park covers an area of 669,984 acres on the Kenai Peninsula in south-central Alaska, west of the town of Seward. ― Wikipedia"
      }
    
      const kenaiPoint = new Graphic({
        geometry: pointKenai,
        symbol: pointMarkerSymbol,
        attributes: kenaiAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(kenaiPoint);




      // Kobuk Valley
      const pointKobuk = { //Create a point
        type: "point",
        longitude: -159.2137,
        latitude: 67.3575
      };
    
      
      const kobukAttributes = {
          Name: "Kobuk Valley",
          Description: "Kobuk Valley National Park is an American national park in the Arctic region of northwestern Alaska, located about 25 miles north of the Arctic Circle. ― Wikipedia"
      }
    
      const kobukPoint = new Graphic({
        geometry: pointKobuk,
        symbol: pointMarkerSymbol,
        attributes: kobukAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(kobukPoint);




      // Lake Clark
      const pointLakeClark = { //Create a point
        type: "point",
        longitude: -153.5301,
        latitude: 60.5941
      };
    
      
      const LakeClarkAttributes = {
          Name: "Lake Clark",
          Description: "Lake Clark National Park and Preserve is an American national park in southwest Alaska, about 100 miles southwest of Anchorage. The park was first proclaimed a national monument in 1978, then established as a national park and preserve in 1980 by the Alaska National Interest Lands Conservation Act. ― Wikipedia"
      }
    
      const LakeClarkPoint = new Graphic({
        geometry: pointLakeClark,
        symbol: pointMarkerSymbol,
        attributes: LakeClarkAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(LakeClarkPoint);




      // Wrangell-St. Elias
      const pointWrangell = { //Create a point
        type: "point",
        longitude: -142.9857,
        latitude: 61.7104
      };
    
      
      const wrangellAttributes = {
          Name: "Wrangell-St. Elias",
          Description: "Wrangell—St. Elias National Park and Preserve is an American national park and preserve managed by the National Park Service in south central Alaska. The park and preserve were established in 1980 by the Alaska National Interest Lands Conservation Act. ― Wikipedia"
      }
    
      const wrangellPoint = new Graphic({
        geometry: pointWrangell,
        symbol: pointMarkerSymbol,
        attributes: wrangellAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(wrangellPoint);





      // American Samoa
      const pointAmericanSamoa = { //Create a point
        type: "point",
        longitude: -170.6950175,
        latitude: -14.3064071
      };
    
      
      const americanSamoaAttributes = {
          Name: "American Samoa",
          Description: "The National Park of American Samoa is a national park in the United States territory of American Samoa, distributed across three islands: Tutuila, Ofu, and Ta‘ū. The park preserves and protects coral reefs, tropical rainforests, fruit bats, and the Samoan culture. Popular activities include hiking and snorkeling. ― Wikipedia"
      }
    
      const americanSamoaPoint = new Graphic({
        geometry: pointAmericanSamoa,
        symbol: pointMarkerSymbol,
        attributes: americanSamoaAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(americanSamoaPoint);




      // Grand Canyon
      const pointGrandCanyon = { //Create a point
        type: "point",
        longitude: -112.1129,
        latitude: 36.1069
      };
    
      
      const grandCanyonAttributes = {
          Name: "Grand Canyon",
          Description: "Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset. ― Google"
      }
    
      const grandCanyonPoint = new Graphic({
        geometry: pointGrandCanyon,
        symbol: pointMarkerSymbol,
        attributes: grandCanyonAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(grandCanyonPoint);






      // Petrified Forest
      const pointPetrifiedForest = { //Create a point
        type: "point",
        longitude: -109.7889,
        latitude: 35.0037
      };
    
      
      const petrifiedForestAttributes = {
          Name: "Petrified Forest",
          Description: "Petrified Forest National Park is in northeastern Arizona. In its south, the Rainbow Forest is full of colorful petrified wood. It’s home to the Rainbow Forest Museum, with its paleontology exhibits and many trail access points. In the park's center are the petroglyphs of Newspaper Rock and the ruined village of Puerco Pueblo. To the north, the Painted Desert Inn, a 1930s adobe building, is a museum with Hopi murals. ― Google"
      }
    
      const petrifiedForestPoint = new Graphic({
        geometry: pointPetrifiedForest,
        symbol: pointMarkerSymbol,
        attributes: petrifiedForestAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(petrifiedForestPoint);





      // Saguaro
      const pointSaguaro = { //Create a point
        type: "point",
        longitude: -111.1666,
        latitude: 32.2967
      };
    
      
      const saguaroAttributes = {
          Name: "Saguaro",
          Description: "Saguaro National Park is in southern Arizona. Its 2 sections are on either side of the city of Tucson. The park is named for the large saguaro cactus, native to its desert environment. In the western Tucson Mountain District, Signal Hill Trail leads to petroglyphs of the ancient Hohokam people. In the eastern Rincon Mountain District, Cactus Forest Drive is a loop road with striking views of the desert landscape. ― Google"
      }
    
      const saguaroPoint = new Graphic({
        geometry: pointSaguaro,
        symbol: pointMarkerSymbol,
        attributes: saguaroAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(saguaroPoint);




      // Organ Pipe Cactus
      const pointOrganPipe = { //Create a point
        type: "point",
        longitude: -112.8320,
        latitude: 32.0280
      };
    
      
      const organPipeAttributes = {
          Name: "Organ Pipe Cactus",
          Description: "Organ Pipe Cactus National Monument is a U.S. national monument and UNESCO biosphere reserve located in extreme southern Arizona that shares a border with the Mexican state of Sonora. The park is the only place in the United States where the senita and organ pipe cactus grow wild. ― Wikipedia"
      }
    
      const organPipePoint = new Graphic({
        geometry: pointOrganPipe,
        symbol: pointMarkerSymbol,
        attributes: organPipeAttributes,
        popupTemplate: popupTemplate
      });
  
      graphicsLayer.add(organPipePoint);
  
  
  
  
      
  
    });






    
  
}
createMap(zoom, long, lat)





