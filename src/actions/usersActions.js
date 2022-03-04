import { baseUrl } from "./../environment/environment";

export const updateUserInformation = async (
  uid,
  displayName,
  email,
  formValues
) => {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      body: {
        id: uid,
        name: displayName,
        email,
        occupation: formValues.occupation,
        cellphone: formValues.cellphone,
        postalCode: formValues.postalCode,
        colombianState: formValues.colombianState,
        phone: formValues.phone,
        address: formValues.address,
        dateOfBirth: formValues.dateOfBirth,
      },
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {
    throw err;
  }
};
