import axios from "axios";

var config = {
  headers: {'Access-Control-Allow-Origin': '*'}
};

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export default {
   getRestaurantOrGroceryAPI: function(latitude,longitude,searchType,ethnicity) {
    return axios.get(proxyurl + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=50000&type="+searchType+"&keyword="+ethnicity+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk")
  },
  getApiData: function(latitude,longitude,searchType) {
    return axios.get(proxyurl + "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + latitude+","+longitude+"&radius=10000&type="+searchType+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk")
  },
  getCid: function(placeId) {
    return axios.get(proxyurl + "https://maps.googleapis.com/maps/api/place/details/json?placeid=" + placeId+"&key=AIzaSyB-Yiy5ruk26yFaZWv6RyR5CqZ5W7z1Pjk")
  }
  
};
