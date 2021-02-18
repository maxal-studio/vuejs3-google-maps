<template>
  <div>
    <div class="pt-2 font-size-xl mb-3">Create Address</div>

    <button class="btn btn-success" @click="triggerReady">
      Trigger map ready event
    </button>
    <hr />

    <div class="row">
      <div class="col-md-8">
        <div class="map_holder">
          <place-search
            v-bind:ready="ready"
            placeholder="Enter a location"
            loading="Map is loading"
            v-bind:gps_timeout="3000"
            v-bind:fallbackProcedure="fallbackProcedure"
            v-bind:zoom="zoom"
            v-bind:geolocation="geolocation"
            v-bind:address="address"
            @changed="getMapData"
          >
          </place-search>
        </div>
      </div>
      <div class="col-md-4">
        <div class="text-uppercase color-secondary mb-1">Address</div>
        <div class="mb-3 font-weight-bold">
          {{
            place.country != null
              ? place.country + ", " + place.city
              : "Please search for an address before procceeding"
          }}
        </div>

        <div class="text-uppercase color-secondary mb-1">Zip code</div>
        <div class="mb-3">
          <input type="text" v-model="place.zip_code" class="form-control" />
        </div>

        <div class="text-uppercase color-secondary mb-1">
          Address descriotion
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            cols="30"
            rows="5"
            v-model="place.address_description"
          ></textarea>
        </div>

        <div class="mb-2">
          <div class="form-check">
            <input
              class="form-check-input"
              id="primary_address"
              type="checkbox"
              v-model="form_data.primary"
            />
            <label class="form-check-label" for="primary_address">
              Make Primary Address
            </label>
          </div>
        </div>
        <div class="mt-3">
          <button class="btn btn-primary w-100">Save address</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ready: false, //Add ready:false to stop map from loading, and then when changed to true map will auto load
      fallbackProcedure: "gps", //gps | geolocation | address
      zoom: 17, //Default Zoom
      geolocation: {
        // If GPS and Find by address fails then, map will be positioned by a default geolocation
        lat: 31.73858, //Somewhere in the center of the world
        lng: -35.98628,
        zoom: 2,
      },
      address: {
        query: "Albania, Tirane", //If GPS fails, Find by address is triggered
        zoom: 10,
      },
      place: {},
      form_data: {},
    };
  },
  methods: {
    getMapData(place) {
      this.place = place;
      console.log(place);
    },
    triggerReady() {
      this.geolocation = {
        // If GPS and Find by address fails then, map will be positioned by a default geolocation
        lat: 41.3242856,
        lng: 19.8180722, //Somewhere in the center of the world
        zoom: 17,
      };
      this.fallbackProcedure = "geolocation";
      this.ready = true;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.map_holder {
  width: 100%;
  height: 450px;
  float: left;
}
</style>
  

    