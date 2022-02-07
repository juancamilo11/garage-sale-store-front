import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";

const StoreGatewayScreen = () => {
  const { active: activedNote } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(activedNote);
  const activeIdRef = useRef(activedNote.id);

  useEffect(() => {
    if (activedNote.id !== activeIdRef.current) {
      reset(activedNote);
      activeIdRef.current = activedNote.id;
    }
  }, [activedNote, reset]);

  useEffect(() => {
    //dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDeleteImage = (url) => {
    window.alert("eliminando la imagen con url: " + url);
  };

  return (
    <div className="store-gateway__main-container">
      <div className="store-gateway__content"></div>
    </div>
  );
};

export default StoreGatewayScreen;
