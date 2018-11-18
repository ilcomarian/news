module.exports = {
  result: () => {
    let res = null;
    navigator.geolocation.getCurrentPosition(position => {
      fetch(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=RXXENGGRJ4UK&format=json&by=position&lat=${
          position.coords.latitude
        }&lng=${position.coords.longitude}`
      )
        .then(res => res.json())
        .then(json => {
          //json.countryCode
          res = json.countryCode;
        });
    });
    if (res === null) {
      res = "US";
    }
    return res;
  }
};
