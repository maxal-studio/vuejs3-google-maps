# vue3-google-maps

> Google Map integration for VueJs

## Description
This plugin integrates google places into your vue3 application. It uses browser geolocation to track the user. You will have to provide a default fallback address and lat,lng in case the plugin fails to find the user's location. Once the location is found the map is centered and a Marker is placed on the map. The user can search for a different location, move the marker by dragging or clicking.

## Events
1. Search - User can search for by query for any kind of address
2. Map clicking - Once a click is triggered on the map, the plugin will try to find the nearest road or business.
3. Dragging - Dragging will not trigger any Map API events, it will only update the users' latitude and longitude

## Callbacks
1. On each map data change the plugin will return back a list of computed data:
   
## Installation

```
npm i vue3-google-maps
```

## Dependencies

This plugin uses geolocation to track users location so **vue3-geolocation** plugin should be installed to:
```
npm i vue3-geolocation
```

## Usage

Before starting you need a Google API key from the [developer console](http://console.developers.google.com/), once you obtained your key, import the module in your application and register it as plugin:

### Needed Google APIS

1. Maps Javascript API
2. Places API
3. GeoCoding API

```js
import VueGeolocation from "vue3-geolocation";
import GMaps from "vue3-google-maps";

let app = createApp(App);

app.use(VueGeolocation);
app.use(GMaps, {
  load: {
    apiKey: "your-api-key",
    libraries: ["places"],
  },
});

app.mount("#app");
```

## Components

```html
<PlaceSearch
  placeholder="Enter a location"
  v-bind:fallbackProcedure="fallbackProcedure"
  v-bind:zoom="zoom"
  v-bind:geolocation="geolocation"
  v-bind:address="address"
  @changed="getMapData"
>
</PlaceSearch>
```

```js
export default {
  name: "AddressesCreate",
  data() {
    return {
      // **GPS** : will trigger geolocation plugin , to find users location by GPS
      // **geolocation** : will try to find the place by lat, lng
      // **address**: will try to find the place by address query

      // If GPS is selected as a fallbackProcedure and it fails , then address fallback is triggered and if address fails geolocation is triggered
      fallbackProcedure: "gps", //gps | geolocation | address
      zoom: 17, //Default Zoom
      geolocation: {
        // If GPS and Find by address fails then, map will be positioned by a default geolocation
        lat: 31.73858,
        lng: -35.98628,
        zoom: 2,
      },
      address: {
        query: "Albania, Tirane", //If GPS fails, Find by address is triggered
        zoom: 10,
      },
      place: {},
    };
  },
  methods: {
    getMapData(place) {
      this.place = place;
      console.log(place);
    },
  },
  created() {},
};
```

