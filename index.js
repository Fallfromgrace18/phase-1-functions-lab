
    

function distanceFromHqInBlocks(pickUpLocation){
   const hQLocation =42
   if (pickUpLocation>=42){
   return (pickUpLocation-42)
   }else if (pickUpLocation<42){
    return (42-pickUpLocation)
    }
   }

   function distanceFromHqInFeet(pickUpLocation){
    const hQLocation =42
    if (pickUpLocation>=42){
    return (pickUpLocation-42)*264
    }
    else if (pickUpLocation<42){
     return (42-pickUpLocation)*264
     }
    }
    function distanceTravelledInFeet(start, destination){
        if (start>destination){
            return (start-destination)*264
        
            }
            else if (start<destination){
            return (destination-start)*264
            
             }
            }
             function calculatesFarePrice(start, destination){
                const feet=distanceTravelledInFeet(start, destination)
             if (feet<=400){
                return 0
                 }
                
            else if (feet<=2000 && feet > 400){
                return (.02*(feet-400))
                }
                else if(feet>2000&& feet<= 2500){
                    return 25
                }
            else if (feet>2500){
                return 'cannot travel that far'
           }
          }
        
