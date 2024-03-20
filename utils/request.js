import axios from "axios";

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

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

export { fetchProperties };
