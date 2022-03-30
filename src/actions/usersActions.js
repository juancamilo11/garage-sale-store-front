import { async } from "@firebase/util";
import { getColombianStateNameByValue } from "../helpers/colombianStatesList";
import { sweetalertForGenericSuccessBuilder } from "../helpers/SweetalertBuilder";
import environment from "./../environment/environment";
import { login } from "./authActions";

const getUserByFormValues = (formValues) => {
  return {
    id: formValues.id,
    name: formValues.name,
    photoUrl: formValues.photoUrl,
    occupation: formValues.occupation,
    cellphone: formValues.cellphone,
    email: formValues.email,
    postalCode: formValues.postalCode,
    colombianState: formValues.colombianState.toUpperCase(),
    phone: formValues.phone,
    address: formValues.address,
    dateOfBirth: formValues.dateOfBirth,
    registerDate: formValues.registerDate,
  };
};

export const startUpdateUserInformation = (formValues) => {
  return async (dispatch) => {
    const userInfoUpdated = getUserByFormValues(formValues);
    try {
      const response = await fetch(
        `${environment.msAdminInfoUserUrl}/put/user`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userInfoUpdated),
        }
      );
      if (response.ok) {
        const userUpdatedInfo = await response.json();
        dispatch(
          login(
            userUpdatedInfo.id,
            userUpdatedInfo.name,
            userUpdatedInfo.photoUrl,
            userUpdatedInfo.occupation,
            userUpdatedInfo.cellphone,
            userUpdatedInfo.email,
            userUpdatedInfo.postalCode,
            userUpdatedInfo.colombianState,
            userUpdatedInfo.phone,
            userUpdatedInfo.address,
            userUpdatedInfo.dateOfBirth,
            userUpdatedInfo.registerDate
          )
        );
        sweetalertForGenericSuccessBuilder("Actualización de datos exitosa.");
        return await response.json();
      } else {
        throw await response.json();
      }
    } catch (err) {}
  };
};

const getDate = (date) => new Date(date).toISOString().split("T")[0];

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
          creationTime: getDate(creationTime),
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

export const startFetchAllPurchaseOrdersByType = async (type, id) => {
  try {
    const response = await fetch(
      `${environment.msAdminStoresUrl}/get/purchase-order/${type}/${id}`
    );
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  } catch (err) {}
};
