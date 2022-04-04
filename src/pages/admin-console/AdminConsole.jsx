import React, { useEffect, useState } from "react";
import { startFetchLastMinuteTraceability } from "../../actions/storeCatalogActions";
import NavBarFormUserData from "../../components/navbar/NavBarFormUserData";

const AdminConsole = () => {
  const [lastUpdateDate, setLastUpdateDate] = useState("");
  const [lastTraceability, setLastTraceability] = useState([]);
  const [traceabilityValues, setTraceabilityValues] = useState({
    msAdminStores: { successTraces: [], errorTraces: [] },
    msAdminUsers: { successTraces: [], errorTraces: [] },
  });

  const { msAdminStores, msAdminUsers } = traceabilityValues;

  useEffect(() => {
    const interval = setInterval(() => {
      startFetchLastMinuteTraceability().then((traceabilityList) => {
        setTraceabilityValues({
          msAdminStores: {
            successTraces: traceabilityList.filter(
              (trace) =>
                trace.microserviceName === "ms-admin-stores" &&
                trace.status === "OK"
            ),
            errorTraces: traceabilityList.filter(
              (trace) =>
                trace.microserviceName === "ms-admin-stores" &&
                trace.status === "ERROR"
            ),
          },
          msAdminUsers: {
            successTraces: traceabilityList.filter(
              (trace) =>
                trace.microserviceName === "ms-admin-info-users" &&
                trace.status === "OK"
            ),
            errorTraces: traceabilityList.filter(
              (trace) =>
                trace.microserviceName === "ms-admin-info-users" &&
                trace.status === "ERROR"
            ),
          },
        });
      });
      setLastUpdateDate(new Date().toLocaleTimeString().split("T")[0]);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <NavBarFormUserData />
      <p
        style={{
          paddingTop: "60px",
          marginLeft: "20px",
          marginBottom: "-20px",
        }}
      >
        <small>Última fecha de actualización:</small> {lastUpdateDate}
      </p>
      <h1 className="text-center">Microservicio de tiendas</h1>
      {msAdminStores.successTraces.length > 0 ? (
        <h5 className="text-center">
          <b>Operaciones exitosas</b>{" "}
        </h5>
      ) : (
        <h5 className="text-center">
          <b>No han habido operaciones exitosas el último minuto</b>{" "}
        </h5>
      )}
      {msAdminStores.successTraces.map((trace) => (
        <>
          <h6>Fecha: {trace.currentDate}</h6>
          <b style={{ color: "green" }}>Detalle: {trace.detailInfo}</b>
          <br />
        </>
      ))}
      {msAdminStores.errorTraces.length > 0 ? (
        <h5 className="text-center">
          <b>Operaciones con errores</b>{" "}
        </h5>
      ) : (
        <h5 className="text-center">
          <b>No han habido operaciones erróneas el último minuto</b>{" "}
        </h5>
      )}
      {msAdminStores.errorTraces.map((trace) => (
        <>
          <h6>Fecha: {trace.currentDate}</h6>
          <b style={{ color: "red" }}>Detalle: {trace.detailInfo}</b>
          <br />
        </>
      ))}
      <h1 className="text-center mt-5">Microservicio de usuarios</h1>
      {msAdminUsers.successTraces.length > 0 ? (
        <h5 className="text-center">
          <b>Operaciones exitosas</b>{" "}
        </h5>
      ) : (
        <h5 className="text-center">
          <b>No han habido operaciones exitosas el último minuto</b>{" "}
        </h5>
      )}
      {msAdminUsers.successTraces.map((trace) => (
        <>
          <h6>Fecha: {trace.currentDate}</h6>
          <b style={{ color: "green" }}>Detalle: {trace.detailInfo}</b>
          <br />
        </>
      ))}
      {msAdminStores.errorTraces.length > 0 ? (
        <h5 className="text-center">
          <b>Operaciones con errores</b>{" "}
        </h5>
      ) : (
        <h5 className="text-center">
          <b>No han habido operaciones erróneas el último minuto</b>{" "}
        </h5>
      )}
      {msAdminUsers.errorTraces.map((trace) => (
        <>
          <h6>Fecha: {trace.currentDate}</h6>
          <b style={{ color: "red" }}>Detalle: {trace.detailInfo}</b>
          <br />
        </>
      ))}
    </div>
  );
};

export default AdminConsole;
