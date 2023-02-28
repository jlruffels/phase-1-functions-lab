function distanceFromHqInBlocks(pickupLocation) {
   if (pickupLocation <= 42) {
    return (42 - pickupLocation);
     }  if (pickupLocation >= 42) {
        return (pickupLocation - 42)
    }
 }

function distanceFromHqInFeet(pickupLocation) {
    distanceFromHqInBlocks(pickupLocation);
    return (distanceFromHqInBlocks(pickupLocation) * 264);
}
function distanceTravelledInFeet(start, destination) {
    if (destination > start)
    return (destination - start) * 264
    if (destination < start) 
    return (start - destination) * 264
}

function calculatesFarePrice(start, destination) {
    let distanceTravelled = distanceTravelledInFeet(start, destination);
    console.log(distanceTravelled)
    if (distanceTravelled <= 400){
    return 0;
}
    else if (distanceTravelled >= 400 && distanceTravelled <= 2000){
        return (distanceTravelled - 400) * .02
    }
    else if (distanceTravelled >= 2000 && distanceTravelled <= 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}