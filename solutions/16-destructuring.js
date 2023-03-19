
export const getTheNearestLocation = (locations, point) => { //Done
  if (locations.length === 0) {
    return null;
  }
  let [nearestLocationName, nearestLocationCoords] = locations[0];
  let nearestDistance = getDistance(point, nearestLocationCoords);
  for (const [locationName, locationCoords] of locations) {
   const distance = getDistance(point, locationCoords);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestLocationName = locationName;
      nearestLocationCoords = locationCoords;
    }
  }
  return [nearestLocationName, nearestLocationCoords];
};


const getDistance = ([x1, y1], [x2, y2]) => {
  const delta1 = x2 - x1;
  const delta2 = y2 - y1;
  return Math.sqrt(delta1 ** 2 + delta2 ** 2);
};
// END
