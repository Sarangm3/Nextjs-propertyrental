import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//fetch all properties
const fetchProperties = async () => {
  try {
    //handle case where env var not available to deploy
    if (!apiDomain) {
      return [];
    }
    const res = await axios.get(`${apiDomain}/properties`);
    return res.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

//fetch single property
const fetchProperty = async (id) => {
  try {
    //handle case where env var not available to deploy
    if (!apiDomain) {
      return null;
    }
    const res = await axios.get(`${apiDomain}/properties/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchProperties, fetchProperty };
