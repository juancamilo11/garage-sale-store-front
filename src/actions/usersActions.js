import { async } from "@firebase/util";
import environment from "./../environment/environment";

export const updateUserInformation = async (
  uid,
  displayName,
  email,
  formValues
) => {
  try {
    const response = await fetch(
      `${environment.msAdminInfoUserUrl}/post/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      }
    );
    if (response.ok) {
      return await response.json();
    } else {
      throw await response.json();
    }
  } catch (err) {}
};

export const startFetchUserInfo = async (
  id,
  displayName,
  photoUrl,
  email,
  creationTime
) => {
  try {
    const response = await fetch(
      `${environment.msAdminInfoUserUrl}/post/user/${id}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id,
          name: displayName,
          photoUrl,
          email,
          creationTime,
        }),
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (err) {}
};

export const startFetchUsersInfoByIds = async (idList) => {
  try {
    const response = await fetch(
      `${environment.msAdminInfoUserUrl}/get/users/id`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(idList),
      }
    );
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (err) {}
};

export const startFetchUserInfoById = async (id) => {
  try {
    const response = await fetch(
      `${environment.msAdminInfoUserUrl}/get/user/${id}`
    );
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (err) {}
};
