export const form01ReadyObjectBuilder = (formValues, tagsList) => {
  formValues.address = getLatitudeAndLongitude(formValues);

  return { ...formValues, tagsList }; // Return the form values ready to send to backend
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

export const form02ReadyObjectBuilder = (
  portraitUrl,
  prevImagesList,
  physicalStoreImageUrl
) => {
  return { portraitUrl, prevImagesList, physicalStoreImageUrl }; // Return the form values ready to send to backend
};

export const form03ReadyObjectBuilder = (categoryList, arrProducts) => {
  return { arrProducts, categoryList }; // Return the form values ready to send to backend
};
