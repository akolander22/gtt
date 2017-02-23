angular.module('gttApp').controller('MainController', function($http){

  var vm = this;

  vm.weatherFound = false;
  vm.weatherFound2 = false;
  vm.weatherFound3 = false;

  vm.findWeather = function(){

    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + vm.entry + "&appid=d96de74d08c9455c1ff8b19af2363d5d").then(function(response){
      vm.info = response.data;
      vm.weatherCity = vm.info.name;
      vm.weatherTemp =  (9/5 * (vm.info.main.temp - 273) + 32).toFixed(2);
      vm.weatherDesc = vm.info.weather[0].description;
      vm.weatherWindSpeed = vm.info.wind.speed;

      });
      vm.weatherFound = true;
  }

  vm.findWeather2 = function(){

    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + vm.entry2 + "&appid=d96de74d08c9455c1ff8b19af2363d5d").then(function(response){
      vm.info2 = response.data;
      vm.weatherCity2 = vm.info2.name;
      vm.weatherTemp2 =  (9/5 * (vm.info2.main.temp - 273) + 32).toFixed(2);
      vm.weatherDesc2 = vm.info2.weather[0].description;
      vm.weatherWindSpeed2 = vm.info2.wind.speed;

      });
      vm.weatherFound2 = true;
  }

  vm.findWeather3 = function(){

    $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + vm.entry3 + "&appid=d96de74d08c9455c1ff8b19af2363d5d").then(function(response){
      vm.info3 = response.data;
      vm.weatherCity3 = vm.info3.name;
      vm.weatherTemp3 =  (9/5 * (vm.info3.main.temp - 273) + 32).toFixed(2);
      vm.weatherDesc3 = vm.info3.weather[0].description;
      vm.weatherWindSpeed3 = vm.info3.wind.speed;

      });
      vm.weatherFound3 = true;
  }

})
