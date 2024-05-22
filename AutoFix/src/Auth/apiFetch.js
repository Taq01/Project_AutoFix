import { useState, useEffect } from "react";

//const useFetch = (endpoint, query) => {
const apiFetch = () => {
  const [data, setData] = useState([]);
 

 
  };
  return { data };
 

export default apiFetch;


  const fetchGetCredentials = async (username, password) => {
    console.log(itemData);

    query = `{"username":"${username}","password":"${password}"}`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-apikey": "381db213165f47d86d61d25469c979fc2e753",
        "cache-control": "no-cache",
      },
      // },
      // //  },
      // params: {

      //   username:"admin"
      // },
    };
    axios
      .get("https://autofix-e7a9.restdb.io/rest/json?q=" + query, options)
      .then((response) => {
        console.log("-------2------ ");

        console.log(response.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };
