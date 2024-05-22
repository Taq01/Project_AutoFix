import { useState, useEffect } from "react";


//const useFetch = (endpoint, query) => {
const useFetch = () => {
 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

 
  var options = {
    method: "GET",
    url: "https://autofix-e7a9.restdb.io/rest/json",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "381db213165f47d86d61d25469c979fc2e753",
    },
  };
  const fetchData = async () => {
    setIsLoading(true);

    try {
      request(options, function (error, response, body) {
        if (error) throw new Error(error);

        
      });

      setData(body);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data };
};

export default useFetch;