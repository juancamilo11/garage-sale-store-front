import { v4 as uuidv4 } from "uuid";

const newStoreObjectBuilder = (store) => {
  // localStorage.setItem("StoreWithoutModify", JSON.stringify(store));
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
      creationTime: getCurrentDate(store.seller.creationTime),
      userContact: {
        email: store.seller.userContact.email,
      },
    },
    storeAddress: {
      latitude: store.address.latitude,
      longitude: store.address.longitude,
    },
    productCategoryList: store.productCategoryList.map((productCategory) => {
      return {
        ...productCategory,
        productList: store.productList
          .filter(
            (product) => product.category === productCategory.categoryName
          )
          .map((product) => ({
            ...product,
            id: uuidv4(),
            quantity: parseInt(product.quantity),
            price: parseFloat(product.price),
          })),
      };
    }),
    purchaseTestimonialList: [],
    purchaseOrderList: [],
  };
  localStorage.removeItem("storeReadyToSend");
  localStorage.setItem("storeReadyToSend", JSON.stringify(storeToSend));

  return storeToSend;
};

let getCurrentDate = (date) => new Date(date).toISOString().split("T")[0];

export default newStoreObjectBuilder;

const currentObjToSendToBackend = {
  id: "9f17075f-e2ae-4456-8c2b-3a74075ffc99",
  storeName: "nombre de la tienda",
  storeExistencePeriod: {
    startingDate: "2022-03-10",
    endingDate: "2022-03-20",
  },
  storeDescription: {
    slogan: "Slogan de la tienda nueva",
    description: "Descripcion de la tienda nueva, prueba",
    tagsList: [
      "T. Etiqueta 1",
      "T. Etiqueta 2",
      "T. Etiqueta 3",
      "T. Etiqueta 4",
    ],
  },
  storeVisualDescription: {
    portraitUrl:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634275/bi5secrmpelifwvoahmc.jpg",
    prevImagesList: [
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/pu91nyzedcy1jxery9se.jpg",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/avugodr67apeqv7gbmb0.jpg",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/ezcnxnsnfoasivsfyoid.jpg",
    ],
    physicalStoreImageUrl:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634284/gqgc2ntuaakpz2qsofmg.jpg",
  },
  user: {
    uid: "6uGBeBlFVJYzvMdBeo71Q6LwuJJ2",
    name: "Juan Camilo Cardona",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c",
    creationTime: "2022-02-12",
    userContact: {
      email: "juancamilo19997814@gmail.com",
    },
  },
  storeAddress: {
    latitude: 0,
    longitude: 0,
  },
  productCategoryList: [
    {
      categoryName: "Peluches",
      categoryImage:
        "blob:http://localhost:3000/c228387e-9d75-4c6b-8de8-92147ca4ddf8",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634309/bygalgfw867s4obuz22j.jpg",
      productList: [
        {
          productName: "peluche cariñito",
          category: "Peluches",
          quantity: "5",
          price: "5000",
          productState: "STATUS_3",
          productTag: "",
          additionalDescription:
            "Estos son unos peluches hermosos, llevalos ya mismo!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/wriyyqbeg4mbmd4u1ctz.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/a99cn1uenpktxgpj7t53.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/sostavp5w7u9apua8xhp.jpg",
          ],
          productTagList: [
            "cariño",
            "amor",
            "compañía",
            "diversion",
            "ternura",
          ],
        },
      ],
    },
    {
      categoryName: "juguetes",
      categoryImage:
        "blob:http://localhost:3000/afe1c77e-e718-44cb-8b45-ae3389fa8b33",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634389/dm7dsya8mr4vlf0kpe98.png",
      productList: [
        {
          productName: "spiderman",
          category: "juguetes",
          quantity: "15",
          price: "4000",
          productState: "STATUS_4",
          productTag: "",
          additionalDescription:
            "Estos son juguetes increíbles para pasar un momento divertido, cómpralos ya!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/jh1nlgsgzhgvtniugomn.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/othskswnmoj6yakuzvci.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/kgsmbojofu2tremyydko.jpg",
          ],
          productTagList: [
            "juguete",
            "amor",
            "cariño",
            "ternura",
            "diversion",
            "jugar",
          ],
        },
        {
          productName: "juguetes2",
          category: "juguetes",
          quantity: "11",
          price: "12000",
          productState: "STATUS_3",
          productTag: "",
          additionalDescription: "Juguete fake",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/eqbvh07nryjyl63pvuca.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/y8jcb0q4flwtcczawty3.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/hyuzcgft0vz6zrefuww9.jpg",
          ],
          productTagList: ["dsfsdfsdf", "hfghfghgj", "yteyeytey"],
        },
      ],
    },
    {
      categoryName: "ropa",
      categoryImage:
        "blob:http://localhost:3000/89b6ab04-06e2-4c1a-9d57-5f59e1985abc",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634583/aw3p2gr4sianbfqdf8gv.webp",
      productList: [
        {
          productName: "Shorts para hombre",
          category: "ropa",
          quantity: "10",
          price: "9000",
          productState: "STATUS_4",
          productTag: "",
          additionalDescription:
            "Estos son unos shorts increibles para días de sol",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/cotc1c5b2v8lrrd1gmvw.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/avtqtsu19dkuognp1iir.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/og125984munlxgktislx.webp",
          ],
          productTagList: ["shorts", "ropa", "shorts cortos"],
        },
        {
          productName: "camisas hombre",
          category: "ropa",
          quantity: "5",
          price: "10000",
          productState: "STATUS_3",
          productTag: "",
          additionalDescription: "Estas camisas son hermosas!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/nvtcmcllrtkzy69dmzlc.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/uvksavjiic0w3o4fgbeu.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/it8co3tmvkbrj2qjiveg.jpg",
          ],
          productTagList: ["camisa", "camisa hombre", "camisa elegante"],
        },
        {
          productName: "pantalon mujer",
          category: "ropa",
          quantity: "8",
          price: "12000",
          productState: "STATUS_5",
          productTag: "",
          additionalDescription:
            "Estos pantalones nuevos son muy bonitos, apenas para ti!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/hwkqdlbenol4mx0fvktd.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/mscydvqsl2minor6jbgo.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/mwg4lwkwgbhng65fxrre.jpg",
          ],
          productTagList: ["pantalon", "pantalon mujer", "jean"],
        },
      ],
    },
  ],
  purchaseTestimonialList: [],
  purchaseOrderList: [],
};

const objPostanValidado = {
  id: "9f17075f-e2ae-4456-8c2b-3a74075ffc99",
  storeName: "nombre de la tienda",
  storeExistencePeriod: {
    startingDate: "2022-03-10",
    endingDate: "2022-03-20",
  },
  storeDescription: {
    slogan: "Slogan de la tienda nueva",
    description: "Descripcion de la tienda nueva, prueba",
    tagsList: [
      "T. Etiqueta 1",
      "T. Etiqueta 2",
      "T. Etiqueta 3",
      "T. Etiqueta 4",
    ],
  },
  storeVisualDescription: {
    portraitUrl:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634275/bi5secrmpelifwvoahmc.jpg",
    prevImagesList: [
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/pu91nyzedcy1jxery9se.jpg",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/avugodr67apeqv7gbmb0.jpg",
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634281/ezcnxnsnfoasivsfyoid.jpg",
    ],
    physicalStoreImageUrl:
      "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634284/gqgc2ntuaakpz2qsofmg.jpg",
  },
  user: {
    uid: "6uGBeBlFVJYzvMdBeo71Q6LwuJJ2",
    name: "Juan Camilo Cardona",
    photoUrl:
      "https://lh3.googleusercontent.com/a-/AOh14GjnkTKE1MwBx1jBXLj6SCsCSUANvgmn28L0yh31wg=s96-c",
    creationTime: "2022-02-12",
    userContact: {
      email: "juancamilo19997814@gmail.com",
    },
  },
  storeAddress: {
    latitude: 1.224325346,
    longitude: 6.234543254,
  },
  productCategoryList: [
    {
      categoryName: "Peluches",
      categoryImage:
        "blob:http://localhost:3000/c228387e-9d75-4c6b-8de8-92147ca4ddf8",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634309/bygalgfw867s4obuz22j.jpg",
      productList: [
        {
          id: "34089-3c95-e2ae-4456-8c2b-3a74075ffc99",
          productName: "peluche cariñito",
          category: "Peluches",
          quantity: 5,
          price: 5000,
          productState: "STATUS_3",
          productTag: "",
          additionalDescription:
            "Estos son unos peluches hermosos, llevalos ya mismo!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/wriyyqbeg4mbmd4u1ctz.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/a99cn1uenpktxgpj7t53.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634365/sostavp5w7u9apua8xhp.jpg",
          ],
          productTagList: [
            "cariño",
            "amor",
            "compañía",
            "diversion",
            "ternura",
          ],
        },
      ],
    },
    {
      categoryName: "juguetes",
      categoryImage:
        "blob:http://localhost:3000/afe1c77e-e718-44cb-8b45-ae3389fa8b33",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634389/dm7dsya8mr4vlf0kpe98.png",
      productList: [
        {
          id: "454krktn-3c95-e2ae-4456-8c2b-dsfsadrt435ds",
          productName: "spiderman",
          category: "juguetes",
          quantity: 15,
          price: 4000,
          productState: "STATUS_4",
          productTag: "",
          additionalDescription:
            "Estos son juguetes increíbles para pasar un momento divertido, cómpralos ya!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/jh1nlgsgzhgvtniugomn.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/othskswnmoj6yakuzvci.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634452/kgsmbojofu2tremyydko.jpg",
          ],
          productTagList: [
            "juguete",
            "amor",
            "cariño",
            "ternura",
            "diversion",
            "jugar",
          ],
        },
        {
          id: "sdgsdfgrktn-3c95-e2ae-4456-8c2b-gfdgdfg",
          productName: "juguetes2",
          category: "juguetes",
          quantity: 11,
          price: 12000,
          productState: "STATUS_3",
          productTag: "",
          additionalDescription: "Juguete fake",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/eqbvh07nryjyl63pvuca.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/y8jcb0q4flwtcczawty3.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635040/hyuzcgft0vz6zrefuww9.jpg",
          ],
          productTagList: ["dsfsdfsdf", "hfghfghgj", "yteyeytey"],
        },
      ],
    },
    {
      categoryName: "ropa",
      categoryImage:
        "blob:http://localhost:3000/89b6ab04-06e2-4c1a-9d57-5f59e1985abc",
      imageUrl:
        "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634583/aw3p2gr4sianbfqdf8gv.webp",
      productList: [
        {
          id: "sdgsdfgsdfg-e2ae-4456-8c2b-fdgsdfgsdfg",
          productName: "Shorts para hombre",
          category: "ropa",
          quantity: 10,
          price: 9000,
          productState: "STATUS_4",
          productTag: "",
          additionalDescription:
            "Estos son unos shorts increibles para días de sol",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/cotc1c5b2v8lrrd1gmvw.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/avtqtsu19dkuognp1iir.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634777/og125984munlxgktislx.webp",
          ],
          productTagList: ["shorts", "ropa", "shorts cortos"],
        },
        {
          id: "afadsfasdf-e2ae-4456-8c2b-ghfdhhdfh",
          productName: "camisas hombre",
          category: "ropa",
          quantity: 5,
          price: 10000,
          productState: "STATUS_3",
          productTag: "",
          additionalDescription: "Estas camisas son hermosas!!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/nvtcmcllrtkzy69dmzlc.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/uvksavjiic0w3o4fgbeu.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646634852/it8co3tmvkbrj2qjiveg.jpg",
          ],
          productTagList: ["camisa", "camisa hombre", "camisa elegante"],
        },
        {
          id: "asdfasf-e2ae-4456-8c2b-qwertwertgfdfs",
          productName: "pantalon mujer",
          category: "ropa",
          quantity: 8,
          price: 12000,
          productState: "STATUS_5",
          productTag: "",
          additionalDescription:
            "Estos pantalones nuevos son muy bonitos, apenas para ti!!",
          productImages: [],
          productUrlImages: [
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/hwkqdlbenol4mx0fvktd.jpg",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/mscydvqsl2minor6jbgo.webp",
            "https://res.cloudinary.com/dahwtwzdl/image/upload/v1646635002/mwg4lwkwgbhng65fxrre.jpg",
          ],
          productTagList: ["pantalon", "pantalon mujer", "jean"],
        },
      ],
    },
  ],
  purchaseTestimonialList: [],
  purchaseOrderList: [],
};
