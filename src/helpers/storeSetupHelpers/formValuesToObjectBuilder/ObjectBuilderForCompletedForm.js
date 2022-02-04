export const form01ReadyObjectBuilder = (formValues, tagsList) => {
  return { ...formValues, tagsList }; // Return the form values ready to send to backend
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
