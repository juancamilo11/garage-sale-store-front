import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeStore } from "../../actions/storeCatalogActions";

const StoreEntry = ({ id, title, country, price, body, date, url }) => {
  const noteDate = moment(date);

  const dispatch = useDispatch();

  const handleSelectStore = () => {
    dispatch(activeStore(id, { title, country, price, body, date, url }));
  };

  return (
    <div className="store-catalog__store-entry" onClick={handleSelectStore}>
      {url ? (
        <div
          className="store-catalog__store-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      ) : (
        <div
          className="store-catalog__store-entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage:
              "url(https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-no-image-available-icon-flat.jpg)",
          }}
        ></div>
      )}

      <div className="store-catalog__store-entry-body">
        <h3 className="store-catalog__store-entry-title">{title}</h3>
        <p className="store-catalog__store-entry-content">{price + " USD"}</p>
        <span className="store-catalog__store-entry-description">
          {body.length < 21 ? (
            <>
              {body}{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </>
          ) : (
            body
          )}
        </span>
      </div>

      <div className="store-catalog__store-date-container">
        <div className="store-catalog__store-entry-date-box">
          <h5 className="store-catalog__store-entry-country mt-1">
            {country || "Colombia"}
            <hr />
          </h5>
          <span>{noteDate.format("Do")}</span>
          <h6>{noteDate.format("MMMM")}</h6>
          <h4>{noteDate.format("YYYY")}</h4>
        </div>
      </div>
    </div>
  );
};

export default StoreEntry;
