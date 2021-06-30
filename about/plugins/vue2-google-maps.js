import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB2G2_FIuX8mVr0SHXVDVAom_ykYREDpFI',
    libraries: 'places',
    language: 'En'
  },
  installComponents: true
})