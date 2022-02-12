import Swal from "sweetalert2";

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
        : "<li>" + errorsReport.storeName + "</li>"
    }
    ${
      errorsReport.slogan === undefined
        ? ""
        : "<li>" + errorsReport.slogan + "</li>"
    }
    ${
      errorsReport.description === undefined
        ? ""
        : "<li>" + errorsReport.description + "</li>"
    }
    ${
      errorsReport.startingDate === undefined
        ? ""
        : "<li>" + errorsReport.startingDate + "</li>"
    }
    ${
      errorsReport.endingDate === undefined
        ? ""
        : "<li>" + errorsReport.endingDate + "</li>"
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
        : "<li>" + errorsReport.portraitUrl + "</li>"
    }
    ${
      errorsReport.prevImagesUrls === undefined
        ? ""
        : "<li>" + errorsReport.prevImagesUrls + "</li>"
    }
    ${
      errorsReport.physicalStoreUrl === undefined
        ? ""
        : "<li>" + errorsReport.physicalStoreUrl + "</li>"
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
        : "<li>" + errorsReport.categoryName + "</li>"
    }
    ${
      errorsReport.categoryImage === undefined
        ? ""
        : "<li>" + errorsReport.categoryImage + "</li>"
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
        : "<li>" + errorsReport.productName + "</li>"
    }
    ${
      errorsReport.category === undefined
        ? ""
        : "<li>" + errorsReport.category + "</li>"
    }
    ${
      errorsReport.currency === undefined
        ? ""
        : "<li>" + errorsReport.currency + "</li>"
    } 
    ${
      errorsReport.quantity === undefined
        ? ""
        : "<li>" + errorsReport.quantity + "</li>"
    } 
    ${
      errorsReport.price === undefined
        ? ""
        : "<li>" + errorsReport.price + "</li>"
    } 
    ${
      errorsReport.productState === undefined
        ? ""
        : "<li>" + errorsReport.productState + "</li>"
    } 
    ${
      errorsReport.freeShipping === undefined
        ? ""
        : "<li>" + errorsReport.freeShipping + "</li>"
    } 
    ${
      errorsReport.productTag === undefined
        ? ""
        : "<li>" + errorsReport.productTag + "</li>"
    } 
    ${
      errorsReport.productImages === undefined
        ? ""
        : "<li>" + errorsReport.productImages + "</li>"
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
        : "<li>" + errorsReport.occupation + "</li>"
    }
    ${
      errorsReport.cellphone === undefined
        ? ""
        : "<li>" + errorsReport.cellphone + "</li>"
    }
    ${
      errorsReport.postalCode === undefined
        ? ""
        : "<li>" + errorsReport.postalCode + "</li>"
    } 
    ${
      errorsReport.colombianState === undefined
        ? ""
        : "<li>" + errorsReport.colombianState + "</li>"
    } 
    ${
      errorsReport.phone === undefined
        ? ""
        : "<li>" + errorsReport.phone + "</li>"
    } 
    ${
      errorsReport.address === undefined
        ? ""
        : "<li>" + errorsReport.address + "</li>"
    } 
    ${
      errorsReport.dateOfBirth === undefined
        ? ""
        : "<li>" + errorsReport.dateOfBirth + "</li>"
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
