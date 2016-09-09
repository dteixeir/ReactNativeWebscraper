import { AsyncStorage } from 'react-native';

// ApiUtils.js
var Storage = {  
  save: function(key, value) {
    return AsyncStorage.setItem(key, value).then((response) => {
      return response;
    }, function(error) {
      console.log(error);
    })
  },
  get: function(key) {
    return AsyncStorage.getItem(key).then((value) => {
      return value;
    }, (error) => {
      console.log(error);
    })
  }
};
export { Storage as default };

