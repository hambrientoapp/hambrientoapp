function getIPGeolocation() {
   
    if (navigator.geolocation) {
        console.log(navigator.geolocation.getCurrentPosition());
    }else{
      return 'Tu navegador no soporta la API de geolocalizacion'; 
    }
    
}

