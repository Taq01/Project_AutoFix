 
import * as SecureStore from "expo-secure-store";
 


// apikey == user id '_id' in db
export const storeApiKey = async (apiKey) => {
  try {
    await SecureStore.setItemAsync("apiKey", apiKey);
    console.log("API key stored successfully.");
  } catch (error) {
    console.error("Error storing API key:", error);
  }
};


 export const getApiKey = async () => {
   try {
     const apiKey = await SecureStore.getItemAsync("apiKey");
     return apiKey;
   } catch (error) {
     console.error("Error retrieving API key:", error);
   }
 };


 export const fetchData = async () => {
   try {
     const apiKey = await getApiKey();
     return apiKey;
   } catch (error) {
     console.error("Error fetching data:", error);
   }
 };


 
// usage any where:
// fetchData()
//   .then((apiKey) => {
//     console.log("user id", apiKey);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });