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

export const sweetalertForInputCurrentLocationForStoreSetupBuilder = (
  handleInputValidation
) =>
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
  }).then((result) => {
    if (result.isConfirmed) {
      navigator.geolocation.getCurrentPosition((res) => {
        const event = { target: { name: "address", value: res } };
        handleInputValidation(event);
      });
    } else {
      Swal.fire({
        title: "Posición física denegada",
        text: "Tenga presente que la nueva tienda no podrá ser ubicada mediante mapas.",
        icon: "warning",
        showConfirmButton: false,
        timer: 3500,
      });
    }
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
