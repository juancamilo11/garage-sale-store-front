const form02ReadyObjectBuilder = (
  portraitUrl,
  prevImagesList,
  physicalStoreImageUrl
) => {
  return JSON.stringify(portraitUrl, prevImagesList, physicalStoreImageUrl);
};

export default form02ReadyObjectBuilder;
