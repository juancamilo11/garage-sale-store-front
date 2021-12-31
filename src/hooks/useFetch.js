import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError("An error occurred. Awkward..");
      });
  }, [url]);

  return { data, error };
};
export default useFetch;
