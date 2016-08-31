// ApiUtils.js
var ApiUtils = {  
  checkStatus: function(response) {
    // https://github.com/github/fetch
    if (response.status >= 200 && response.status < 300) {
      return response.json().then(function(data){
        return data;
      })
    } else {
      return response.json().then(function(data){
        throw data;
      })
    }
  }
};
export { ApiUtils as default };