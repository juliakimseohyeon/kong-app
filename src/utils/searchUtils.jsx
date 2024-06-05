import axios from "axios";

const makeRequestCreator = () => {
  let token;

  return async (query) => {
    // Check if user made a request
    if (token) {
      token.cancel(); // Cancel the previous request before making a new request
    }
    // Create a new CancelToken
    token = axios.CancelToken.source();
    try {
      const response = await axios(query, { cancelToken: token.token });
      const result = response.data;
      return result;
    } catch (err) {
      if (axios.isCancel(err)) {
        // Handle if request was cancelled
        console.log("Request cancelled", err.message);
      } else {
        // Handle usual errors
        console.log("There was an error: ", err.message);
      }
    }
  };
};

export const search = makeRequestCreator();
