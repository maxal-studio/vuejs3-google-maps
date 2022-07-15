import { createApp } from "vue";
import App from "./App.vue";
import VueGeolocation from "vue3-geolocation";
import GMaps from "./../gmaps/gmaps";

let app = createApp(App);

app.use(VueGeolocation);
app.use(GMaps, {
  load: {
    apiKey: "GOOGLE_MAPS_API_KEY",
    libraries: ["places"],
  },
});

app.mount("#app");
