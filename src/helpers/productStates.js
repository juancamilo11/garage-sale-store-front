const productStates = [
  {
    statusNumber: 0,
    statusName: "Ingrese el estado del producto",
  },
  {
    statusNumber: 1,
    statusName: "Regular",
  },
  {
    statusNumber: 2,
    statusName: "Bueno",
  },
  {
    statusNumber: 3,
    statusName: "Muy Bueno",
  },
  {
    statusNumber: 4,
    statusName: "Perfecto estado",
  },
  {
    statusNumber: 5,
    statusName: "Nuevo (Sin uso)",
  },
];

export const getProductStatusNameByNumber = (number) =>
  productStates.filter((status) => status.statusNumber === number)[0]
    .statusName;

export default productStates;
