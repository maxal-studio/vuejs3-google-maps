import loader from "./lib-loader";
import PlaceSearch from "./components/PlaceSearch";

const GMaps = {
  install: (app, options) => {
    const finalOptions = Object.assign({}, options);

    app.config.globalProperties.$GMaps = GMaps.finalOptions;

    if (finalOptions.load) {
      loader.load(finalOptions.load);
    }

    app.component("PlaceSearch", PlaceSearch);
  },
};

export default GMaps;
