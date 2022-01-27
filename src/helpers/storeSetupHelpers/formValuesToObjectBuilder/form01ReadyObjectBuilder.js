const form01ReadyObjectBuilder = (formValues) => {
  //console.log(formValues);

  formValues.address = getLatitudeAndLongitude(formValues);
  console.log(JSON.stringify(formValues));
  return JSON.stringify(formValues); // Return the form values ready to send to backend
};

const getLatitudeAndLongitude = (formValues) => {
  if (formValues.address?.coords) {
    return {
      latitude: formValues.address.coords.latitude,
      longitude: formValues.address.coords.longitude,
    };
  } else {
    return { latitude: 0, longitude: 0 };
  }
};

export default form01ReadyObjectBuilder;
