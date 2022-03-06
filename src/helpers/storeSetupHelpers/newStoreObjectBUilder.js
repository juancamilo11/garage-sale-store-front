const newStoreObjectBuilder = (store) => {
  const storeToSend = {
    id: store.id,
    storeName: store.storeName,
    storeExistencePeriod: {
      startingDate: store.startingDate,
      endingDate: store.endingDate,
    },
    storeDescription: {
      slogan: store.slogan,
      description: store.description,
      tagsList: store.tagsList,
    },
    storeVisualDescription: {
      portraitUrl: store.portraitUrl,
      prevImagesList: store.prevImagesList,
      physicalStoreImageUrl: store.physicalStoreImageUrl,
    },
    user: {
      uid: store.seller.uid,
      name: store.seller.name,
      photoUrl: store.seller.photoUrl,
      occupation: store.seller.occupation,
      dateOfBirth: store.seller.dateOfBirth,
      registerDate: store.seller.registerDate,
      creationTime: store.seller.creationTime,
      lastSignInTime: store.seller.lastSignInTime,
      userContact: {
        email: store.seller.contact.email,
        address: store.seller.contact.address,
        postalCode: store.seller.contact.postalCode,
        phoneNumber: store.seller.contact.phoneNumber,
        colombianState: store.seller.contact.colombianState,
      },
    },
    storeAddress: {
      latitude: store.address.latitude,
      longitude: store.address.longitude,
    },
    productList: store.productList,
  };

  console.log(storeToSend);
};

export default newStoreObjectBuilder;
