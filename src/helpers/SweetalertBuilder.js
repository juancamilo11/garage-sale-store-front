import Swal from "sweetalert2";
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

export const sweetalertForErrorsReportForm01StoreSetupBuilder = (
  errorsReport
) =>
  Swal.fire({
    icon: "error",
    title: "El formulario tiene los siguientes errores",
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
