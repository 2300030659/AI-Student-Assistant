import axios from "axios";

export const generateAI = async (data) => {

  const response = await axios.post(
    "http://localhost:5000/api/ai/generate",
    data
  );

  return response.data;
};