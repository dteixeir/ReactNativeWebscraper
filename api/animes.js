
import ApiUtils from './ApiUtils';
import Storage from '../services/storage';
// import Storage from 'react-native-storage'; // currently not used
var CONSTANTS = require('../constants');

var scraperToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiZ2V0dGVycyI6e30sIndhc1BvcHVsYXRlZCI6ZmFsc2UsImFjdGl2ZVBhdGhzIjp7InBhdGhzIjp7Il9fdiI6ImluaXQiLCJBZG1pbiI6ImluaXQiLCJTbGFja0JvdE5hbWUiOiJpbml0IiwiU2xhY2tVc2VybmFtZSI6ImluaXQiLCJQYXNzd29yZCI6ImluaXQiLCJVc2VybmFtZSI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJfX3YiOnRydWUsIkFkbWluIjp0cnVlLCJTbGFja0JvdE5hbWUiOnRydWUsIlNsYWNrVXNlcm5hbWUiOnRydWUsIlBhc3N3b3JkIjp0cnVlLCJVc2VybmFtZSI6dHJ1ZSwiX2lkIjp0cnVlfSwibW9kaWZ5Ijp7fSwicmVxdWlyZSI6e319LCJzdGF0ZU5hbWVzIjpbInJlcXVpcmUiLCJtb2RpZnkiLCJpbml0IiwiZGVmYXVsdCIsImlnbm9yZSJdfSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9fdiI6MCwiQWRtaW4iOnRydWUsIlNsYWNrQm90TmFtZSI6ImFuaW1lYm90IiwiU2xhY2tVc2VybmFtZSI6ImRhbm55IiwiUGFzc3dvcmQiOiJwYXNzd29yZCIsIlVzZXJuYW1lIjoiRGFubnkgVGVpeGVpcmEiLCJfaWQiOiI1N2IxMmE4OTczZWU0NjQ2Y2RiM2I1YzAifSwiX3ByZXMiOnsiJF9fb3JpZ2luYWxfc2F2ZSI6W251bGwsbnVsbF0sIiRfX29yaWdpbmFsX3JlbW92ZSI6W251bGxdfSwiX3Bvc3RzIjp7IiRfX29yaWdpbmFsX3NhdmUiOltdLCIkX19vcmlnaW5hbF9yZW1vdmUiOltdfSwiaWF0IjoxNDcxOTI5NDE5LCJleHAiOjE0NzIwMTU4MTl9.LWQ0rVM_6J6o4hZ38baXQkY-otJU52lZ7i-qi4rJhIQ';

var Api = {  
  getAnimes: function() {
    return Storage.get('token').then(function(token) {
      return fetch(`${CONSTANTS.ROOT_URL}animes`, {
        headers:{
          'token' : token
        }
      }).then(ApiUtils.checkStatus)
    })
  },
  authenticate: function(username, password) {
    credentials = {"username": username,
      "password": password
    };

    return fetch(`${CONSTANTS.ROOT_URL}authenticate`, {
      method: 'POST',
      headers: CONSTANTS.JSON_POST_HEADER,
      body: JSON.stringify(credentials)
    }).then(ApiUtils.checkStatus)
  }
};

export { Api as default };