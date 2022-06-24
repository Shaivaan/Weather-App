
export const Gelocation = (setOrdinate) => {
   
    
    
   

    let data;
    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        
        } else { 
            
        }
      }
      function showPosition(position) {
     setOrdinate({
      latitude:position.coords.latitude,
      longitude:position.coords.longitude
     })

      }

      getLocation();
    }


  

