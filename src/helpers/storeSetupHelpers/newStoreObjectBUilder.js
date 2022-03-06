const newStoreObjectBuilder = (store) => {
  const storeToSend = {
    id: store.storeId,
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
      creationTime: store.seller.creationTime,
      userContact: {
        email: store.seller.contact.email,
      },
    },
    storeAddress: {
      latitude: store.address.latitude,
      longitude: store.address.longitude,
    },
    productList: store.productList,
    purchaseTestimonialList: [],
    purchaseOrderList: [],
  };
  console.log(storeToSend);
};

export default newStoreObjectBuilder;

const storeObject = {
  storeId: "de1e3591-0931-4750-8b0e-031a9f5815e1",
  storeName: "Los recuerdos de Tommy",
  tag: "",
  slogan: "Slogan de la tienda nueva",
  description: "Descripcion de la tienda nueva, prueba",
  startingDate: "2022-04-02",
  endingDate: "2022-04-25",
  address: {
    latitude: 0,
    longitude: 0,
  },
  tagsList: [
    "T. Etiqueta 1",
    "T. Etiqueta 2",
    "T. Etiqueta 3",
    "T. Etiqueta 4",
  ],
  portraitUrl:
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534990/sqfw07uhvzjqsadkuzp8.jpg",
  prevImagesList: [
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/ske64yiw8adbkyea0izj.jpg",
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/ytgprftco4imfgg290za.jpg",
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/iu5jwdmqi9buiigkyb8q.jpg",
  ],
  physicalStoreImageUrl:
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535003/ehu22zxmqzm4tvot4yuy.jpg",
  productList: [
    {
      productName: "peluche nombre",
      category: "peluches",
      quantity: "4",
      price: "10000",
      productState: "2",
      productTag: "",
      additionalDescription:
        "Este es un hermosísimo peluche, descripcion adicional",
      productImages: [],
      productUrlImages: [
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/a8kodrfzpdgpgc3f4xso.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/s0dzpdj4ziw2oyabmiah.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/sqgodlzqm01accbs5lou.webp",
      ],
      productTagList: ["peluche", "amor", "cariño", "compañia"],
    },
    {
      productName: "spiderman",
      category: "Juguetes",
      quantity: "23",
      price: "7500",
      productState: "5",
      productTag: "",
      additionalDescription: "Este es un juguetep precioso!",
      productImages: [],
      productUrlImages: [
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535182/gxbsbabymsaj7q6fsbjh.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535183/sqnyz0fvjy3upxljraec.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535183/melrclykjezknquxg1f1.jpg",
      ],
      productTagList: ["juguete", "diversion", "jugar", "heroe"],
    },
  ],
};

//
//
//
//
//
//
//
//
//
//

const storeObject2 = {
  storeId: "de1e3591-0931-4750-8b0e-031a9f5815e1",
  storeName: "Los recuerdos de Tommy",
  tag: "",
  slogan: "Slogan de la tienda nueva",
  description: "Descripcion de la tienda nueva, prueba",
  startingDate: "2022-04-02",
  endingDate: "2022-04-25",
  address: {
    latitude: 0,
    longitude: 0,
  },
  tagsList: [
    "T. Etiqueta 1",
    "T. Etiqueta 2",
    "T. Etiqueta 3",
    "T. Etiqueta 4",
  ],
  portraitUrl:
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534990/sqfw07uhvzjqsadkuzp8.jpg",
  prevImagesList: [
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/ske64yiw8adbkyea0izj.jpg",
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/ytgprftco4imfgg290za.jpg",
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646534998/iu5jwdmqi9buiigkyb8q.jpg",
  ],
  physicalStoreImageUrl:
    "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535003/ehu22zxmqzm4tvot4yuy.jpg",
  productList: [
    {
      productName: "peluche nombre",
      category: "peluches",
      quantity: "4",
      price: "10000",
      productState: "2",
      productTag: "",
      additionalDescription:
        "Este es un hermosísimo peluche, descripcion adicional",
      productImages: [],
      productUrlImages: [
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/a8kodrfzpdgpgc3f4xso.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/s0dzpdj4ziw2oyabmiah.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535104/sqgodlzqm01accbs5lou.webp",
      ],
      productTagList: ["peluche", "amor", "cariño", "compañia"],
    },
    {
      productName: "spiderman",
      category: "Juguetes",
      quantity: "23",
      price: "7500",
      productState: "5",
      productTag: "",
      additionalDescription: "Este es un juguetep precioso!",
      productImages: [],
      productUrlImages: [
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535182/gxbsbabymsaj7q6fsbjh.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535183/sqnyz0fvjy3upxljraec.jpg",
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646535183/melrclykjezknquxg1f1.jpg",
      ],
      productTagList: ["juguete", "diversion", "jugar", "heroe"],
    },
  ],
};
