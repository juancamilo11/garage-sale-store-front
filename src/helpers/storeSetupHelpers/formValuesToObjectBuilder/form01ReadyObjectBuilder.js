const form01ReadyObjectBuilder = (formValues) => {
  //console.log(formValues);
  const { latitude, longitude } = formValues.address.coords;
  formValues.address = { latitude, longitude };
  return JSON.stringify(formValues); // Return the form values ready to send to backend
};

export default form01ReadyObjectBuilder;
