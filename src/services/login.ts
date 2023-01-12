import axios from "axios";

export const login = async (username: any, password: any) => {
  try {
    const { data } = await axios.post(
      "https://dimsuat6.deltainsurance.co.nz/TestBPWebAPI/login",
      {
        username,
        password,
      }
    );
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};
