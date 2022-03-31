import Swal from "sweetalert2";
import { getColombianStateNameByValue } from "./colombianStatesList";

export const sweetalertForGenericSuccessBuilder = (message) =>
  Swal.fire({
    icon: "success",
    title: "Operación exitosa",
    text: `${message}`,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 3500,
  });

export const sweetalertForGenericErrorBuilder = (message) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `${message}`,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 3500,
  });

export const sweetalertForInputTagErrorBuilder = (
  newTag,
  handleInputValidation,
  cleanEvent
) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `La etiqueta '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
    showConfirmButton: false,
    timer: 3500,
  }).then((res) => {
    handleInputValidation(cleanEvent);
  });

export const sweetalertForInputTagAlreadyDefinedBuilder = (newTag) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `La etiqueta '${newTag}' ya ha sido ingresada, intenta con otro valor.`,
    showConfirmButton: false,
    timer: 3500,
  });

export const sweetalertForInputCurrentLocationForStoreSetupBuilder = () =>
  Swal.fire({
    icon: "info",
    title: "Ubicación de la tienda",
    text: "A continuación se le solicitará su dirección actual para localizar la tienda físicamente.",
    footer:
      "<small>En caso de no dar su ubicación la tienda no podrá ser ubicada físicamente.</small>",
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    cancelButtonText: "No quiero dar mi ubicación",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForInputCurrentLocationDenyBuilder = () =>
  Swal.fire({
    title: "Posición física denegada",
    text: "Tenga presente que la nueva tienda no podrá ser ubicada mediante mapas.",
    icon: "warning",
    showConfirmButton: false,
    timer: 3500,
  });

export const sweetalertForErrorsReportForm01StoreSetupBuilder = (
  errorsReport
) =>
  Swal.fire({
    icon: "error",
    title: "El formulario tiene errores",
    html: `
        <ul>
    ${
      errorsReport.storeName === undefined
        ? ""
        : "" + errorsReport.storeName + ""
    }
    ${errorsReport.slogan === undefined ? "" : "" + errorsReport.slogan + ""}
    ${
      errorsReport.description === undefined
        ? ""
        : "" + errorsReport.description + ""
    }
    ${
      errorsReport.startingDate === undefined
        ? ""
        : "" + errorsReport.startingDate + ""
    }
    ${
      errorsReport.endingDate === undefined
        ? ""
        : "" + errorsReport.endingDate + ""
    } 
    </ul>
    <br/>
    <strong>Por favor verifique los cambios e intente nuevamente.</strong>
    `,
    showConfirmButton: true,
    timer: 20000,
  });

export const sweetalertForErrorsReportForm02StoreSetupBuilder = (
  errorsReport
) =>
  Swal.fire({
    icon: "error",
    title: "El formulario tiene errores",
    html: `
        <ul>
    ${
      errorsReport.portraitUrl === undefined
        ? ""
        : "" + errorsReport.portraitUrl + ""
    }
    ${
      errorsReport.prevImagesUrls === undefined
        ? ""
        : "" + errorsReport.prevImagesUrls + ""
    }
    ${
      errorsReport.physicalStoreUrl === undefined
        ? ""
        : "" + errorsReport.physicalStoreUrl + ""
    } 
    </ul>
    <br/>
    <strong>Por favor verifique los cambios e intente nuevamente.</strong>
    `,
    showConfirmButton: true,
    timer: 20000,
  });

export const sweetalertForErrorsReportInputCategoryForm03StoreSetupBuilder = (
  errorsReport
) =>
  Swal.fire({
    icon: "error",
    title: "El formulario tiene errores",
    html: `
        <ul>
    ${
      errorsReport.categoryName === undefined
        ? ""
        : "" + errorsReport.categoryName + ""
    }
    ${
      errorsReport.categoryImage === undefined
        ? ""
        : "" + errorsReport.categoryImage + ""
    }
    </ul>
    <br/>
    <strong>Por favor verifique los cambios e intente nuevamente.</strong>
    `,
    showConfirmButton: true,
    timer: 20000,
  });

export const sweetalertForErrorsReportForm03StoreSetupBuilder = (
  errorsReport
) =>
  Swal.fire({
    icon: "error",
    title: "El formulario tiene errores",
    html: `
        <ul>
    ${
      errorsReport.productName === undefined
        ? ""
        : "" + errorsReport.productName + ""
    }
    ${
      errorsReport.category === undefined ? "" : "" + errorsReport.category + ""
    }
    ${
      errorsReport.currency === undefined ? "" : "" + errorsReport.currency + ""
    } 
    ${
      errorsReport.quantity === undefined ? "" : "" + errorsReport.quantity + ""
    } 
    ${errorsReport.price === undefined ? "" : "" + errorsReport.price + ""} 
    ${
      errorsReport.productState === undefined
        ? ""
        : "" + errorsReport.productState + ""
    } 
    ${
      errorsReport.freeShipping === undefined
        ? ""
        : "" + errorsReport.freeShipping + ""
    } 
    ${
      errorsReport.productTag === undefined
        ? ""
        : "" + errorsReport.productTag + ""
    } 
    ${
      errorsReport.productImages === undefined
        ? ""
        : "" + errorsReport.productImages + ""
    } 
    </ul>
    <br/>
    <strong>Por favor verifique los cambios e intente nuevamente.</strong>
    `,
    showConfirmButton: true,
    timer: 20000,
  });

export const sweetalertForCategoryDeleteConfirmationForm03StoreSetupBuilder = (
  categoryToDelete
) =>
  Swal.fire({
    icon: "info",
    title: "Eliminación de categoría de productos",
    html: `Al eliminar la categoría con nombre <b>${categoryToDelete.categoryName}</b> se eliminarán también todos los productos con esta categoría?`,
    imageUrl: `${categoryToDelete.imageUrl}`,
    imageHeight: "180",
    imageAlt: `${categoryToDelete.categoryName}`,
    footer: `<b>Esta acción no se puede deshacer</b> 
      <br/>
      <small></small>`,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForProductTagAlreadyDefinedBuilder = (newTag) =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `La etiqueta de producto '${newTag}' no se ha podido ingresar, intenta con otro valor.`,
    showConfirmButton: false,
    timer: 3500,
  });

export const sweetalertForFinalizeInputProductsBuilder = (arrProducts) =>
  Swal.fire({
    icon: "info",
    title: "Finalizar Ingreso de Productos",
    html: `Hasta el momento se han ingresado <b>${arrProducts.length}</b> producto(s) para la nueva tienda.`,
    footer:
      "<b>Al aceptar se procederá con la creación de la venta de garaje</b>",
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Continuar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
    allowEnterKey: false,
  });

export const sweetalertForSearchAndFilterStoresBuilder = () =>
  Swal.fire({
    title: "Búsqueda y filtro de ventas de garaje",
    text: "Busca por Id, nombre, etiqueta o categoría de un producto",
    input: "text",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Look up",
    showLoaderOnConfirm: true,
    allowEscapeKey: false,
    allowOutsideClick: () => !Swal.isLoading(),
    preConfirm: async (searchValue) => {
      try {
        // const response = await fetch(`//api.github.com/users/${searchValue}`);
        const response = await fetch(
          `//jsonplaceholder.typicode.com/todos/${searchValue}`
        );
        if (!response.ok) throw new Error("response.statusText");

        return await response.json();
      } catch (error) {
        Swal.showValidationMessage(`Request failed: ${error}`);
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        text: `${JSON.stringify(result.value)}`,
      });
    }
  });

export const sweetalertForErrorsReportUserDataFormBuilder = (errorsReport) =>
  Swal.fire({
    icon: "error",
    title: "El formulario de datos del usuario tiene errores",
    html: `
        <ul>
    ${
      errorsReport.occupation === undefined
        ? ""
        : "" + errorsReport.occupation + ""
    }
    ${
      errorsReport.cellphone === undefined
        ? ""
        : "" + errorsReport.cellphone + ""
    }
    ${
      errorsReport.postalCode === undefined
        ? ""
        : "" + errorsReport.postalCode + ""
    } 
    ${
      errorsReport.colombianState === undefined
        ? ""
        : "" + errorsReport.colombianState + ""
    } 
    ${errorsReport.phone === undefined ? "" : "" + errorsReport.phone + ""} 
    ${errorsReport.address === undefined ? "" : "" + errorsReport.address + ""} 
    ${
      errorsReport.dateOfBirth === undefined
        ? ""
        : "" + errorsReport.dateOfBirth + ""
    } 
    </ul>
    <br/>
    <strong>Por favor verifique los cambios e intente nuevamente.</strong>
    `,
    showConfirmButton: true,
    timer: 20000,
  });

export const sweetalertForAddingStoreToFavoritesBuilder = (storeName) =>
  Swal.fire({
    icon: "success",
    title: "success",
    timer: 3000,
    allowEnterKey: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    html:
      "La venta de garaje con nombre " +
      "<b>" +
      storeName +
      "</b>" +
      " ha sido agregada a tu lista de tiendas favoritas.",
  });

export const sweetalertForDeletingStoreFromFavoritesBuilder = (storeName) =>
  Swal.fire({
    icon: "success",
    title: "success",
    timer: 3000,
    allowEnterKey: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    html:
      "La venta de garaje con nombre " +
      "<b>" +
      storeName +
      "</b>" +
      " ha sido removida de tu lista de tiendas favoritas.",
  });

export const sweetalertFoProductDeleteConfirmationBuilder = (productToDelete) =>
  Swal.fire({
    icon: "warning",
    html:
      "<h3>Eliminación del producto <b>" +
      productToDelete.productName +
      "</b></h3>",
    imageUrl: `${productToDelete.productUrlImages[0]}`,
    imageHeight: "180",
    imageAlt: `${"categoryToDelete.categoryName"}`,
    footer: `<b>Esta acción no se puede deshacer</b> 
      <br/>
      <small></small>`,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweeralertForWelcomeToStore = (storeName) =>
  Swal.fire({
    icon: "success",
    imageUrl: `${
      process.env.PUBLIC_URL + "/assets/garage-store/welcome-store.png"
    }`,
    html: `<h5>¡Bienvenid@ a <b>${storeName}</b>!</h5>`,
    showConfirmButton: false,
    timer: 2000,
  });

export const sweetalertForOrderCreationConfirmationBuilder = (name, quantity) =>
  Swal.fire({
    icon: "info",
    title: "Confirmación de la creación de orden de compra",
    html:
      "A continuación se creará una órden de compra para comprar <b>" +
      quantity +
      "</b> unidad(es) del producto <b>" +
      name +
      "</b>",
    footer: "<b>La órden de compra aparecerá en tu perfil de usuario</b>",
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: true,
    confirmButtonText: "Confirmar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweeralertForShowProductImage = (urlImage, name) =>
  Swal.fire({
    imageUrl: `${urlImage}`,
    html: `Producto: <b>${name}</b>`,
    showConfirmButton: false,
  });

export const sweetAlertForQuestionPublished = () =>
  Swal.fire({
    icon: "success",
    text: "Se ha publicado tu pregunta, una vez el vendedor te responda se te avisará por correo electrónico",
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 3500,
  });

export const sweetalertForViewersList = (viewerInfoList) =>
  Swal.fire({
    title: "Lista de usuarios que han visto esta venta de garage",
    text: JSON.stringify(viewerInfoList),
    showConfirmButton: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 3500,
  });

export const sweetAlertForShowUserInfo = (userInfo) =>
  Swal.fire({
    icon: "info",
    imageUrl: `${userInfo.photoUrl}`,
    imageHeight: "100",
    html: `<ul>
      <p>Nombre completo: <b>${userInfo.name}</b></p>
      <p>Número telefónico: <b>${userInfo.cellphone}</b></p>
      <p>Número de celular: <b>(+57) ${userInfo.phone}</b></p>
      <p>Correo electrónico : <b>${userInfo.email}</b></p>
      <p>Departamento: <b>${getColombianStateNameByValue(
        userInfo.colombianState
      )}</b></p>
      <p>Código postal: <b>${userInfo.postalCode}</b></p>
      <p>Dir. residencia: <b>${userInfo.address}</b></p>
    </ul>`,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: "Ok",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForAcceptPurchaseOrder = (productName, quantity) =>
  Swal.fire({
    icon: "info",
    html: `¿Desea <b>aprobar</b> la compra de <b>${quantity} unidad(es)</b> de <b>${productName}</b>?`,
    footer: "<b>Los productos serán descontados de la tienda</b>",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Aprobar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetalertForDeclinePurchaseOrder = (
  productName,
  quantity,
  type
) =>
  Swal.fire({
    icon: "warning",
    html: `¿Desea <b>${
      type === "BUY" ? "cancelar" : "rechazar"
    }</b> la compra de <b>${quantity}</b> unidad(es) de <b>${productName}</b>?`,
    footer: "<b>Los productos no serán descontados de la tienda</b>",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "Rechazar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "red",
    allowEscapeKey: false,
    allowOutsideClick: false,
  });

export const sweetAlertForPurchaseApproved = () =>
  Swal.fire({
    icon: "success",
    text: "Se ha aprobado la compra, los productos han sido descontados de la tienda",
    showConfirmButton: true,
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 5000,
  });

export const sweetAlertForPurchaseDeclined = () =>
  Swal.fire({
    icon: "success",
    text: "Se ha eliminado la compra, los productos no serán descontados de la tienda",
    showConfirmButton: true,
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    timer: 5000,
  });
